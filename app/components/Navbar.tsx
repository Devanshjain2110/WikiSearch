import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <div>
        <nav className="bg-slate-600 p-4 flex flex-col justify-between md:flex-row sticky top-0 drop-shadow-xl">
            <h1 className="text-3xl font-bold text-white mb-2 grid place-content-center md:mb-0">
                <Link href="/"> WikiRocket!</Link>
            </h1>
            <Search />
            </nav>     
    </div>
  )
}
