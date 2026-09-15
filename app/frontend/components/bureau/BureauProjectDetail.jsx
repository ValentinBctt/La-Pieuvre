import React, { useEffect, useState } from "react";
import NavbarBureau from "./NavbarBureau.jsx";
import { CategoryNavigation } from "./BureauHomeData.jsx";

const MAIN_CATEGORY_NAMES = ["Branding", "Photo", "Merchandising", "Graphic Design", "Objects"];

export default function BureauProjectDetail() {
  const [project, setProject] = useState(null);
  const [categories, setCategories] = useState([]);
  const projectId = window.location.pathname.split("/").filter(Boolean).pop();

  useEffect(() => {
    Promise.all([
      fetch(`/api/bureau/projects/${projectId}`).then((response) => response.json()),
      fetch("/api/bureau").then((response) => response.json())
    ]).then(([projectData, bureauData]) => {
      setProject(projectData);
      setCategories(bureauData.categories);
    });
  }, [projectId]);

  if (!project) return <><NavbarBureau /><main className="bureau-project-detail">Chargement...</main></>;

  const mainCategories = MAIN_CATEGORY_NAMES
    .map((name) => categories.find((category) => category.name === name && category.kind === "main"))
    .filter(Boolean);
  const projectCategories = categories.filter((category) => category.kind === "project");
  const selectCategory = () => { window.location.href = "/bureau"; };

  return (
    <>
      <NavbarBureau />
      <div className="bureau-project-page">
        <CategoryNavigation
          mainCategories={mainCategories}
          projectCategories={projectCategories}
          selectedCategory={project.category.name}
          onSelect={selectCategory}
          mobile={false}
        />

        <main className="bureau-project-detail">

        <div className="bureau-project-copy">
          <ProjectField label="Mission_" value={project.mission} />
          <ProjectField label="Contexte_" value={project.contexte} />
          <ProjectField label="Client_" value={project.client} />
        </div>

        <div className="bureau-project-heading">
          <h1>{project.name}</h1>
          <ProjectField value={project.description} />
        </div>

        <div className="bureau-project-gallery">
          {project.photos.map((photo) => <img key={photo} src={photo} alt={project.name} />)}
        </div>
        </main>
      </div>
    </>
  );
}

function ProjectField({ label, value }) {
  return value ? (
    <p className="bureau-project-field">
      <span className="bureau-project-field-label">{label}</span><span className="bureau-project-field-value">{value}</span>
    </p>
  ) : null;
}
