import { ThreeCircles } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center mt-12">
      <ThreeCircles
        height="100"
        width="100"
        color="#D20303"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  )
}

export default Loading
