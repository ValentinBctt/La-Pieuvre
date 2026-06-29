import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ─────────────────────────────────────────────────────────────────────────
// Liste des champs affichés dans la section "Infos" de chaque carte produit.
// Pour RETIRER un champ : supprime sa ligne (ou commente-la avec //).
// Pour AJOUTER un champ : ajoute une ligne { key: "nom_du_champ_api", label: "Libellé affiché" }.
// L'ordre de cette liste = l'ordre d'affichage à l'écran.
// ─────────────────────────────────────────────────────────────────────────
const INFO_FIELDS = [
  { key: "matiere", label: "Matière" },
  { key: "quality", label: "Qualité" },
  { key: "sizes_available", label: "Tailles" },

];

function SkeletonSelectionTextile() {
  return (
    <div className="selection-textile">
      <h2>Notre sélection de textile</h2>

      <div className="textile-list-skeleton" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="textile-list-skeleton-item" key={index}>
            <div className="skeleton skeleton-thumb" />
            <div className="skeleton skeleton-label" />
          </div>
        ))}
      </div>

      <div className="textile-swiper-skeleton" aria-hidden="true">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="textile-swiper-skeleton-card" key={index}>
            <div className="skeleton skeleton-card-image" />
            <div className="textile-swiper-skeleton-copy">
              <div className="skeleton skeleton-line skeleton-line-wide" />
              <div className="skeleton skeleton-line" />
              <div className="skeleton skeleton-line skeleton-line-medium" />
              <div className="skeleton skeleton-line" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TextileList({ items, selectedCategory, onSelect }) {
  const [hovered, setHovered] = useState(null);

  if (!items || items.length === 0) return null;

  return (
    <div style={{
      display: "flex", gap: "40px", justifyContent: "center",
      alignItems: "center", flexWrap: "wrap", width: "95%", marginTop: "4rem"
    }}>
      {/* Préchargement invisible des imagesorange */}
      {items.map((item, idx) =>
        item.imageorange ? (
          <img
            key={"preload-" + idx}
            src={item.imageorange}
            alt=""
            style={{ display: "none" }}
            decoding="async"
          />
        ) : null
      )}
      {items.map((item, index) => {
        const isActive = selectedCategory === item.id || hovered === index;
        return (
          <div
            key={item.id || index}
            onClick={() => onSelect(item.id)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{ cursor: "pointer", textAlign: "center" }}
          >
            <img
              src={isActive ? (item.imageorange || item.image || "/images/placeholder.png") : (item.image || "/images/placeholder.png")}
              alt={item.name}
              style={{ height: item.name === "Head-wear" ? "70px" : "120px" }}
            />
            <p style={{ color: isActive ? '#ff5a2f' : '#fff', transition: 'color 0.2s' }}>
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}

// Affiche la valeur d'un champ, qu'elle soit un tableau, un objet, ou une valeur simple.
function formatFieldValue(value) {
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "object") return JSON.stringify(value);
  return value.toString();
}

const SelectionTextile = () => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null); // ← ajout

  const preloadImage = (src) => {
    if (!src) return Promise.resolve();

    return new Promise((resolve) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = resolve;
      image.src = src;
    });
  };

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des données");
        return res.json();
      })
      .then(async (data) => {
        setItems(data.categories);
        setProducts(data.products);
        setSelectedCategory(data.categories[0]?.id ?? null); // ← sélectionne la 1ère catégorie par défaut

        const imageUrls = [
          ...data.categories.flatMap((category) => [category.image, category.imageorange]),
          ...data.products.map((product) => product.image)
        ].filter(Boolean);

        await Promise.all(imageUrls.map((url) => preloadImage(url)));

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <SkeletonSelectionTextile />;
  if (error) return <div>Erreur : {error}</div>;

  const filteredProducts = products.filter(p => p.category_id === selectedCategory); // ← filtre

  return (
    <div className="selection-textile">
      <h2>Notre sélection de textile</h2>

      <TextileList
        items={items}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory} // ← passe le setter
      />

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1.4}
        centeredSlides={false}
        spaceBetween={100}
        loop={filteredProducts.length > 1} // ← évite le bug loop avec 1 seul élément
        navigation
        pagination={{ clickable: true }}
        className="textile-swiper"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 1.4, spaceBetween: 100 }
        }}
      >
        {filteredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="full-card">
              <div className="card">
                <img src={product.image || "/images/placeholder.png"} alt={product.name} />
                <p><strong>{product.name}</strong></p>
                {Array.isArray(product.colors) && product.colors.length > 0 && (
                  <div style={{ display: "flex", gap: "0.5em", margin: "0.5em 1rem"

                  }}>
                    {product.colors.map((color, idx) => (
                      <span key={idx} title={color} style={{
                        display: "inline-block",
                        width: "1.5em",
                        height: "1.5em",
                        background: color,
                        border: "1px solid #ccc",
                        borderRadius: "50%",

                      }}></span>
                    ))}
                  </div>
                )}
              </div>
              <div className="card-description">
                {product.reference && <p className="reference-line"><strong>Réf : </strong> <span>{product.reference}</span></p>}
                {product.description && <p className="description-line"><strong>Description : </strong> <span>{product.description}</span></p>}
                <div className="card-info">
                  <p className="info-line"><strong>Infos</strong></p>
                  {INFO_FIELDS
                    .filter(({ key }) =>
                      product[key] !== undefined && product[key] !== null && product[key] !== ""
                    )
                    .map(({ key, label }) => (
                      <p key={key}>
                        <strong>{label} : </strong>
                        <span>{formatFieldValue(product[key])}</span>
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SelectionTextile;
