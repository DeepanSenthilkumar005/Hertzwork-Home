import welcomePerson from '../assets/welcomePerson.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Icon3.png'
import icon4 from '../assets/Icon4.png'
import iconback from '../assets/iconback.png'
function WelcomePage() {
    const cardData = [
      { title: "Innovative Design", icon: icon1 },
      { title: "Seamless Development", icon: icon2 },
      { title: "Advanced Technologies", icon: icon3 },
      { title: "Customer Focused", icon: icon4 },
    ];
  
    return (
      <section className="welcomePage font-s bg-black w-screen h-screen text-center grid md:grid-rows-4">
        {/* Top Content */}
        <div className="topContent md:row-span-3 p-0 m-0 w-full h-full grid md:grid-cols-2">
          {/* Left Content */}
          <div className="leftContent justify-center stm:mx-auto m-2 p-2 md:rounded-br-[4rem] md:col-span-1 h-fit my-auto p-7 px-11 ms-20 rounded-md bg-darkGray">
            <h2 className="heading mt-5 text-white text-4xl">
              Welcome to <span className="text-orange-600">Hertzworkz!</span>
            </h2>
            <p className="text-welcometext text-xl text-left mt-8">
              Discover a world where innovation meets excellence. At Hertzworkz, we are dedicated to delivering cutting-edge solutions that empower businesses to thrive in a dynamic landscape. With a passion for design, development, and advanced technologies, we create impactful experiences that drive success. Join us on our journey to shape the future and make a meaningful difference together.
            </p>
          </div>
          {/* Right Content */}
          <div className="rightContent md:row-span-1 flex justify-center items-center">
            <img
              src={welcomePerson}
              alt="Hertzworkz Logo or Relevant Visual"
              className="rounded-md object-cover p-16 mb-2"
            />
          </div>
        </div>
  
        {/* Bottom Content */}
        <div className="bottomContent grid stm:grid-cols-2 md:grid-cols-4 gap-3 p-2 bg-[#313132] m-4 rounded-md h-fit text-welcometext">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-md my-2 hover:scale-105 duration-200 ease-in-out flex flex-col items-center justify-center p-4"
            >
              {/* <i className="text-3xl mb-2">{card.icon}</i> */}
              <img src={iconback} alt="" className=' ms-auto hover:cursor-pointer hover:rotate-45 duration-200 ease-in-out transition-all' />
              <img src={card.icon} alt={card.title} className='' />
              <p className="text-white">{card.title}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default WelcomePage;
  