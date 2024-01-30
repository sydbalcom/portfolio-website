import { useState } from "react"
import SBLogo from "./sb-logo"
import Link from "next/link"

type Props = {
    navItems: string[]
}

const NavBar = ({ navItems }: Props) => {
    // const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <nav className="px-12 py-6 gap-9 w-full bg-[#F9F9F9] flex flex-row items-center
        sticky top-0 text-md font-cosmicaBold drop-shadow-md shadow-[#295092] rounded-b-xl">
            <Link href="/" className="opacity-90 hover:opacity-100 hover:scale-110 hover:box-shadow-sm">
                <SBLogo />
            </Link>
            <Link href="/#About" className="opacity-90 hover:opacity-100 hover:scale-110">
                <h3>ABOUT</h3>
            </Link>
            <Link href="/#Work" className="opacity-90 hover:opacity-100 hover:scale-110">
                <h3>WORK</h3>
            </Link>
            <Link href="/#Play" className="opacity-90 hover:opacity-100 hover:scale-110">
            <h3>PLAY</h3>
            </Link>
        </nav>
    )
}

export default NavBar