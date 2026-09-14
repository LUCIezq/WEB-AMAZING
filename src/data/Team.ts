import marcela from "../assets/team/Marce.jpg";
import majo from "../assets/team/Majo.jpg";
import cecilia from "../assets/team/Ceci.jpg";
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
    nombre: "Marce",
    descripcion:
      "Los grandes viajes comienzan con un sueño. En Amazing Travel, nos encanta transformar ese sueño en un viaje pensado hasta el último detalle, combinando experiencia, planificación y mucha magia.Para mí, viajar no es solo conocer un destino: es hacer realidad un sueño y crear recuerdos que te acompañen toda la vida.",
    imagen: marcela,
  },
  {
    id: "magali",
    nombre: "Majo",
    descripcion:
      "Mi pasión por viajar y mi experiencia me enseñaron que cada viaje es único. En Amazing Travel, transformamos sueños en experiencias, acompañando cada detalle para que solo tengas que ocuparte de disfrutar.",
    imagen: majo,
  },
  {
    id: "cecilia",
    nombre: "Ceci",
    descripcion:
      "Soy de las que creen que un viaje no se compra: se sueña, se diseña y se vive. Con más de 8 años de experiencia en turismo, mi especialidad es convertir cada viaje en una experiencia personalizada, cuidada y, sobre todo, inolvidable.",
    imagen: cecilia,
  },
];
