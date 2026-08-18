import CellCare from "../assets/CellCare.jpg";

function projects(){
    const projects = [
    {
      image: CellCare,
      title: "Portfolio Website",
      description: "Designed and developed a modern personal portfolio with performance-focused UI.",
      tech: "React, Tailwind",
      github:'https://github.com/KaleSujit9011/Kale_Sujit_Portfolio',
      live:'#'
    },
    {
      image: CellCare,
      title: "ML Recommendation System",
      description: "Built a recommendation engine using NLP and user input to return personalized results through a clean API flow.",
      tech: "Python, FastAPI,React,Tailwind",
      github:"https://github.com/KaleSujit9011/CellCare",
      live:'https://cellcare-olive.vercel.app'
    },
    {
      image: CellCare,
      title: "AI Meeting Platform",
      description: "Implemented a messaging experience with backend event handling and responsive real-time updates.",
      tech: "React, Node.js",
      github:'https://github.com/KaleSujit9011/ai-meeting-platform',
      live:'https://ai-meeting-platform.vercel.app'
    },
    {
      image: CellCare,
      title: "Resume Radar",
      description: "An AI-powered career intelligence platform that analyzes resumes, matches them against target roles and job descriptions, scores ATS readiness, recommends resume improvements, generates personalized interview questions, and builds actionable career roadmaps.",
      tech: "Flask,AI,MySQL,HTML,CSS,JavaScript,OpenAI",
      github:'https://github.com/KaleSujit9011/ResumesRadar',
      live:'https://resumesradar.vercel.app/'
    },
    ];
 return projects;
}

export default projects;
