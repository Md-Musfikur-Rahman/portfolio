import React from "react";
import { Projects } from "@/public/assets/info";

const WorkPage = () => {
  return (
    <div>
      {Projects.map((project, index) => (
        <div
          key={project.id}
          className={`flex mb-8 justify-between items-center ${
            index % 2 === 0
              ? "flex-row text-right"
              : "flex-row-reverse text-left"
          }`}
        >
          <h3 className="flex-1 text-center px-6 py-3">{project.introHead}</h3>
          <div className="flex-1 text-justify px-6 py-3">
            <p>{project.intro}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkPage;
