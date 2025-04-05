import { homepageLinks } from "../lib";

export const HomeSocialLinks = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {homepageLinks.map((item, index) => {
        return (
          <a
            key={index}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
            href={item.href}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default HomeSocialLinks;
