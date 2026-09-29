import React, { useEffect, useState } from "react";
import NavbarBureau from "./NavbarBureau.jsx";
import { CategoryNavigation } from "./BureauHomeData.jsx";

const MAIN_CATEGORY_NAMES = ["Branding", "Photo", "Merchandising", "Graphic Design", "Objects"];

export default function BureauProjectDetail() {
  const projectId = window.location.pathname.split("/").filter(Boolean).pop();
  
  const [project, setProject] = useState(() => {
    try {
      const cached = localStorage.getItem(`bureauProject-${projectId}`);
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  });
  const [categories, setCategories] = useState(() => {
    try {
      const cached = localStorage.getItem('bureauProjectsCache');
      return cached ? JSON.parse(cached).categories : [];
    } catch {
      return [];
    }
  });
  const [loading, setLoading] = useState(() => {
    try {
      const cachedProject = localStorage.getItem(`bureauProject-${projectId}`);
      return !cachedProject;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    let isMounted = true;

    async function loadProjectData() {
      try {
        // Essayer de charger depuis localStorage en priorité
        let projectData = null;
        let bureauData = null;

        try {
          const cachedProject = localStorage.getItem(`bureauProject-${projectId}`);
          const cachedBureau = localStorage.getItem('bureauProjectsCache');
          
          if (cachedProject && cachedBureau) {
            projectData = JSON.parse(cachedProject);
            bureauData = JSON.parse(cachedBureau);
            
            if (isMounted) {
              setProject(projectData);
              setCategories(bureauData.categories);
              setLoading(false);
            }
          }
        } catch (error) {
          console.error('Erreur du cache projet:', error);
        }

        // Charger les données fraîches en arrière-plan
        const [newProjectData, newBureauData] = await Promise.all([
          fetch(`/api/bureau/projects/${projectId}`).then((response) => response.json()),
          fetch("/api/bureau").then((response) => response.json())
        ]);

        if (!isMounted) return;

        setProject(newProjectData);
        setCategories(newBureauData.categories);
        setLoading(false);

        // Mettre en cache pour les visites suivantes
        localStorage.setItem(`bureauProject-${projectId}`, JSON.stringify(newProjectData));
        localStorage.setItem('bureauProjectsCache', JSON.stringify(newBureauData));
      } catch (error) {
        console.error('Erreur lors du chargement du projet:', error);
        setLoading(false);
      }
    }

    loadProjectData();

    return () => {
      isMounted = false;
    };
  }, [projectId]);

  if (!project) return (
    <>
      <NavbarBureau />
      <main className="bureau-project-detail">
        <div className="bureau-project-detail-skeleton">
          <div className="bureau-project-detail-skeleton-header skeleton" />
          <div className="bureau-project-detail-skeleton-line skeleton" />
          <div className="bureau-project-detail-skeleton-line skeleton" />
          <div className="bureau-project-detail-skeleton-line skeleton" />
        </div>
      </main>
    </>
  );

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
          {project.photos.map((photo) => (
            <img
              key={photo}
              src={photo}
              alt={project.name}
              loading="lazy"
              decoding="async"
            />
          ))}
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
