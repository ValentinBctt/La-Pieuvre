import { useState } from "react";

export default function UploadImage({ onUpload }) {
  const [imageUrl, setImageUrl] = useState(null);

  const openWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "your_cloud_name", // À remplacer par ton cloud name Cloudinary
        uploadPreset: "your_unsigned_preset", // À remplacer par ton preset Cloudinary
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setImageUrl(result.info.secure_url);
          if (onUpload) onUpload(result.info.secure_url);
        }
      }
    );
    widget.open();
  };

  return (
    <div>
      <button type="button" onClick={openWidget}>Uploader une image</button>
      {imageUrl && <img src={imageUrl} alt="upload preview" style={{maxWidth: 200}} />}
    </div>
  );
}
