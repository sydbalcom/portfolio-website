import FlowerLogo from "./flower-logo"

type Props = {
    name: string
}

const SiteSection = ({name}: Props) => {
    return (
        <section id={name} className="mx-12 pb-12 flex flex-row items-center gap-2">
            <h2 className="text-2xl font-openSauceBold">{name} make bg flowers scroll slower than other elements; bring back diff colors</h2>
            <FlowerLogo
                fillColor='#295092'
                width='24'
            />
        </section>
    )
}

export default SiteSection