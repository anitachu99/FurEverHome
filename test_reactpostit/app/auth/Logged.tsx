'use client'

import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from 'next/link';

type User = {
    image: string
}

export default function Logged( { image } : User) {
    return (
        <li className="flex gap-6 items-center">
            <button 
                onClick={() => signOut()} 
                className="text-sm 
                    bg-violet-400 
                    text-slate-100 
                    py-2 
                    px-8 
                    rounded-lg
                    hover:bg-violet-500
                    active:bg-violet-600
                    focus:outline-none 
                    focus:ring 
                    focus:ring-violet-300">
                SignOut
            </button>
            <Link href={"/dashboard"}>
                <Image 
                    width={65} 
                    height={64} 
                    className="w-14 rounded-full"
                    src={image} 
                    alt="" 
                    priority
                />
            </Link>
        </li>
    )
}