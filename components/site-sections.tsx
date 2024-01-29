import FlowerLogo from "./flower-logo"

type Props = {
    name: string
}

const SiteSection = ({name}: Props) => {
    return (
        <section className="mx-12 pb-12 flex flex-row items-center gap-2">
            <h2 className="text-2xl font-openSauceBold">{name}</h2>
            <FlowerLogo
                fillColor='#295092'
                width='24'
            />
        </section>
    )
}

export default SiteSection