import {
  RiDownloadLine,
  RiYoutubeLine,
  RiLinkedinLine,
  RiFacebookLine,
  RiGithubLine,
  RiWhatsappLine,
} from "react-icons/ri";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl lg:mr-40">
      <Link
        href="https://drive.google.com/file/d/1sDVhiLdmSOeguh4Z-bvre9s7efd625_4/view?usp=drive_link"
        target="_blank"
        passHref
      >
        <RiDownloadLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href="https://linkedin.com/in/techhasib" passHref>
        <RiLinkedinLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href="https://github.com/techhasib" passHref>
        <RiGithubLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href="https://www.facebook.com/techhasib" passHref>
        <RiFacebookLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href="https://www.youtube.com/techhasib" passHref>
        <RiYoutubeLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href="http://wa.me/+8801688494480" passHref>
        <RiWhatsappLine className="hover:text-accent transition-all duration-300" />
      </Link>
    </div>
  );
};

export default Socials;
