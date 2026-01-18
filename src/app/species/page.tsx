import { Species } from "@/types/swapi";
import { SWAPI_RESOURCES } from "@/lib/swapi.config";
import { GenericTablePage } from "@/components/custom_ui/generic-table-page";
import { fetchResource } from "@/lib/api";

export default async function SpeciesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await searchParams;
  const speciesResource = SWAPI_RESOURCES.species;
  const apiResponse = await fetchResource<Species>(
    speciesResource.endpoint,
    page
  );

  return (
    <GenericTablePage config={speciesResource} apiResponse={apiResponse} />
  );
}

export async function generateMetadata() {
  return SWAPI_RESOURCES.species.metadata;
}
