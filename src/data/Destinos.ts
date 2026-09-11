import type { ImageMetadata } from "astro";
import disney from "../assets/destinos/disney.jpg";
import universal from "../assets/destinos/universal.jpg";
import cruceros from "../assets/destinos/cruceros.jpg";
import otrosTickets from "../assets/destinos/otros-tickets.jpg";
import otrosDestinos from "../assets/destinos/otros-destinos.jpg";

interface destino {
  id: string;
  nombre: string;
  descripcion: string;
  foto: ImageMetadata;
}

export const destinos: destino[] = [
  {
    id: "disney",
    nombre: "Disney",
    descripcion:
      "Walt Disney World Orlando y Disneyland California: parques, hoteles económicos, moderados y deluxe.",
    foto: disney,
  },
  {
    id: "universal",
    nombre: "Universal",
    descripcion:
      "Universal Orlando con Epic Universe, y el nuevo Universal Kids Resort en Texas.",
    foto: universal,
  },
  {
    id: "cruceros",
    nombre: "Cruceros",
    descripcion:
      "Disney Cruise Line, Royal Caribbean y MSC — itinerarios para toda la familia.",
    foto: cruceros,
  },
  {
    id: "otros-tickets",
    nombre: "Otros tickets",
    descripcion:
      "Halloween, Navidad, After Hours, SeaWorld, Busch Gardens, acuáticos y Legoland.",
    foto: otrosTickets,
  },
  {
    id: "otros-destinos",
    nombre: "Otros destinos",
    descripcion:
      "Walt Disney World Orlando y Disneyland California: parques, hoteles económicos, moderados y deluxe.",
    foto: otrosDestinos,
  },
];
