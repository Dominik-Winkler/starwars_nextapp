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
  tableFields: Array<keyof T>;
  detailFields: Array<keyof T>;
  detailsLink: keyof T;
  metadata: {
    title: string;
    description: string;
  };
};

export type ColumnConfig<T> = {
  key: keyof T;
  label: string;
  render?: (value: unknown) => string;
};

export const SWAPI_RESOURCES = {
  people: {
    endpoint: "people",
    columns: [
      { key: "name" as keyof Person, label: "Name" },
      { key: "height" as keyof Person, label: "Height" },
      { key: "mass" as keyof Person, label: "Mass" },
      { key: "hair_color" as keyof Person, label: "Hair Color" },
      { key: "skin_color" as keyof Person, label: "Skin Color" },
      { key: "eye_color" as keyof Person, label: "Eye Color" },
      { key: "birth_year" as keyof Person, label: "Birth Year" },
      { key: "gender" as keyof Person, label: "Gender" },
    ],
    tableFields: ["name", "height", "mass", "birth_year"],
    detailFields: [
      "name",
      "height",
      "mass",
      "hair_color",
      "skin_color",
      "eye_color",
      "birth_year",
      "gender",
    ],
    detailsLink: "url",
    metadata: {
      title: "People",
      description: "List of people in the Star Wars universe",
    },
  } satisfies ResourceConfig<Person>,
  planets: {
    endpoint: "planets",
    columns: [
      { key: "name" as keyof Planet, label: "Name" },
      { key: "rotation_period" as keyof Planet, label: "Rotation Period" },
      { key: "orbital_period" as keyof Planet, label: "Orbital Period" },
      { key: "diameter" as keyof Planet, label: "Diameter" },
      { key: "climate" as keyof Planet, label: "Climate" },
      { key: "gravity" as keyof Planet, label: "Gravity" },
      { key: "terrain" as keyof Planet, label: "Terrain" },
      { key: "surface_water" as keyof Planet, label: "Surface Water" },
      { key: "population" as keyof Planet, label: "Population" },
    ],
    tableFields: ["name", "climate", "terrain", "population"],
    detailFields: [
      "name",
      "rotation_period",
      "orbital_period",
      "diameter",
      "climate",
      "gravity",
      "terrain",
      "surface_water",
      "population",
    ],
    detailsLink: "url",
    metadata: {
      title: "Planets",
      description: "List of planets in the Star Wars universe",
    },
  } satisfies ResourceConfig<Planet>,
  films: {
    endpoint: "films",
    columns: [
      { key: "title" as keyof Film, label: "Title" },
      { key: "episode_id" as keyof Film, label: "Episode" },
      { key: "opening_crawl" as keyof Film, label: "Opening Crawl" },
      { key: "director" as keyof Film, label: "Director" },
      { key: "producer" as keyof Film, label: "Producer" },
      { key: "release_date" as keyof Film, label: "Release Date" },
    ],
    tableFields: ["title", "director", "release_date", "episode_id"],
    detailFields: [
      "title",
      "episode_id",
      "opening_crawl",
      "director",
      "producer",
      "release_date",
    ],
    detailsLink: "url",
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
      { key: "designation" as keyof Species, label: "Designation" },
      { key: "average_height" as keyof Species, label: "Average Height" },
      { key: "skin_colors" as keyof Species, label: "Skin Colors" },
      { key: "hair_colors" as keyof Species, label: "Hair Colors" },
      { key: "eye_colors" as keyof Species, label: "Eye Colors" },
      { key: "average_lifespan" as keyof Species, label: "Average Lifespan" },
      { key: "language" as keyof Species, label: "Language" },
    ],
    tableFields: ["name", "classification", "designation", "language"],
    detailFields: [
      "name",
      "classification",
      "designation",
      "average_height",
      "skin_colors",
      "hair_colors",
      "eye_colors",
      "average_lifespan",
      "language",
    ],
    detailsLink: "url",
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
      { key: "manufacturer" as keyof Vehicle, label: "Manufacturer" },
      { key: "cost_in_credits" as keyof Vehicle, label: "Cost" },
      { key: "length" as keyof Vehicle, label: "Length" },
      { key: "max_atmosphering_speed" as keyof Vehicle, label: "Max Speed" },
      { key: "crew" as keyof Vehicle, label: "Crew" },
      { key: "passengers" as keyof Vehicle, label: "Passengers" },
      { key: "cargo_capacity" as keyof Vehicle, label: "Cargo Capacity" },
      { key: "consumables" as keyof Vehicle, label: "Consumables" },
      { key: "vehicle_class" as keyof Vehicle, label: "Vehicle Class" },
    ],
    tableFields: ["name", "model", "manufacturer", "vehicle_class"],
    detailFields: [
      "name",
      "model",
      "manufacturer",
      "cost_in_credits",
      "length",
      "max_atmosphering_speed",
      "crew",
      "passengers",
      "cargo_capacity",
      "consumables",
      "vehicle_class",
    ],
    detailsLink: "url",
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
      { key: "manufacturer" as keyof Starship, label: "Manufacturer" },
      { key: "cost_in_credits" as keyof Starship, label: "Cost" },
      { key: "length" as keyof Starship, label: "Length" },
      { key: "max_atmosphering_speed" as keyof Starship, label: "Max Speed" },
      { key: "crew" as keyof Starship, label: "Crew" },
      { key: "passengers" as keyof Starship, label: "Passengers" },
      { key: "cargo_capacity" as keyof Starship, label: "Cargo Capacity" },
      { key: "consumables" as keyof Starship, label: "Consumables" },
      {
        key: "hyperdrive_rating" as keyof Starship,
        label: "Hyperdrive Rating",
      },
      { key: "MGLT" as keyof Starship, label: "MGLT" },
      { key: "starship_class" as keyof Starship, label: "Starship Class" },
    ],
    tableFields: ["name", "model", "manufacturer", "starship_class"],
    detailFields: [
      "name",
      "model",
      "manufacturer",
      "cost_in_credits",
      "length",
      "max_atmosphering_speed",
      "crew",
      "passengers",
      "cargo_capacity",
      "consumables",
      "hyperdrive_rating",
      "MGLT",
      "starship_class",
    ],
    detailsLink: "url",
    metadata: {
      title: "Starships",
      description: "List of starships in the Star Wars universe",
    },
  } satisfies ResourceConfig<Starship>,
} as const;

export type SWAPIResourceKey = keyof typeof SWAPI_RESOURCES;
