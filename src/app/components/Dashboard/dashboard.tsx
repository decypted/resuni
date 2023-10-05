"use client"


import Link from "next/link";
import UploadButton from "./UploadButton"
import { trpc } from "@/app/_trpc/client"
import { useState } from 'react';
import { Ghost } from "lucide-react";
import { Loading } from "@nextui-org/react";
import Skeleton from "react-loading-skeleton";

const Dashboard = () => {
    const {data: files} = trpc.getUserFiles.useQuery()
    const [isLoading] = useState();
    return (
       <main className="mx-auto max-w-7xl md:p-10">
            <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
                <h1 className="mb-3 font-bold text-5xl text-slate-800">My Resumes</h1>

                <UploadButton/>
            </div>
{/* display all users files */}
            {files && files?.length !==0 ? (
                <ul className="mt-8 grid grid-cols-1">
                    {files.sort(
                        (a,b) =>
                        new Date(b.createdAt).getTime() - 
                        new Date(a.createdAt).getTime()
                    ).map((file) => (
                        <li key={file.id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg">
                           <Link href={`/dashboard/${file.id}`} className="flex flex-col gap-2">
                            <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
                                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-100"></div>
                            </div>
                            </Link> 
                        </li>
                    ))}
                </ul>
            ) : isLoading ? (
                <Loading>Loading</Loading>
            ) : (
                <div className="mt-16 flex flex-col items-center gap-2">
                    <Ghost className="h-15 w-15 text-slate-900"/>
                    <h3 className="font-semibold">It&apos;s empty here, let's start by uploading a resume!</h3>
                    <p>Only PDF file types are supported.</p>
                </div>
            )}
       </main>
    )
}

export default Dashboard