import Link from "next/link";
import React from "react";
import Shorten from "../app/Shorten/page";

const Navbar = () => {
    return (
        <nav className="h-16 bg-purple-700 flex justify-between px-3 items-center text-white ">
            <div className = "logo font-bold text-lg">
                <Link href="/" ><li>ShrinkURL</li></Link>
            </div>
            <ul className = " flex justify-center gap-4 items-center ">
                <Link href="/" ><li>Home</li></Link>
                <Link href="/about"><li>Contact</li></Link>
                <Link href="/"><li>Shorten</li></Link>
                <Link href="/contact"><li>Contact Us</li></Link>
                <li className="flex gap-3">
                    <Link href="/shorten"><button className=" flex p-3 py-1 font-bold shadow-lg rounded-lg bg-purple-500 ">Try Now</button></Link>
                    <Link href="/git"><button className=" flex p-3 py-1 font-bold shadow-lg rounded-lg bg-purple-500 ">GitHub</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;