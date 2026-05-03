import CellCare from "../assets/CellCare.jpg";

function projects(){
    const projects = [
    {
      image: CellCare,
      title: "ML Recommendation System",
      description: "Built a recommendation engine using NLP and user input to return personalized results through a clean API flow.",
      tech: "Python, FastAPI",
      github:'#',
      live:'#'
    },
    {
      image: CellCare,
      title: "Real-time Chat App",
      description: "Implemented a messaging experience with backend event handling and responsive real-time updates.",
      tech: "React, Node.js",
      github:'#',
      live:'#'
    },
    {
      image: CellCare,
      title: "Portfolio Website",
      description: "Designed and developed a modern personal portfolio with performance-focused UI.",
      tech: "React, Tailwind",
      github:'#',
      live:'#'
    },
    ];
 return projects;
}

export default projects;
