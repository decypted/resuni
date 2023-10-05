
import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {Button, ButtonGroup} from "@nextui-org/react";


export default function Hero (){
    return(
        <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
     <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
       <p className="text-sm font-semibold text-slate-800">
        Resuni is now public!
       </p>
     </div>
     <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">Chat with your <span className='text-blue-600'>resumes</span> in seconds!</h1>
     <p className="mt-5 max-w-prose text-zinc sm:text-xl">
      Resuni gives you the ability to chat with your Resume, simply upload your resume and ask questions on how to improve it!
     </p>
    <div className="mt-5">
    <Link href='/dashboard' target='_blank' className='flex text-white p-5 z-50'>
    <Button size='lg' color='primary' className='z-50 font-bold'>
        Get Started <ArrowRight className='ml-2 h-5 w-5'/>
     </Button>
     </Link>
    </div>
    
   </MaxWidthWrapper>
    )
}
