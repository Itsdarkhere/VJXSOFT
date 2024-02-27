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
                    <ul className="menu menu-horizontal rounded-box">
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
                    </ul>
                </div>
            </nav>
        </header>
    )
}