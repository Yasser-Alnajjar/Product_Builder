import { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
const links = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Yasser-Alnajjar",
    color: "#333333",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/yasseralnajjar23",
    color: "#1877f2",
  },
  {
    icon: <FaTwitter />,
    path: "https://twitter.com/YasserElnajjar4",
    color: "#1da1f2",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/yasser-alnajjar-643a77225",
    color: "#0a66c2",
  },
  {
    icon: <FaWhatsapp />,
    path: "https://wa.me/01090179792",
    color: "#075e54",
  },
];

export default function Footer() {
  const [isHovering, setIsHovering] = useState("");

  const handleMouseEnter = (color: string) => {
    setIsHovering(color);
  };

  const handleMouseLeave = () => {
    setIsHovering("");
  };

  return (
    <footer className="bg-indigo-700 text-white rounded-md py-4 my-5 px-4">
      <div className="flex justify-center items-center">
        Maked by &nbsp;
        <span className="bg-red-700 rounded-md py-1 px-2">Yasser Alnajjar</span>
      </div>
      <div className="flex justify-center gap-2 items-center mt-3">
        {links.map((item) => (
          <a
            key={item.path}
            className={`rounded-full p-1  grid place-content-center border transition ease-in-out duration-300 focus:outline focus:outline-offset-2	focus:outline-2`}
            style={{
              backgroundColor:
                isHovering === item.color ? item.color : "transparent",
              outlineColor: item.color,
            }}
            onMouseEnter={() => handleMouseEnter(item.color)}
            onMouseLeave={handleMouseLeave}
            href={item.path}
            target="_blank"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
