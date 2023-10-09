import React from "react";
import { Projects } from "@/public/assets/info";

const ProjectDetails = ({ params }) => {
  const id = params.id;
  const project = Projects.find((pro) => pro.id === id);

  if (!project) {
    return <h1>Nothing to Show</h1>;
  }

  return (
    <>
      <div className="gred w-full">
        <h1 className="gredText">{project.name}</h1>
      </div>
      <div className="bg-gradient-to-b from-secondary to-BG w-full">
        <div className="w-4/5 mx-auto">
          <div className="flex justify-between">
            <div className="flex-1"></div>
            <div className="flex-1 text-justify">
              <h4>{project.introHead}</h4>
              <p>{project.intro}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto">
        <div className="mt-12">
          <h3>{project.descHead}</h3>
          <p className=" text-justify">{project.desc}</p>

          <div className="flex justify-between mt-12">
            <div className="flex-1">
              <h3 className="capitalize text-center text-primary">
                key Features
              </h3>

              <div className="px-8 py-4">
                {project.keyFeatures.map((feature) => (
                  <p key={feature.heading}>
                    {feature.icon}{" "}
                    <span className="font-bold">{feature.heading}:</span>{" "}
                    {feature.feature}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="capitalize text-center text-primary">
                Challenges faced
              </h3>

              <div className="px-8 py-4">
                {project.challenges.map((challenge) => (
                  <p key={challenge.heading}>
                    {challenge.icon}{" "}
                    <span className="font-bold">{challenge.heading}:</span>{" "}
                    {challenge.feature}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="my-12">
          <h3>Getting Started</h3>

          <div className="px-8 py-4">
            {project.gettingStarted.map((step, index) => (
              <p key={index}>{step}</p>
            ))}
          </div>
        </div>

        <div className="my-12">
          <h3>Technology Used</h3>

          <div className="px-8 py-4 flex gap-5">
            {project.techs.map((tech) => (
              <div
                key={tech.id}
                className=" bg-primary rounded-full text-background py-2 px-4"
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
