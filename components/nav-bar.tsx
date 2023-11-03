import { useState } from "react"

type Props = {
    navItems: string[]
}

const NavBar = ({ navItems }: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <nav></nav>
    )
}

export default NavBar