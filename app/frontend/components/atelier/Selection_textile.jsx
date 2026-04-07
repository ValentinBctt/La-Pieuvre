
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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


const SelectionTextile = () => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null); // ← ajout

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des données");
        return res.json();
      })
      .then((data) => {
        setItems(data.categories);
        setProducts(data.products);
        setSelectedCategory(data.categories[0]?.id ?? null); // ← sélectionne la 1ère catégorie par défaut
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Chargement...</div>;
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
                  <div style={{ display: "flex", gap: "0.5em", margin: "0.5em 0" }}>
                    {product.colors.map((color, idx) => (
                      <span key={idx} title={color} style={{
                        display: "inline-block",
                        width: "2em",
                        height: "2em",
                        background: color,
                        border: "1px solid #ccc",
                        borderRadius: "50%"
                      }}></span>
                    ))}
                  </div>
                )}
              </div>
              <div className="card-description">
                {product.reference && <p><strong>Réf : </strong> {product.reference}</p>}
                {product.description && <p><strong>Description : </strong> {product.description}</p>}
                <div className="card-info">
                  <p><strong>INFOS</strong></p>
                  {Object.entries(product)
                    .filter(([key, value]) =>
                      value !== undefined && value !== null && value !== "" &&
                      !["id", "name", "image"].includes(key)
                    )
                    .map(([key, value]) => (
                      <p key={key}>
                        <strong>{key} : </strong>
                        {typeof value === "object" ? JSON.stringify(value) : value.toString()}
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