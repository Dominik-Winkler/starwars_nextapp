import { Planet } from "@/types/swapi";
import { SWAPI_RESOURCES } from "@/lib/swapi.config";
import { GenericTablePage } from "@/components/custom_ui/generic-table-page";
import { fetchResource } from "@/lib/api";

export default async function PlanetsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await searchParams;
  const planetsResource = SWAPI_RESOURCES.planets;
  const apiResponse = await fetchResource<Planet>(
    planetsResource.endpoint,
    page
  );

  return (
    <GenericTablePage config={planetsResource} apiResponse={apiResponse} />
  );
}

export async function generateMetadata() {
  return SWAPI_RESOURCES.planets.metadata;
}
