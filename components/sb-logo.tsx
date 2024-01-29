import FlowerLogo from "./flower-logo"

const SBLogo = () => {
    return (
        <section className="flex flex-row items-center gap-1
        px-2 py-1 rounded-md bg-[#EFEFEF] w-fit h-fit">
            <h2 className="text-2xl font-cosmicaBold">SB</h2>
            <FlowerLogo
                fillColor='#295092'
                width='18'
            />
        </section>
    )
}

export default SBLogo