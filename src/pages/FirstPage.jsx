import LinkCircle from "../components/LinkCircle"



function FirstPage() {


  return (
    <div className=" relative w-screen h-screen bg-green80 flex flex-col justify-center items-center">

      <div className="relative z-10 bottom-36">
        <span className='text-3xl leading-9 text-helloColor'>Hello</span><span className='text-3xl leading-9 text-white'>Bank.</span>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <LinkCircle />
        <p className="text-white font-medium">Swipe up to Log In</p>

        <p className="absolute bottom-10 font-medium text-lg text-white left-10">More</p>
        <p className="absolute bottom-10 font-medium text-lg text-white right-10">Sign Up</p>
      </div>
    </div>
  )
}

export default FirstPage