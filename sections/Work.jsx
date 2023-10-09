import { ProjectCard } from "@/components";
import { Projects } from "@/public/assets/info";
import Link from "next/link";

const Work = () => {
  return (
    <div className="w-4/5 mx-auto bg-secondary">
      <h1 className="">Work</h1>

      <div className="grid grid-cols-3 gap-4 pb-10">
        {Projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-right">
        <Link href="/work">
          <button className=" bg-BG rounded-full px-4 py-2">
            Other Projects &#10148;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Work;
