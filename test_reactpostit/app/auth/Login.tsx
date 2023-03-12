'use client'

import {signIn} from 'next-auth/react';

export default function Login() {
    return(
        <li className='list-none'>
            <button 
                onClick={() => signIn()} 
                className="
                    text-sm 
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
                Sign In
            </button>
        </li>
    )
}