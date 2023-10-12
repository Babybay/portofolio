import Project from "./Project";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Projects = ({openMenu}) => {
  const [projects] = useState([
    {
      id: 1,
      title: "C++ PROGRAM AND SOME ALGORITHMS",
      description:
        "Making some algorithms in C++ program language following the course in early semester",
      link: "https://github.com/Babybay/Algorithm",
      show: true,
    },
    {
      id: 2,
      title: "Python love language",
      description:
        "Some of my python code for Computational Biology Course.",
      link: "https://github.com/Babybay/ComputationalBiology",
      show: true,
    },
    {
      id: 3,
      title: "Figma take my time",
      description:
        "Making application prototype using figma.",
      link: "https://www.figma.com/file/EI6mtB0wewbe7KLC9ca0WK/Project-HCI-Kelompok-9?type=design&t=Hg8dVu8i3BfGxVxF-6",
      show: true,
    },
    {
      id: 4,
      title: "More fogma",
      description:
        "on progress... Prototype for business idea. Making application about action in Indonesia.",
      link: "https://www.figma.com/proto/2OsoERVxEyN5v5qAEmTtDE?node-id=0-1&mode=design&t=Hg8dVu8i3BfGxVxF-6",
      show: true,
    },
    {
      id: 5,
      title: "ABCD: EFGHIJKLMG HIJKLMNOPQ RSTUVWXYZ",
      description: "",
      link: "",
      show: false,
    },
    {
      id: 6,
      title: "ABCD: EFGHIJKLMG HIJKLMNOPQ RSTUVWXYZ",
      description: "",
      link: "",
      show: false,
    },
  ]);

  return (
    <>
      <div className={`portfolio-section opened-menu-${openMenu}`}>
        <div className="card-view">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="github-card github-icons">
        <a
          className="github-icon"
          href="https://github.com/iamyajat"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </>
  );
};

export default Projects;
