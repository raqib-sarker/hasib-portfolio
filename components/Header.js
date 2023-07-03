// next/image
import Image from "next/image";

// next/router
import { useRouter } from "next/router";

// components
import Socials from "../components/Socials";

const Header = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header className="absolute z-30 w-full flex items-center">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row justify-between items-center gap-y-6
py-8"
        >
          <div>
            <a onClick={handleLogoClick} style={{ cursor: "pointer" }}>
              <Image
                src="/logo-up.png"
                alt=""
                width={220}
                height={48}
                priority={true}
              />
            </a>
          </div>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
