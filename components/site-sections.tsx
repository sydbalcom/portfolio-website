import FlowerLogo from "./flower-logo"

type Props = {
    name: string
}

const SiteSection = ({name}: Props) => {
    return (
        <section id={name} className="mx-12 pt-28 pb-6 flex flex-row items-center gap-2">
            <h2 className="text-2xl font-openSauceBold">{name}</h2>
            {/* TODO: make bg flowers scroll slower than other elements; bring back diff colors */}
            <FlowerLogo
                fillColor='#295092'
                width='24'
            />
        </section>
    )
}

export default SiteSection