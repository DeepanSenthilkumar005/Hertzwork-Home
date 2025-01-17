import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

function FaqPage() {
  const Questions = [
    {
      question: "What services does Hertzworkz provide?",
      answer:
        "Hertzworkz offers a wide range of services, including web development, mobile app design, AI/ML solutions, UI/UX design, and custom software development to meet the unique needs of your business.",
    },
    {
      question: "How can Hertzworkz help my business?",
      answer:
        "Hertzworkz collaborates closely with your team to understand your challenges and deliver innovative solutions that drive efficiency, growth, and success.",
    },
    {
      question: "What industries does Hertzworkz work with?",
      answer:
        "We work with industries including technology, healthcare, finance, retail, education, and more, tailoring solutions to specific business needs.",
    },
    {
      question: "How long does it take to complete a project with Hertzworkz?",
      answer:
        "Project timelines depend on the complexity and requirements. However, we provide clear timelines and updates to ensure transparency.",
    },
    {
      question:
        "Do you offer ongoing support and maintenance after the project is completed?",
      answer:
        "Yes, we offer post-project support, maintenance, and updates to ensure your solution remains effective and up-to-date.",
    },
    {
      question: "Can you work with existing design or development frameworks?",
      answer:
        "Absolutely! We can adapt to and work with your existing frameworks to ensure seamless integration.",
    },
    {
      question: "How involved will I be in the project development process?",
      answer:
        "We value collaboration and keep you involved throughout the process, from planning to delivery, ensuring your vision is realized.",
    },
    {
      question: "Can you help with website or app maintenance and updates?",
      answer:
        "Yes, we provide comprehensive maintenance and update services to ensure your platform operates smoothly.",
    },
  ];

  const [visibleAnswers, setVisibleAnswers] = useState(
    Array(Questions.length).fill(false)
  );

  const toggleAnswer = (index) => {
    setVisibleAnswers((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const FaqItem = ({ question, answer, index, isVisible, onClick }) => (
    <div
      className="faq-item border-b border-gray-100 pb-4 cursor-pointer hover:bg-gray-800"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="bg-gradient-to-b from-gray-600 to-transparent min-w-10 min-h-10 rounded-md flex justify-center items-center text-white font-bold text-lg mr-4">
          {index + 1}
        </div>
        <h3
          className={`text-lg stm:text-[12px] font-bold ${
            isVisible ? "text-green-500" : "text-white"
          }`}
        >
          {question}
        </h3>
        {isVisible ? (
          <FaTimes
            className="ms-auto text-white me-8 hover:scale-110 transition-all duration-200 ease-in-out"
            onClick={(e) => {
              e.stopPropagation(); // Prevents toggling the visibility when clicking the icon.
              toggleAnswer(index);
            }}
          />
        ) : (
          <FaPlus
            className="ms-auto text-white me-8 hover:scale-110 transition-all duration-200 ease-in-out"
          />
        )}
      </div>
      {isVisible && <p className="text-base text-gray-400 mt-2">{answer}</p>}
    </div>
  );

  return (
    <section className="FAQ_Page p-4 bg-black w-full max-w-full overflow-x-hidden">
      <div className="Content md:border-2 border-gray-600 rounded-lg">
        {/* Header */}
        <div className="Heading h-60 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl stm:text-xl mb-2 text-center">Frequently Asked Questions</h1>
          <p className="text-lg stm:text-[12px] text-center stm:px-2 px-4">
            Still have questions? Contact our team at
            <span className="text-green-500 ml-1">hello@hertzworkz.com</span>
          </p>
        </div>

        {/* FAQ Section */}
        <div className="BottomContent grid grid-cols-1 md:grid-cols-2 gap-8 stm:p-4 md:p-8">
          {/* Left Column */}
          <div className="space-y-6">
            {Questions.slice(0, 4).map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                index={index}
                isVisible={visibleAnswers[index]}
                onClick={() => toggleAnswer(index)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {Questions.slice(4).map((item, index) => (
              <FaqItem
                key={index + 4}
                question={item.question}
                answer={item.answer}
                index={index + 4}
                isVisible={visibleAnswers[index + 4]}
                onClick={() => toggleAnswer(index + 4)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqPage;
