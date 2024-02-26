type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="w-full flex flex-col content-center">{children}</div>
}

export default Container
