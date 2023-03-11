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
                <Login />
            </ul>
        </nav>
    )
}