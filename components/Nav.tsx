import Image from "next/image";
import Link from "next/link";
import logo from '../public/VJXSOFT.png'


export default function Nav() {

    return (
        <header className=" w-full bg-black border-b border-b-zinc-800 sticky flex justify-center items-center top-0 py-6 px-4">
            <nav className=" max-w-7xl flex flex-row justify-between items-center w-full">
                <Link href="/">
                    <Image height={40} src={logo} alt="VJXSOFT" />
                </Link>
                <div>
                    <ul className="menu menu-horizontal rounded-box pr-0 hidden lg:flex">
                        <li>
                            <details>
                                <summary className="text-sm text-zinc-300">Blogi</summary>
                                <ul className=" min-w-56">
                                    <li className=" text-zinc-800">
                                        <Link href="/about">Pienyrittäjän SEO opas</Link>
                                    </li>
                                    <li className=" text-zinc-800">
                                        <Link href="/about">Paikallinen SEO</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li className="text-sm h-10 flex items-center text-zinc-300">
                            <Link href="/about">Palvelut</Link>
                        </li>
                        <li className="text-sm h-10 flex items-center text-zinc-300">
                            <Link href="/hinnasto">Hinnasto</Link>
                        </li>
                        <li className="text-sm h-10 flex items-center text-zinc-300">
                            <Link className="pr-0" href="/about">Ota yhteyttä</Link>
                        </li>
                    </ul>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content text-zinc-950 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a>Blogi</a>
                                <ul className="p-2">
                                    <li>
                                        <Link href="/hinnasto">Pienyrittäjän SEO opas</Link>
                                    </li>
                                    <li>
                                        <Link href="/hinnasto">Paikallinen SEO</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/hinnasto">Palvelut</Link>
                            </li>
                            <li>
                                <Link href="/hinnasto">Hinnasto</Link>
                            </li>
                            <li>
                                <Link href="/hinnasto">Ota yhteyttä</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}