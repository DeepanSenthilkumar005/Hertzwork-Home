import React from 'react';


function Features() {

    const List = ["Online Solutions", "Business Tools", "Customer Support"];
  const cards = [
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

    return(
      <section className='Feature page bg-black w-screen h-screen'>
        {/*Top content*/}
        <div className='topContent'>
        <p className="text-4xl font-bold mb-2 text-left text-white px-8">Our
        <span className='text-4xl font-bold text-orange-600'> Features</span> 
        </p> 
        <p className='text-2xl text-white tracking-widest px-8'>Discover a wide range of powerful features at Hertzworkz, designed to streamline your business operations and enhance productivity. From innovative solutions to seamless user experiences, we provide tools that empower growth and success.</p>
        </div>

        

    </section>   
    )

}

export default Features;