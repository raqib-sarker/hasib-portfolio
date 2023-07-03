//next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex justify-end xl:max-w-none">
      <Image
        src={"/avatar6.png"}
        width={537}
        height={678}
        alt=""
        className="translate-z-0  w-full h-full"
      />
    </div>
  );
};

export default Avatar;
