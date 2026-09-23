import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NavbarBureau from "./NavbarBureau.jsx";

const MAIN_CATEGORY_NAMES = ["Branding", "Photo", "Merchandising", "Graphic Design", "Objects"];

function ProjectCard({ project, slider = false }) {
  const imageClass = slider ? "bureau-home-image-1-swiper" : "bureau-home-image-1";
  const containerClass = slider ? "bureau-home-images-swiper" : "bureau-home-images";

  return (
    <a className={slider ? "bureau-home-item-swiper" : "bureau-home-item"} href={`/bureau/projects/${project.id}`}>
      <div className="bureau-home-item-title">
        <p>{project.name}</p>
        <p>{project.category.name}</p>
      </div>
      <div className={containerClass}>
        {project.main_image && (
          <img
            className={imageClass}
            src={project.main_image}
            alt={project.name}
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="bureau-item-hover">
          <p>{project.name}</p>
          <p>{project.description}</p>
        </div>
      </div>
    </a>
  );
}

export default function BureauHomeData() {
  const [data, setData] = useState({ categories: [], projects: [] });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showSlider, setShowSlider] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    fetch("/api/bureau")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        const firstProjectCategory = json.categories.find((category) => category.kind === "project");
        const firstMainCategory = json.categories.find((category) => category.name === MAIN_CATEGORY_NAMES[0]);
        setSelectedCategory((firstProjectCategory || firstMainCategory || json.categories[0])?.name || "");
      });
  }, []);

  const mainCategories = MAIN_CATEGORY_NAMES
    .map((name) => data.categories.find((category) => category.name === name && category.kind === "main"))
    .filter(Boolean);
  const projectCategories = data.categories.filter((category) => category.kind === "project");
  const items = data.projects.filter((project) => project.category.name === selectedCategory);

  const selectCategory = (category) => {
    setSelectedCategory(category.name);
    setShowMobileMenu(false);
  };

  return (
    <>
      <NavbarBureau />
      <div className="bureau-home">
        <button
          className={`hamburger-menu${showMobileMenu ? " open" : ""}`}
          onClick={() => setShowMobileMenu((visible) => !visible)}
          aria-label={showMobileMenu ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {showMobileMenu ? "✕" : <span className="burger-bars"><span /><span /><span /></span>}
        </button>

        <CategoryNavigation
          mainCategories={mainCategories}
          projectCategories={projectCategories}
          selectedCategory={selectedCategory}
          onSelect={selectCategory}
          mobile={false}
        />

        {showMobileMenu && (
          <div className="mobile-menu">
            <CategoryNavigation
              mainCategories={mainCategories}
              projectCategories={projectCategories}
              selectedCategory={selectedCategory}
              onSelect={selectCategory}
              mobile
            />
          </div>
        )}

        <div className="bureau-home-container">
          {!showSlider ? (
            <div className="bureau-home-items-1">
              {items.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          ) : (
            <div className="bureau-home-items-2">
              <Swiper spaceBetween={24} slidesPerView={1.3} loop className="bureau-swiper">
                {items.map((project) => (
                  <SwiperSlide key={project.id}><ProjectCard project={project} slider /></SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>

        <button
          className="toggle-bureau"
          onClick={() => setShowSlider((visible) => !visible)}
          aria-label={showSlider ? "Afficher la grille" : "Afficher le slider"}
        >
          {showSlider ? "▦" : "▬"}
        </button>
      </div>
    </>
  );
}

export function CategoryNavigation({ mainCategories, projectCategories, selectedCategory, onSelect, mobile }) {
  const link = (category) => (
    <a
      key={category.id}
      href="#"
      className={selectedCategory === category.name ? "selected" : ""}
      onClick={(event) => { event.preventDefault(); onSelect(category); }}
    >
      {category.name}
    </a>
  );

  return (
    <div className={mobile ? "mobile-menu-categories" : "bureau-nav-left"}>
      {mainCategories.map(link)}
      <div className="bureau-nav-left-separator"><span /></div>
      {projectCategories.map(link)}
    </div>
  );
}
