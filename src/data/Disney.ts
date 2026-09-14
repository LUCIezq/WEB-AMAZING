import type { ImageMetadata } from "astro";
import disneyHero from "../assets/destinos/disney-background.jpg";
import disneyDestination from "../assets/destinos/disney.jpg";
import parks from "../assets/parks.jpg";
import epcot from "../assets/destinos/parks/epcot.jpg";
import magicKingdom from "../assets/destinos/parks/magic-kingdom.jpg";
import hollywoodStudios from "../assets/destinos/parks/hollywood-studios.jpg";
import animalKingdom from "../assets/destinos/parks/animal-kingdom.jpg";
import blizzardBeach from "../assets/destinos/parks/blizzard-beach.jpg";
import typhoonBeach from "../assets/destinos/parks/typhoon-beach.jpg";
import demoHotel from "../assets/destinos/hotels/demo-hotel.jpg";

export type HotelCategory = "económico" | "moderado" | "deluxe";

export interface Hotel {
  id: string;
  name: string;
  category: HotelCategory;
  tier?: string;
  photo: ImageMetadata;
  description: string;
  capacity: string;
  transport?: string;
  earlyParkAdmission: string;
  perks?: string[];
}

export interface Park {
  id: string;
  name: string;
  type: Parktype;
  photo: ImageMetadata;
}

export interface SubDestination {
  id: string;
  label: string;
  parksCount: string;
  parks: Park[];
  hotels: Hotel[];
}

export interface CtaButton {
  label: string;
  type: "hotel-tickets" | "tickets";
}

export interface MainDestination {
  id: string;
  name: string;
  photo: ImageMetadata;
  subDestinations: SubDestination[];
  ctaButtons?: CtaButton[];
}

export type Parktype = "Temático" | "Acuático";

const disneyOrlando: SubDestination = {
  id: "orlando",
  label: "Walt Disney World",
  parksCount: "4 + 2 de Agua",
  parks: [
    { id: "epcot", name: "Disney's Epcot", type: "Temático", photo: epcot },
    {
      id: "magic-kingdom",
      name: "Disney's Magic Kingdom",
      type: "Temático",
      photo: magicKingdom,
    },
    {
      id: "hollywood-studios",
      name: "Disney's Hollywood Studios",
      type: "Temático",
      photo: hollywoodStudios,
    },
    {
      id: "animal-kingdom",
      name: "Disney's Animal Kingdom",
      type: "Temático",
      photo: animalKingdom,
    },
    {
      id: "blizzard-beach",
      name: "Disney's Blizzard Beach",
      type: "Acuático",
      photo: blizzardBeach,
    },
    {
      id: "typhoon-lagoon",
      name: "Disney's Typhoon Lagoon",
      type: "Acuático",
      photo: typhoonBeach,
    },
  ],
  hotels: [
    {
      id: "all-star-movies",
      name: "Disney's All Star Movies Resort",
      category: "económico",
      photo: demoHotel,
      description:
        "Te sumerge en la magia del cine con escenarios inspirados en clásicos de Disney y Pixar. Sus habitaciones son ideales para quienes buscan una opción económica sin dejar de disfrutar de una experiencia inmersiva. Además, ofrece piscinas temáticas, patio de comidas, transporte gratuito a los parques y todos los beneficios de hospedarse dentro de Walt Disney World Resort.",
      capacity: "Habitaciones estándar: hasta 4 personas.",
      transport: "Bus a los parques.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "all-star-sports",
      name: "Disney's All-Star Sports Resort",
      category: "económico",
      photo: demoHotel,
      description:
        "Es el hotel ideal para los fanáticos del deporte y para quienes buscan una estadía divertida a un excelente precio. Inspirado en disciplinas como el béisbol, el fútbol americano, el tenis y el surf, ofrece piscinas temáticas, patio de comidas, transporte gratuito a los parques y todos los beneficios de hospedarse dentro de Walt Disney World Resort.",
      capacity: "Habitaciones estándar: hasta 4 personas.",
      transport: "Bus a los parques.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "pop-century",
      name: "Disney's Pop Century Resort",
      category: "económico",
      photo: demoHotel,
      description:
        "Celebra las décadas más icónicas de la cultura pop con una temática colorida y llena de nostalgia, ofreciendo comodidad y un estilo moderno. Cuenta con piscinas temáticas, patio de comidas y la ventaja de tener acceso directo al Disney Skyliner, que conecta fácilmente con EPCOT y Disney's Hollywood Studios, junto con todos los beneficios de hospedarse dentro de Walt Disney World Resort.",
      capacity: "Habitaciones estándar: hasta 4 personas.",
      transport: "Bus y Skyliner (teleférico) a los parques.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "art-of-animation",
      name: "Disney's Art of Animation Resort",
      category: "económico",
      photo: demoHotel,
      description:
        "Te invita a vivir la magia de algunas de las películas más queridas de Disney y Pixar, como Cars, Buscando a Nemo, El Rey León y La Sirenita. Cuenta con increíbles piscinas temáticas, patio de comidas, acceso al Disney Skyliner y todos los beneficios de hospedarse dentro de Walt Disney World Resort.",
      capacity:
        "Habitaciones estándar: hasta 4 personas. Family Suites: hasta 6 huéspedes.",
      transport: "Bus y Skyliner (teleférico) a los parques.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },

    {
      id: "caribbean-beach",
      name: "Disney's Caribbean Beach Resort",
      category: "moderado",
      photo: demoHotel,
      description:
        "Inspirado en las islas del Caribe, este resort combina playas de arena blanca, amplias piscinas y un ambiente tropical relajado.",
      capacity: "Habitaciones estándar: hasta 5 personas.",
      transport:
        "Skyliner a EPCOT y Hollywood Studios. Buses a Magic Kingdom, Animal Kingdom y Disney Springs.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "coronado-springs",
      name: "Disney's Coronado Springs Resort",
      category: "moderado",
      photo: demoHotel,
      description:
        "Un elegante resort con inspiración española, mexicana y del suroeste americano, ideal para quienes buscan un ambiente más sofisticado.",
      capacity:
        "Habitaciones estándar: hasta 4 personas. Suite de 1 dormitorio: hasta 6 personas. Suite Ejecutiva: hasta 8 personas.",
      transport: "Buses a todos los parques temáticos y Disney Springs.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "port-orleans-riverside",
      name: "Disney's Port Orleans Resort – Riverside",
      category: "moderado",
      photo: demoHotel,
      description:
        "Rodeado de naturaleza y con el encanto del sur de Estados Unidos, es una excelente opción para familias.",
      capacity: "Habitaciones estándar: hasta 5 personas.",
      transport: "Buses a los parques. Barco hacia Disney Springs.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "port-orleans-french-quarter",
      name: "Disney's Port Orleans Resort – French Quarter",
      category: "moderado",
      photo: demoHotel,
      description:
        "El hotel Moderate más pequeño de Disney, inspirado en el histórico barrio francés de Nueva Orleans. Brinda un ambiente tranquilo y pintoresco.",
      capacity: "Habitaciones estándar: hasta 4 personas.",
      transport: "Buses a los parques. Barco a Disney Springs.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },

    {
      id: "animal-kingdom-lodge",
      name: "Disney's Animal Kingdom Lodge",
      category: "deluxe",
      photo: demoHotel,
      description:
        "Inspirado en las reservas africanas, este exclusivo resort ofrece vistas a la sabana con animales como jirafas y cebras.",
      capacity:
        "Habitaciones estándar: hasta 4 personas. Villa de 2 dormitorios: hasta 9 adultos. Grand Villa de 3 dormitorios: hasta 12 adultos (incluyen cocina completa, comedor, sala de estar, lavadora y secadora).",
      transport:
        "Buses gratuitos hacia todos los parques temáticos y Disney Springs.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "beach-club",
      name: "Disney's Beach Club Resort",
      category: "deluxe",
      photo: demoHotel,
      description:
        "Ubicado a pasos de EPCOT y a un agradable paseo de Hollywood Studios, destaca por su espectacular piscina Stormalong Bay.",
      capacity:
        "Habitaciones estándar: hasta 5 personas. Villa de 2 dormitorios: hasta 8 personas.",
      transport:
        "A pie, barco y Skyliner (desde EPCOT) hacia Hollywood Studios. Buses a Magic Kingdom, Animal Kingdom y Disney Springs.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "boardwalk-inn",
      name: "Disney's BoardWalk Inn",
      category: "deluxe",
      photo: demoHotel,
      description:
        "Con el encanto de los paseos costeros de principios del siglo XX, este resort ofrece una ubicación privilegiada.",
      capacity:
        "Habitaciones estándar: hasta 5 personas. Villa de 2 dormitorios: hasta 9 personas. Grand Villa de 3 dormitorios: hasta 12 personas (cocina completa, comedor, sala de estar, lavadora y secadora).",
      transport:
        "A pie o en barco a EPCOT y Hollywood Studios. Buses a los demás destinos.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "contemporary",
      name: "Disney's Contemporary Resort",
      category: "deluxe",
      photo: demoHotel,
      description:
        "Uno de los hoteles más icónicos de Disney. Además de sus habitaciones estándar, ofrece suites y las exclusivas villas de Bay Lake Tower, con opciones de 1, 2 y 3 dormitorios ideales para familias grandes o grupos que buscan mayor comodidad y espacio.",
      capacity:
        "Habitaciones estándar: hasta 5 personas. Villas de Bay Lake Tower: hasta 12 personas.",
      transport:
        "A pie y monorriel a Magic Kingdom. Monorriel a EPCOT (con conexión en el Transportation and Ticket Center). Buses a los demás parques.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "grand-floridian",
      name: "Disney's Grand Floridian Resort Spa",
      category: "deluxe",
      photo: demoHotel,
      description:
        "El resort más elegante de Disney World, con un ambiente victoriano y servicios de lujo.",
      capacity:
        "Habitaciones estándar: hasta 5 personas. Grand Villas: hasta 12 personas.",
      transport:
        "Monorriel y sendero peatonal hacia Magic Kingdom. Barco y buses al resto de los parques.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "polynesian-village",
      name: "Disney's Polynesian Village Resort",
      category: "deluxe",
      photo: demoHotel,
      description:
        "Inspirado en las islas del Pacífico, ofrece un ambiente tropical y excelentes vistas de los fuegos artificiales de Magic Kingdom.",
      capacity:
        "Habitaciones estándar: hasta 5 personas. Villas y suites: hasta 9 personas.",
      transport:
        "Monorriel, barco y sendero peatonal a Magic Kingdom. Conexión a EPCOT vía monorriel. Buses a los demás parques.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "wilderness-lodge",
      name: "Disney's Wilderness Lodge",
      category: "deluxe",
      photo: demoHotel,
      description:
        "Con arquitectura inspirada en los grandes parques nacionales de Estados Unidos, combina naturaleza y confort.",
      capacity:
        "Habitaciones estándar: hasta 4 personas. Villas y cabañas: hasta 12 personas.",
      transport:
        "Barco a Magic Kingdom. Buses al resto de los parques y Disney Springs.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "yacht-club",
      name: "Disney's Yacht Club Resort",
      category: "deluxe",
      photo: demoHotel,
      description:
        "Con un estilo náutico clásico, comparte la piscina Stormalong Bay con Beach Club y goza de una ubicación privilegiada.",
      capacity:
        "Habitaciones estándar: hasta 5 personas. Suites: hasta 7 personas.",
      transport:
        "A pie o en barco a EPCOT y Hollywood Studios. Buses a Magic Kingdom, Animal Kingdom y Disney Springs.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
  ],
};

const disneyCalifornia: SubDestination = {
  id: "california",
  label: "Disneyland California ",
  parksCount: "2",
  parks: [
    {
      id: "disneyland-park",
      name: "Disneyland Park",
      type: "Temático",
      photo: disneyDestination,
    },
    {
      id: "adventure-park",
      name: "Adventure Park",
      type: "Temático",
      photo: parks,
    },
  ],
  hotels: [
    {
      id: "grand-californian",
      name: "Disney's Grand Californian Hotel & Spa",
      category: "deluxe",
      photo: demoHotel,
      description:
        "El hotel más exclusivo de Disneyland Resort, inspirado en la arquitectura Craftsman de California. Ofrece una ubicación privilegiada con entrada directa a Disney California Adventure y se encuentra a pocos minutos caminando de Disneyland Park y Downtown Disney.",
      capacity:
        "Habitaciones estándar: hasta 5 personas. Suites y villas: hasta 12 personas.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "disneyland-hotel",
      name: "Disneyland Hotel",
      category: "deluxe",
      photo: demoHotel,
      description:
        "El hotel original de Disneyland combina la nostalgia de la historia Disney con modernas comodidades y una ambientación llena de magia. Se encuentra a pocos minutos caminando de los parques a través de Downtown Disney.",
      capacity: "Habitaciones: hasta 5 personas. Villas: hasta 12 personas.",
      transport:
        "Downtown Disney a pie. Acceso al Disneyland Monorail hacia Disneyland Park.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
    {
      id: "pixar-place-hotel",
      name: "Pixar Place Hotel",
      category: "deluxe",
      photo: demoHotel,
      description:
        "Un hotel moderno inspirado en el universo Pixar, con detalles de películas como Toy Story, Cars y Los Increíbles. Está ubicado cerca de los parques, con acceso a pie a Disneyland Park y Disney California Adventure.",
      capacity:
        "Habitaciones estándar: hasta 5 personas. Suites: hasta 10 personas.",
      earlyParkAdmission: "30 minutos antes de la apertura.",
    },
  ],
};

export const disney: MainDestination = {
  id: "disney",
  name: "Disney",
  photo: disneyHero,
  subDestinations: [disneyOrlando, disneyCalifornia],
  ctaButtons: [
    { label: "Cotizá tu paquete hotel y tickets", type: "hotel-tickets" },
    { label: "Cotizá tickets", type: "tickets" },
  ],
};

// export const mainDestinations: MainDestination[] = [disney, universal];
