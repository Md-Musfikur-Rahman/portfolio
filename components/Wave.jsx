import Image from "next/image";
import Waves from "@/public/assets/waves.svg";
const Wave = () => {
  return (
    <div>
      <Image
        src={Waves}
        alt="wave"
        style={{ width: "100%", position: "absolute" }}
      />
    </div>
  );
};

export default Wave;
