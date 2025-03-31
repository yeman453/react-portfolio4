import React from "react";


const projects =[
    {
        id: 1,
        name: "Bussiness Website",
        image:  "https://i.pinimg.com/736x/8a/29/80/8a2980caaec80b15a203ce66266a61e9.jpg",
        github: "https://yeman453.github.io/weather.js/"
    },
    {
        id: 2,
        name: "Bakery Website",
        image:  "https://i.pinimg.com/736x/14/b2/ab/14b2ab10fa0f3e9322aade75a8f5d658.jpg",
        github: ""
    },
    {
        id: 3,
        name: "Hotel Website",
        image:  "https://i.pinimg.com/736x/53/a9/37/53a937cdf862da224a40f7c2cab72f75.jpg",
        github: ""
    },
    {
      id: 4,
      name: "Travel Website",
      image:  "https://i.pinimg.com/474x/73/cd/6c/73cd6ceb6ee80cce80b9804ddac4ee11.jpg",
      github: "https://yeman453.github.io/travel.js/"
  },
  {
    id: 5,
    name: "Movie Webside",
    image:  "https://i.pinimg.com/736x/72/20/6a/72206ac68abdd292c358510b9609b382.jpg",
    github: "https://yeman453.github.io/jsprojects/"
},
{
  id: 6,
  name: "Nature Website",
  image:  "https://i.pinimg.com/736x/77/b4/21/77b421686d6088e6527cf57d68c69e96.jpg",
  github: ""
}
]
function Projects() {

  return (
    <div>
      <div className="bg-black text-white py-5">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              projects.map(project=> (
                <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg  transform transition-transform duration-300 hover:scale-105"> 
                  <img src={project.image} alt="img" className="rounded-lg mb-4 w-full h-48 object-cover" />
                  <p className="text-gray-400 mb-4">Projects - {project.id}</p>
                  <h3 className="text-2xl font-bold mb-2 ">{project.name}</h3>
                 <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text--white px-4 py-2 rounded-full" target="-blank" rel="noopener noreferrer">See More</a>
                  </div>
              )) 
            }
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
