interface ITopic {
  name: string
  detail?: string
}

const Banner = (props: ITopic) => {
  return (
    <div className="flex flex-col justify-center items-center pl-[50px] h-40 bg-[#D20303] text-white">
      <p className="font-semibold text-[48px]">{props.name}</p>
      <p className="font-semibold text-[25px]">{props.detail}</p>
    </div>
  )
}

export default Banner
