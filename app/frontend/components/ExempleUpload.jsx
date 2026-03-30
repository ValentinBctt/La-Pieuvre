// Ajoute ce script dans le <head> de ton index.html Vite (ou dans le layout Rails si tu utilises SSR)
// <script src="https://widget.cloudinary.com/v2.0/global/all.js"></script>

// Exemple d'utilisation du composant UploadImage dans un composant React :
import UploadImage from "../UploadImage";

export default function ExempleUpload() {
  const handleUpload = (url) => {
    // Ici, tu peux envoyer l'URL au backend ou la stocker dans le state
    console.log("Image uploadée :", url);
  };

  return (
    <div>
      <h2>Uploader une image</h2>
      <UploadImage onUpload={handleUpload} />
    </div>
  );
}
