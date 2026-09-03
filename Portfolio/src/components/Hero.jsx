const Hero = () => {
  return (
    <div className="bg-[#161513] text-white py-15 px-6  ">
      {/* Row 1: image + text */}
      <div className="w-full justify-center items-center flex flex-col gap-4 lg:flex-row-reverse lg:justify-evenly lg:items-center lg:gap-10">
        <img
          className="w-32 h-32 rounded-full lg:w-52 lg:h-52 object-cover"
          src="https://media.istockphoto.com/id/587805156/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=gkvLDCgsHH-8HeQe7JsjhlOY6vRBJk_sKW9lyaLgmLo="
          alt="Pardeep Singh"
        />

        <div className="flex flex-col items-center text-center p-5 lg:items-start lg:text-left lg:max-w-xl">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Hello, I <br className="lg:hidden" /> am Pardeep Singh
          </h1>

          <div className="mt-3 text-[rgb(132,145,160)] font-semibold text-lg">
            <p>Full stack web developer</p>
            <p>BCA student</p>
          </div>

          <p className="mt-4 text-white text-sm lg:text-base">
            I build responsive web applications using React, MongoDB, NodeJs,
            NextJs and ExpressJs. I am currently looking for web developer
            internships where I can contribute and continue learning.
          </p>
        </div>
      </div>

      {/* Row 2: buttons, centered, full width */}
      <div className="flex   items-center justify-center gap-4 mt-10">
        <a
          href="#contact"
          className="border border-white flex  justify-center items-center  w-[230px] text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          Get In Touch
        </a>

        <a
          href="/resume.pdf"
          download
          className="border  w-[230px] flex  justify-center items-center border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          Download resume 
        </a>
      </div>
    </div>
  );
};

export default Hero;
