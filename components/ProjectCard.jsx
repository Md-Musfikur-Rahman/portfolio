import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  const { id, name, techs } = project;

  return (
    <div className="border bg-accent px-4 py-2 rounded-xl">
      <Link href={`/work/${id}`}>
        <h2 className="text-center">{name}</h2>
        <h5>
          {techs.map((tech, i) => (
            <p key={i}>{tech.name}</p>
          ))}
        </h5>
      </Link>
    </div>
  );
};

export default ProjectCard;
