"use client";
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { activeSection, setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView]);
  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-24 mb-28 max-w-[53rem] text-center sm:mb-40"
    >
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
