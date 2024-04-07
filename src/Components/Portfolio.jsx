/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/james-harrison-vpOeXr5wmR4-unsplash.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Nasa Space Apps Challenge 2022",
    description:
      "Pitch: Project StarBlue. StarBlue is a didactic learning software.",
    url: "https://www.youtube.com/watch?v=bD3fhYZ5h5A",
  },
  {
    title: "Landing Page Design of Velada del Año IV",
    description:
      "Copy of the design of La Velada del Año IV website using Astro and Tailwind technologies.",
    url: "https://github.com/AmilkarDaniel/la-velada-web-oficial",
  },
  {
    title: "Naabol Website Design",
    description:
      "Design of naabol's website using the figma tool.",
    url: "https://www.figma.com/file/X76f6OuShTgzRJ5CtDqq5I/Design-Naabol?type=design&node-id=0%3A1&mode=design&t=Zgzn8UuZNHz0X90q-1",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
