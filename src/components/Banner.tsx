import robot1 from '../assets/robot1.png'
import robot2 from '../assets/robot2.png'
import robot3 from '../assets/robot3.svg'

interface ITopic {
  name: string
  detail?: string
}

const Banner = (props: ITopic) => {
  return (
    <div className="flex justify-between px-[50px] h-[180px] bg-[#D20303] text-white">
      <div className="flex flex-col justify-center">
        <p className="font-semibold text-[48px]">{props.name}</p>
        <p className="font-semibold text-[25px]">{props.detail}</p>
      </div>
      <div className="flex items-center gap-4 pr-[14px]">
        <img src={robot1} alt="robot1 logo" className="w-auto h-[120px] mt-[9px] animate-shake animate-infinite" />
        <img src={robot2} alt="robot2 logo" className="w-auto h-[120px] animate-bounce animate-infinite " />
        <img src={robot3} alt="robot3 logo" className="w-auto h-[120px] animate-wiggle-more animate-infinite" />
      </div>
    </div>
  )
}

export default Banner
