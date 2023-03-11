// server-side auth
// get users straight from server
import Link from "next/link";
import Login from './Login';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../pages/api/auth/[...nextauth]';

export default async function Nav() {
    const session = await getServerSession(authOptions);
    console.log(session);
    return( 
        <nav className="nav-panel">
            <Link href={'/'}>
                <h1 className="sendit-link">Send it</h1>
            </Link>
            <ul className="signIn">
                {/* only want to see login page if user is not signed in */}
                {!session?.user && <Login />}
                {/* show user's name */}
                {session?.user && <h1>{session.user.name}</h1>}
            </ul>
        </nav>
    )
}