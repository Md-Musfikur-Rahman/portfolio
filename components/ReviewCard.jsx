import Image from "next/image";
import React from "react";

const ReviewCard = ({ review }) => {
  const { userName, userImage, userProfession, userWorkPlace, aboutUS } =
    review;
  return (
    <div className="flex flex-col justify-center items-center bg-secondary px-4 py-2 mt-10 rounded-lg shadow-md shadow-secondary">
      <Image
        src={userImage}
        alt={userName}
        width={150}
        height={150}
        className="rounded-full -mt-20 mb-4"
      />

      <h2 className="text-center">{userName}</h2>
      <h5 className="text-center">
        {userProfession} | {userWorkPlace}
      </h5>
      <p className="text-justify">{aboutUS}</p>
    </div>
  );
};

export default ReviewCard;
