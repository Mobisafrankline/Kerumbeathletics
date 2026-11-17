import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kerumbe Athletics Sports Club",
    short_name: "Kerumbe Athletics",
    description:
      "Kerumbe Athletics Sports Club empowers gifted young athletes from Kenya's rural schools.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0D0D",
    theme_color: "#E8001C",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

