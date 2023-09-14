import Image from "next/image";
import Link from "next/link";
import React from "react";

const techLinks = [
  {
    id: 1,
    name: "Doctors Portal",
    details:
      "Doctors Portal A full Stack website for seeking online appointment along with respective doctors information Technology : React , Node JS MongoDb , Express JS and essential library and package manager ",
    ss: "https://i.ibb.co/0h7mnpx/Whats-App-Image-2023-01-19-at-9-43-13-PM.jpg",
    techs: ["React", "ExpressJS", "Node JS", "MongoDb"],
    livelink: "https://doctorsportal-11797.web.app/",
  },

  {
    id: 2,
    name: "TechTronix",
    details:
      "TechTronix A full stack website for technology solutions. basically its a computer parts shop website with manufacture functionalities",
    ss: "https://i.ibb.co/Wz3JFQ5/Whats-App-Image-2023-01-19-at-9-44-41-PM.jpg",
    techs: ["React", "ExpressJS", "Node JS", "MongoDb"],
    livelink: "https://techtronix-bffac.web.app/",
  },
  {
    id: 3,
    name: "Bong-Song",
    details:
      "BongSong is a full stack website Musical Merchandise Warehouse which tracks down your musical store stock. You can synchronize your stock with this website Features Track down your stock , Request for more stock, Update Your Stock, Delete unnecessary stock, Information about the artist Live Site -- ",
    ss: "https://i.ibb.co/MDzb6pw/Whats-App-Image-2023-01-19-at-9-39-44-PM.jpg",
    techs: ["React", "ExpressJS", "Node JS", "MongoDb"],
    livelink: "https://bong2song.web.app",
  },
  {
    id: 4,
    name: "Artcellism",
    details:
      "A fan-made Website for one of the best band Artcell where fan can see details, buy albums. This Website Also have Login and register facility made With Google Firebase Authentication System",
    ss: "https://i.ibb.co/LtJgHXm/Whats-App-Image-2023-01-19-at-9-41-31-PM.jpg",
    techs: ["React", "HTML", "CSS"],
    livelink: "https://artcellism-ca64c.web.app/",
  },
  {
    id: 5,
    name: "Cash Cash App",
    details:
      "This application helps to do basic money transaction.implemented:JS theory like DOM Manipulation and basic JS theory Features : Send Money Request Loan ,Closing Account ,Watch Recent transactions, Sorting transaction . TrialData : 1. UserName- js password- 1111 2.UserName- jd password- 2222: ",
    ss: "https://i.ibb.co/10STryZ/Whats-App-Image-2023-01-19-at-9-37-50-PM-1.jpg",
    techs: ["JavaScript", "HTML", "CSS"],
    livelink: "https://monzuralam-git.github.io/cashcash_app/",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-primary text-3xl font-extrabold text-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 justify-center  lg:grid-cols-3 gap-5">
        {/* <h1 className="text-red-500">Tech I use</h1> */}
        {/* id,name,details,ss,techs,livelink */}
        {techLinks.map(({ id, name, details, ss, techs, livelink }) => (
          <div key={id} className="card m-5 bg-base-100 shadow-xl">
            <figure>
              {/* <img src={ss} alt="Shoes" /> */}
              <Image src={ss} alt="project" width={600} height={500}></Image>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{details}</p>
              <div className="card-actions justify-end">
                {techs.map((tech) => (
                  <div key={null} className="badge badge-secondary">
                    {tech}
                  </div>
                ))}
              </div>

              <Link className="btn btn-success mt-10" href={livelink}>
                Live Site
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
