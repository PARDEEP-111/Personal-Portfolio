function Experience() {
  const eduAndExp = [
    {
      title: "BCA student",
      time: "Currently",
      description:
        " Currently Pursuing BCA while building practical full-stack web devlopment skills through personal projects and continous leaning.",
        icon:"🎓"
    },
    {
      title: "Document specialist (Part time)",
      time: "2024-2026",
      description:
        " Created and formatted educational question and answer documents using Microsoft word. Ensured accurate formatting.",
        icon:"💼"
    },
    
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#161513] py-6">
      <h1 className="font-bold text-4xl text-white p-4 mb-4">
        Education & experience
      </h1>

      <div className="flex flex-col w-[90%] lg:w-[50%] items-center justify-center text-white">
        {eduAndExp.map((item, index) => {
          return (
            <div key={index} className={`w-full p-4 ${
  index !== eduAndExp.length - 1 ? "border-b border-gray-600" : ""
}`}>
              <div className=" w-full flex  items-center justify-between mb-2">
                <div className=" flex gap-2 items-center">
                <span className="text-3xl">{item.icon}</span>
                <h2 className="font-bold text-2xl">{item.title}</h2>
                </div>
                <p className="text-sm text-gray-400 ">{item.time}</p>
              </div>

              <p className="text-base">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
