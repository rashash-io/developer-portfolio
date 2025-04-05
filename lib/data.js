import { FaDiscord, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiImessage } from "react-icons/si";

// Hompage Links
export const homepageLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/rashash-io",
  },
  {
    icon: <FaDiscord />,
    href: "https://discord.com/users/1303504973774192720/",
  },
  {
    icon: <MdEmail />,
    href: "mailto:info@rashash.io",
  },
  {
    icon: <SiImessage />,
    href: "sms:imessage@rashash.io",
  },
];


// Days & Months
export const daysAndMonths={
  days : [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], 
  months : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

// Contact Links & Info
export const contactLinksAndInfo = [
  {
    icon: <MdEmail />,
    title: "E-mail",
    description: "info@rashash.io",
    href: "mailto:info@rashash.io",
  },
  {
    icon: <FaDiscord />,
    title: "Discord",
    description: "rashash.io",
    href: "https://discord.com/users/1303504973774192720/",
  },
  {
    icon: <SiImessage />,
    title: "iMessage",
    description: "iMessage@rashash.io",
    href: "sms:imessage@rashash.io",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    description: "rashash-io",
    href: "https://github.com/rashash-io",
  },
];

// Homepage Stats
export const homepageStats = [
  {
    num: 7,
    text: "Years of experience",
  },
  {
    num: 3,
    text: "Projects completed",
  },
  {
    num: 4,
    text: "Technologies mastered",
  },
  {
    num: 5,
    text: "Code commits",
  },
];