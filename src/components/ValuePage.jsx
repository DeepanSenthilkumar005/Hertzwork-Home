import icon1 from '../assets/ChoosePage/Icon1.svg';
import icon2 from '../assets/ChoosePage/Icon2.svg';
import icon3 from '../assets/ChoosePage/Icon3.svg';
import icon4 from '../assets/ChoosePage/Icon4.svg';
import icon5 from '../assets/ValuePage/Icon1.svg'
import icon6 from '../assets/ValuePage/Icon2.svg'
import icon7 from '../assets/ValuePage/Icon3.svg'
import icon8 from '../assets/ValuePage/Icon4.svg'
import icon9 from '../assets/ValuePage/Icon.svg'

function ValuePage() {
      const cardData = [
        {
          title: "Proven expertise across industries",
          icon: icon1,
          subTitle: "Our extensive experience spans diverse sectors, enabling us to deliver solutions that meet unique industry needs.",
        },
        {
          title: "Client-focused approach for personalized solutions",
          icon: icon2,
          subTitle: "We prioritize understanding your goals to create tailored strategies that drive meaningful results.",
        },
        {
          title: "Cutting-edge technology and design practices",
          icon: icon3,
          subTitle: "We leverage the latest tools and trends to craft innovative, future-ready solutions.",
        },
        {
          title: "Reliable support and continuous improvement",
          icon: icon4,
          subTitle: "Our commitment to excellence includes ongoing support and enhancements to ensure long-term success.",
        },
      ];
    
  return (
    <section className='bg-black'>
        {/* Top Content */}
        <div className="BelowContent bg-black grid md:grid-cols-4 gap-6 p-8">
            {cardData.map((card, index) => (
            <div
                key={index}
                className={`hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center p-6 text-center ${
                index < 3 ? 'md:border-r-2 md:border-white' : ''
                }`}
            >
                <img src={card.icon} alt={card.title} className="w-16 mb-4" />
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-csLightGray">{card.subTitle}</p>
            </div>
            ))}
      </div>
      {/* Bottom Content */}
      <div className="ButtomContent justify-center align-middle grid grid-cols-1 md:grid-cols-3">
            <div className='p-12'>
                <img src={icon9} alt="" />
                <br />
                <p className="text-3xl font-bold mb-2 text-left text-white text-">Our Values</p>
                <p className="text-csLightGray p-4 text-xs space-x-8 space-y-8 justify-center text-left">
                    Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
                </p>
            </div>
            {/* Heading1 */}
            <div>

            </div>
            {/* Heading2 */}
            <div>

            </div>
      </div>
    </section>
  )
}

export default ValuePage