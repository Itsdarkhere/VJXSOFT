import Link from "next/link";


export default function Nav() {

    return (
        <header className=" w-full sticky flex justify-center items-center top-0 py-6 px-4">
            <nav className=" max-w-7xl flex flex-row justify-between w-full">
                <h4>VJXSOFT</h4>
                <div>
                    <ul className="flex justify-center items-center space-x-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}