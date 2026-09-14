import marcela from "@assets/team/Marce.jpg";
import majo from "@assets/team/Majo.jpg";
import cecilia from "@assets/team/Ceci.jpg";
import type { ImageMetadata } from "astro";

interface TeamInfo {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: ImageMetadata;
}

export const teamInfo: TeamInfo[] = [
  {
    id: "marcela",
    nombre: "Marcela",
    descripcion:
      "psum dolor sit amet consectetur adipisicing elit. Saepe, aperiam reprehenderit eum quis amet et. dolor sit amet consectetur adipisicing elit. Saepe, aperiam reprehenderit eum quis amet et. dolor sit amet consectetur adipisicing elit. Saepe, aperiam reprehenderit eum quis amet et.",
    imagen: marcela,
  },
  {
    id: "magali",
    nombre: "Majo",
    descripcion:
      "psum dolor sit amet consectetur adipisicing elit. Saepe, aperiam reprehenderit eum quis amet et. dolor sit amet consectetur adipisicing elit. Saepe, aperiam reprehenderit eum quis amet et. dolor sit amet consectetur adipisicing elit. Saepe, aperiam reprehenderit eum quis amet et.",
    imagen: majo,
  },
  {
    id: "cecilia",
    nombre: "Cecilia",
    descripcion:
      "psum dolor sit amet consectetur adipisicing elit. Saepe, aperiam reprehenderit eum quis amet et. dolor sit amet consectetur adipisicing elit. Saepe, aperiam reprehenderit eum quis amet et. dolor sit amet consectetur adipisicing elit. Saepe, aperiam reprehenderit eum quis amet et.",
    imagen: cecilia,
  },
];
