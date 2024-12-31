import './WelcomePage.css';
function WelcomePage() {
  return (
    <div className="welcomePage bg-black min-h-screen w-screen grid md:grid-cols-2 text-center">
        <div className="leftcontent md:col-span-1 h-3/5 my-auto p-7 px-11 ms-20 rounded-md rounded-br-3xl bg-darkGray">
            <h2 className="heading mt-5 text-white text-4xl">Welcome to <span className='text-orange-600'>Hertzworkz!</span></h2>
            <p className='text-welcometext text-xl text-left mt-8'>Discover a world where innovation meets excellence. At Hertzworkz, we are dedicated to delivering cutting-edge solutions that empower businesses to thrive in a dynamic landscape. With a passion for design, development, and advanced technologies, we create impactful experiences that drive success. Join us on our journey to shape the future and make a meaningful difference together.</p>
        </div>
        <div className="rightContent">

        </div>

    </div>
  )
}

export default WelcomePage;