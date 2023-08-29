import React from 'react'

interface ITopic {
  name: string
  detail?: string
}

const Banner = (props: ITopic) => {
  return (
    <div className="flex flex-col justify-center items-center h-40 bg-[#357A38] text-white">
      <p className="font-semibold text-[48px]">{props.name}</p>
      <p className="font-semibold text-[25px]">{props.detail}</p>
    </div>
  )
}

export default Banner
