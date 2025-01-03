import './WelcomePage.css';
function WelcomePage() {
  return (
    <section className="welcomePage bg-black w-screen text-center grid md:grid-rows-4">
        {/* Top Content */}
        <div className="topContent md:row-span-3 min-h-screen grid md:grid-cols-2">
            {/* Left Content */}
            <div className="leftcontent md:col-span-1 h-fit my-auto p-7 px-11 ms-20 rounded-md rounded-br-3xl bg-darkGray">
                <h2 className="heading mt-5 text-white text-4xl">Welcome to <span className='text-orange-600'>Hertzworkz!</span></h2>
                <p className='text-welcometext text-xl text-left mt-8'>Discover a world where innovation meets excellence. At Hertzworkz, we are dedicated to delivering cutting-edge solutions that empower businesses to thrive in a dynamic landscape. With a passion for design, development, and advanced technologies, we create impactful experiences that drive success. Join us on our journey to shape the future and make a meaningful difference together.</p>
            </div>
            {/* Right Content */}
            <div className="rightContent md:row-span-1">

            </div>
        </div>
        {/* Buttom Content */}
        <div className="buttomContent bg-darkGray m-4 rounded-md h-4/5 text-white">
                <div>
                    <span></span>
                    <i></i>
                    <p>Innovtive Design</p>
                </div>
        </div>

    </section>
  )
}

export default WelcomePage;