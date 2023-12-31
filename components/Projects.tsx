import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

const Projects = () => {
  return (
    <section>
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
