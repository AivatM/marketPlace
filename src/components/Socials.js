import React from "react";
import "../assets/styles/Socials.scss";

function Socials() {
  let socialsData = [
    { id: 1, links: "https://vk.com/feed", name: "vk" },
    { id: 2, links: "https://www.facebook.com/", name: "facebook" },
    { id: 3, links: "https://github.com", name: "github" },
  ];
  return (
    <div className="socials">
      {socialsData.map((item) => (
        <a
          target="_blank"
          key={item.id}
          href={item.links}
          className={`socials__${item.name} socials__item`}
        ></a>
      ))}
    </div>
  );
}

export default Socials;
