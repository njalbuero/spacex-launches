import React, { useState } from "react";

function Image({ imageUrl, alt }) {
  const [isImageAvailable, setIsImageAvailable] = useState(true);

  const handleImageError = () => {
    setIsImageAvailable(false);
  };

  return (
    <>
      {imageUrl ? (
        isImageAvailable ? (
          <img
            loading="lazy"
            src={imageUrl}
            alt={alt}
            onError={handleImageError}
          />
        ) : (
          <p className="no-content">Image Unavailable</p>
        )
      ) : (
        <p className="no-content">No Image Yet</p>
      )}
    </>
  );
}

export default Image;
