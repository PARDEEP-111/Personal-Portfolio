const Hero = () => {
  return (
    <div
      id="home"
      className=" scroll-mt-[220px] text-white py-15 w-full overflow-x-hidden"
    >
      {/* Row 1 */}
      <div className="w-full flex flex-col justify-center items-center gap-4 lg:flex-row-reverse lg:justify-evenly lg:gap-10">
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

      {/* Row 2 */}
      <div className="flex w-full flex-col sm:flex-row items-center justify-center mt-10">
        <a
          href="#connect"
          className="border border-white flex text-sm lg:text-2xl m-2 justify-center items-center w-67.5 text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          Get In Touch
        </a>

        <a
          href="/resume.pdf"
          download
          className="border w-67.5 flex text-sm lg:text-2xl justify-center m-2 items-center border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          Download resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
