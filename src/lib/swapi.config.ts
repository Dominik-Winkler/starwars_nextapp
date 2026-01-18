import type {
  Person,
  Planet,
  Film,
  Species,
  Vehicle,
  Starship,
} from "@/types/swapi";

export type ResourceConfig<T> = {
  endpoint: string;
  columns: ColumnConfig<T>[];
  detailFields: Array<keyof T>;
  metadata: {
    title: string;
    description: string;
  };
};

export type ColumnConfig<T> = {
  key: keyof T;
  label: string;
  render?: (value: any) => string;
};

export const SWAPI_RESOURCES = {
  people: {
    endpoint: "people",
    columns: [
      { key: "name" as keyof Person, label: "Name" },
      { key: "height" as keyof Person, label: "Height" },
    ],
    detailFields: ["name", "height"],
    metadata: {
      title: "People",
      description: "List of people in the Star Wars universe",
    },
  } satisfies ResourceConfig<Person>,
  planets: {
    endpoint: "planets",
    columns: [
      { key: "name" as keyof Planet, label: "Name" },
      { key: "climate" as keyof Planet, label: "Climate" },
    ],
    detailFields: ["name", "climate"],
    metadata: {
      title: "Planets",
      description: "List of planets in the Star Wars universe",
    },
  } satisfies ResourceConfig<Planet>,
  films: {
    endpoint: "films",
    columns: [
      { key: "title" as keyof Film, label: "Title" },
      { key: "director" as keyof Film, label: "Director" },
    ],
    detailFields: ["title", "director"],
    metadata: {
      title: "Films",
      description: "List of films in the Star Wars universe",
    },
  } satisfies ResourceConfig<Film>,
  species: {
    endpoint: "species",
    columns: [
      { key: "name" as keyof Species, label: "Name" },
      { key: "classification" as keyof Species, label: "Classification" },
    ],
    detailFields: ["name", "classification"],
    metadata: {
      title: "Species",
      description: "List of species in the Star Wars universe",
    },
  } satisfies ResourceConfig<Species>,
  vehicles: {
    endpoint: "vehicles",
    columns: [
      { key: "name" as keyof Vehicle, label: "Name" },
      { key: "model" as keyof Vehicle, label: "Model" },
    ],
    detailFields: ["name", "model"],
    metadata: {
      title: "Vehicles",
      description: "List of vehicles in the Star Wars universe",
    },
  } satisfies ResourceConfig<Vehicle>,
  starships: {
    endpoint: "starships",
    columns: [
      { key: "name" as keyof Starship, label: "Name" },
      { key: "model" as keyof Starship, label: "Model" },
    ],
    detailFields: ["name", "model"],
    metadata: {
      title: "Starships",
      description: "List of starships in the Star Wars universe",
    },
  } satisfies ResourceConfig<Starship>,
} as const;

export type SWAPIResourceKey = keyof typeof SWAPI_RESOURCES;
