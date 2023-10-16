import { University } from "@/public/assets/info";

const Education = () => {
  return (
    <div className="w-4/5 mx-auto relative my-10">
      <h1 className="my-5">Education</h1>
      <p className="text-3xl">{University.name}</p>
      <div className="flex justify-between">
        <p>
          {University.degree} | GPA:{" "}
          <span className="font-black">{University.cgpa}</span> / 4.0{" "}
        </p>
        <p className="font-black">JUNE 2020 - JULY 2024</p>
      </div>
      <div className="mt-5">
        <ul>
          {University.points.map((point, i) => (
            <li key={i}> &#8226; {point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
