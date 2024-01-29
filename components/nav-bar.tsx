import { useState } from "react"
import SBLogo from "./sb-logo"

type Props = {
    navItems: string[]
}

const NavBar = ({ navItems }: Props) => {
    // const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <nav className="px-12 py-6 gap-9 w-screen bg-[#F9F9F9] flex flex-row items-center
        sticky top-0 text-md font-cosmicaBold">
            <SBLogo />
            <h3>ABOUT</h3>
            <h3>WORK</h3>
            <h3>PLAY</h3>
        </nav>
    )
}

export default NavBar