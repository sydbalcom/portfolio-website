import FlowerLogo from "./flower-logo"

const SBLogo = () => {
    return (
        <section className="mx-12 my-6 flex flex-row items-center gap-1
        px-2 py-1 rounded-md bg-[#EFEFEF] w-fit h-fit">
            <h2 className="text-3xl font-cosmicaBold">SB</h2>
            <FlowerLogo
                fillColor='#295092'
                width='24'
            />
        </section>
    )
}

export default SBLogo