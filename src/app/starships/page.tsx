import { Starship } from "@/types/swapi";
import { SWAPI_RESOURCES } from "@/lib/swapi.config";
import { GenericTablePage } from "@/components/custom_ui/generic-table-page";
import { fetchResource } from "@/lib/api";

export default async function StarshipsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await searchParams;
  const starshipsResource = SWAPI_RESOURCES.starships;
  const apiResponse = await fetchResource<Starship>(
    starshipsResource.endpoint,
    page
  );

  return (
    <GenericTablePage config={starshipsResource} apiResponse={apiResponse} />
  );
}

export async function generateMetadata() {
  return SWAPI_RESOURCES.starships.metadata;
}
