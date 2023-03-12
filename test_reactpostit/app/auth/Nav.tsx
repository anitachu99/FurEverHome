// server-side auth
// get users straight from server
import Link from "next/link";
import Login from './Login';
import Logged from './Logged';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../pages/api/auth/[...nextauth]';

export default async function Nav() {
    const session = await getServerSession(authOptions);

    return( 
        <nav className="flex justify-between items-center py-8 ">
            <Link href={'/'}>
                <h1 className="font-bold text-lg">Send it</h1>
            </Link>
            <ul className="flex items-center gap-6"></ul>
                {/* only want to see login page if user is not signed in */}
                {!session?.user && <Login />}
                {/* show user's name */}
                {/* {session?.user && <h1>{session.user.name}</h1>} */}
                {session?.user && <Logged image={session.user.image || ""}/>}

        </nav>
    )
}