import type { ImageMetadata } from "astro";
import disney from "../assets/destinos/disney.jpg";
import universal from "../assets/destinos/universal.jpg";
import cruceros from "../assets/destinos/cruceros.jpg";
import otrosTickets from "../assets/destinos/otros-tickets.jpg";
import otrosDestinos from "../assets/destinos/otros-destinos.jpg";

interface atraccion {
  nombre: string;
  descripcion: string;
  href: string;
  foto: ImageMetadata;
}

export const atracciones: atraccion[] = [
  {
    nombre: "Disney",
    descripcion:
      "Walt Disney World Orlando y Disneyland California: parques, hoteles económicos, moderados y deluxe.",
    href: "#",
    foto: disney,
  },
  {
    nombre: "Universal",
    descripcion:
      "Universal Orlando con Epic Universe, y el nuevo Universal Kids Resort en Texas.",
    href: "#",
    foto: universal,
  },
  {
    nombre: "Cruceros",
    descripcion:
      "Disney Cruise Line, Royal Caribbean y MSC — itinerarios para toda la familia.",
    href: "#",
    foto: cruceros,
  },
  {
    nombre: "Otros tickets",
    descripcion:
      "Halloween, Navidad, After Hours, SeaWorld, Busch Gardens, acuáticos y Legoland.",
    href: "#",
    foto: otrosTickets,
  },
  {
    nombre: "Otros destinos",
    descripcion:
      "Walt Disney World Orlando y Disneyland California: parques, hoteles económicos, moderados y deluxe.",
    href: "#",
    foto: otrosDestinos,
  },
];
