import { FaGithub, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiImessage } from "react-icons/si";


const links = [
  { icon: <FaGithub />, href: "https://github.com/rashash-io"},
  { icon: <FaDiscord />, href: "https://discord.com/users/1303504973774192720/"},
  { icon: <MdEmail />, href: "mailto:info@rashash.io"},
  { icon: <SiImessage />, href: "sms:imessage@rashash.io"},
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {links.map((item, index) => {
        return (
          <a key={index} className={iconStyles} target="_blank" rel="noopener noreferrer" href={item.href}>{item.icon}</a>
        );
      })}  
    </div>
  );
};

export default Socials