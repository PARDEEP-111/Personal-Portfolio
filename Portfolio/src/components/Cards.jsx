// Cards.jsx
function Cards(props) {
  return (
    <>
      {props.Projects.map((project, index) => (
        <div
          key={index}
          className="border border-white rounded-2xl h-[340px] w-[350px] shrink-0 bg-[black] flex flex-col justify-start items-start snap-center overflow-hidden"
        >
          <img
            className="h-60 w-full object-cover"
            src={project.img}
            alt={project.title}
          />
          <div className="p-2">
            <p className="text-[24px] font-bold">{project.title}</p>
            <p className="text-[18px] text-gray-400 font-semibold">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;