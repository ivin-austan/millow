export const REACT_SERVER_URL =
  window.location.origin === "http://localhost:5173"
    ? import.meta.env.VITE_REACT_SERVER_URL
    : "https://millow-yobb.onrender.com";

export const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
