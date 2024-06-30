import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-16 sm:py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Car Inspection at
        <div className=" lg:block">Your Doorstep</div>
      </h1>
      <p className="mb-8 leading-relaxed"> VehicleVista is a solution your need of finding best and reliable car inspectors around you, We uses artificial intelligence to find best car mechanics for you, Happy Finding!</p>
      <div className="flex justify-center">
        <Link to='/signup'><button className="inline-flex text-white bg-[#071952] border-0 py-2 px-6 focus:outline-none hover:bg-[#088395] rounded text-lg">Book Now</button></Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src=".\public\images\main\heroImganime.jpg"/>
    </div>
  </div>
</section>
    </>
  )
}

export default Hero