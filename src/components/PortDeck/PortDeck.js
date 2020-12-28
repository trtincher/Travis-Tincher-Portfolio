import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PortDeck.scss";
import Card from "../Card/Card";

//googlesheet pucblic link https://docs.google.com/spreadsheets/d/18a96rZgz21FoZbbylPt5MaxESkS1ksvzUuyqnab3VKk/edit?usp=sharing
//sheetAsJSON is how we will pull the data as JSON (javascript object notation)
//googlesheet JSON template  = https://spreadsheets.google.com/feeds/cells/YOURGOOGLESHEETCODE/SHEETPAGENUMBER/public/full?alt=json

const sheetAsJSON =
  "https://spreadsheets.google.com/feeds/list/18a96rZgz21FoZbbylPt5MaxESkS1ksvzUuyqnab3VKk/od6/public/values?alt=json";

const getProjects = async () => {
  try {
    let res = await axios.get(sheetAsJSON);

    console.log("res in PortLinks", res);
    const projects = res.data.feed.entry.map((project) => {
      return {
        title: project.gsx$title.$t,
        description: project.gsx$description.$t,
        image: project.gsx$image.$t,
        url: project.gsx$url.$t,
        github: project.gsx$github.$t,
        software: project.gsx$software.$t,
      };
    });
    console.log("projects in get projects", projects);
    return projects;
  } catch (err) {
    console.log(err);
  }
};

const makeProjects = (projects) => {
  const projectCards = projects.map((project) => {
    console.log("project in makeProjects", project);
    return (
      <Card
        key={project.title}
        title={project.title}
        description={project.description}
        image={project.image}
        url={project.url}
        github={project.github}
        software={project.software}
      />
    );
  });

  return projectCards;
};

function PortDeck() {
  const [projectList, setProjectList] = useState("...loading");

  useEffect(async () => {
    let projects = await getProjects();
    let list = makeProjects(projects);
    setProjectList(list);
  }, []);

  console.log("projectList", projectList);

  return <div className="PortDeck">{projectList}</div>;
}

export default PortDeck;
