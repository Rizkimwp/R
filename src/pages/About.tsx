const About = () => {
    return (
        <>
            <div className="w-full h-full mx-auto p-5">
  <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-5 md:space-y-0">
    {/* Bagian Gambar */}
    <div className="p-5 md:p-10 w-full md:w-1/2 flex justify-center">
      <img src="asset/bg-hero.png" className="max-w-full md:max-w-4xl" alt="Hero" />
    </div>
    
    {/* Bagian Konten */}
    <div className="p-5 md:p-10 w-full md:w-1/2 flex flex-col space-y-5">
      <p className="font-montserrat text-color4 text-md font-semibold  md:text-left">ABOUT ME</p>
      <h2 className="font-playfair text-2xl text-white font-bold  md:text-left">
        Why Hire me for Your Next Project?
      </h2>
      <p className="text-white text-md font-lora  md:text-left">
        <span className="font-semibold">Expertise in Modern Frontend:</span> I build high-performance, scalable web solutions using React and TypeScript. <br />
        <span className="font-semibold">Clean & Maintainable Code:</span> My code is designed for long-term growth and easy maintenance. <br />
        <span className="font-semibold">User-Centric Design:</span> I focus on creating intuitive interfaces that delight users. <br />
        <span className="font-semibold">Problem Solver:</span> I provide tailored solutions to meet your business goals.
      </p>
      <h2 className="font-playfair text-2xl text-white font-bold  md:text-left">What I Offer?</h2>
      <p className="text-white text-md font-lora  md:text-left">
        - Interactive and responsive web applications. <br />
        - Professional landing pages to boost your brand. <br />
        - Seamless API integration for smooth functionality.
      </p>
      <p className="text-md text-white  md:text-left">
        Let’s turn your ideas into reality. 
        <a href="#" className="text-color4 font-semibold hover:text-white hover:text-xl">
          <p> Contact Me </p> 
        </a> 
        today to start your project! 🚀
      </p>
    </div>
  </div>
</div>

        </>
    )
}

export default About