export interface DropdownItem {
  href: string;
  label: string;
}

export interface NavItem {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
}

export const navItems: NavItem[] = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/destinos",
    label: "Destinos",
    dropdown: [
      {
        href: "/destinos/disney",
        label: "Disney",
      },
      {
        href: "/destinos/universal",
        label: "Universal",
      },
      {
        href: "/destinos/cruceros",
        label: "Cruceros",
      },
      {
        href: "/destinos/otros-tickets",
        label: "Otros tickets",
      },
      {
        href: "/destinos/otros-destinos",
        label: "Otros destinos",
      },
    ],
  },
  {
    href: "/nuestro-team",
    label: "Nuestro team",
  },
  {
    href: "/promociones",
    label: "Promociones",
  },
  {
    href: "/planes-y-beneficios",
    label: "Planes y beneficios",
  },
];
