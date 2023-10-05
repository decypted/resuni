import MaxWidthWrapper from "../MaxWidthWrapper"
import Link from "next/link"
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";

const Navibar = () => {
    return (
        <nav className="static h-14 inset-x-0 z-30 w-full border-b border-gray-200 bg-white/45 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href='/' className="flex z-40 font-bold"><span className="">Resuni</span></Link>

                    {/* To Do: add mobile navbar */}
                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Navbar>
                                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                                    <NavbarItem>
                                    <Link color="foreground" href="#">
                                        Features
                                    </Link>
                                    </NavbarItem>
                                    <NavbarItem isActive>
                                    <Link href="#" aria-current="page">
                                        Customers
                                    </Link>
                                    </NavbarItem>
                                    <NavbarItem>
                                    <Link color="foreground" href="#">
                                        Integrations
                                    </Link>
                                    </NavbarItem>
                                </NavbarContent>
                                <RegisterLink className="bg-black text-white px-4 py-3 rounded font-semibold">Get Started</RegisterLink>
                            </Navbar>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
        
       
        
    )
}

export default Navibar