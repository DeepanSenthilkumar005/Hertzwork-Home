import React from 'react';


function Features() {

    const List = ["Online Solutions", "Business Tools", "Customer Support"];
  const cards1= [
    {
      title: "Web Development Services",
      description:
        "Access a suite of web development tools that allow you to manage your website efficiently.",
    },
    {
      title: "Mobile App Access",
      description:
        "Manage your business or app from anywhere using secure online connections.",
    },
    {
      title: "Secure Data Access",
      description:
        "Safely access important data and reports from the cloud.",
    },
    {
      title: "Remote Collaboration Tools",
      description:
        "Share, communicate, and collaborate in real-time, no matter where you are.",
    },
  ];
  const cards2= [
    {
      title: "Analytics & Reporting",
      description:
        "Tools for tracking your business metrics, analyzing trends, and reporting on performance.",
    },
    {
      title: "Financial Tools",
      description:
        "Manage budgets, expenses, and transactions, helping to keep finances in check.",
    },
    {
      title: "Project Management Tools",
      description:
        "Coordinate tasks, track progress, and manage deadlines to ensure your team stays productive.",
    },
    {
      title: "AI/ML Solutions",
      description:
        "Use intelligent tools to automate tasks, predict trends, and optimize business strategies.",
    },
  ];
  const cards3= [
    {
      title: "24/7 Technical Support",
      description:
        "Get round-the-clock assistance with any technical challenges or system issues.",
    },
    {
      title: "Helpdesk & Ticketing",
      description:
        "A dedicated helpdesk to resolve queries and manage service requests efficiently.",
    },
    {
      title: "Customer Success Team",
      description:
        "Guidance to help clients maximize the potential of their services or products.",
    },
    {
      title: "Training and Onboarding",
      description:
        "Personalized support to help you and your team get up to speed with new systems and tools.",
    },
  ];    

    return(
      <section className='Feature page bg-black w-screen h-screen'>
        {/*Top content*/}
        <div className='topContent'>
          <p className="text-4xl font-bold mb-2 text-left text-white px-8">Our
            <span className='text-4xl font-bold text-orange-600'> Features</span> 
          </p> 
          <p className='text-2xl text-white tracking-widest px-8'>Discover a wide range of powerful features at Hertzworkz, designed to streamline your business operations and enhance productivity. From innovative solutions to seamless user experiences, we provide tools that empower growth and success.</p>
        </div>
        {/* Bottom Content */}


        

    </section>   
    )

}

export default Features;