import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((proj, index) => (
          <>
            <Project {...proj} />
          </>
        ))}
      </div>
    </section>
  );
};

export default Projects;
