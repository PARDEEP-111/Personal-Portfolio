function Connect() {
  const contact = [
    { key: "email", value: "pardeepsingh091209@gmail.com", href: "mailto:pardeepsingh091209@gmail.com" },
    { key: "location", value: "Punjab, India" },
    { key: "github", value: "github.com/PARDEEP-111", href: "https://github.com/PARDEEP-111" },
    { key: "linkedin", value: "linkedin.com/in/pardeep-singh-27ba483a3", href: "https://www.linkedin.com/in/pardeep-singh-27ba483a3" },
    { key: "phone", value: "+91 9530767602", href: "tel:+919530767602" },
  ];

  return (
    <div id="connect" className="w-full bg-[#161513] scroll-mt-20 py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-2">Let's Connect</h2>
      <p className="text-gray-400 text-center max-w-md mb-8">
        Looking for an intern or have a project in mind? I'm always open to
        discussing web development and collaborations.
      </p>

      <div className="w-full max-w-md bg-[#1e1e1e] border border-gray-700 rounded-lg overflow-hidden font-mono text-sm">
        <div className="bg-[#2a2a2a] px-4 py-2 text-gray-400 border-b border-gray-700">
          contact.jsx
        </div>
        <div className="p-4 leading-relaxed">
          <span className="text-purple-400">const</span> contact = {"{"}
          {contact.map((item) => (
            <div key={item.key} className="pl-4">
              <span className="text-blue-300">{item.key}</span>:{" "}
              {item.href ? (
                
                 <a href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-green-300 hover:underline"
                >
                  "{item.value}"
                </a>
              ) : (
                <span className="text-green-300">"{item.value}"</span>
              )}
              ,
            </div>
          ))}
          {"};"}
        </div>
      </div>
    </div>
  );
}

export default Connect;