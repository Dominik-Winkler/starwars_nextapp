import { Film } from "@/types/swapi";
import { SWAPI_RESOURCES } from "@/lib/swapi.config";
import { GenericTablePage } from "@/components/custom_ui/generic-table-page";
import { fetchResource } from "@/lib/api";

export default async function FilmsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await searchParams;
  const filmsResource = SWAPI_RESOURCES.films;
  const apiResponse = await fetchResource<Film>(filmsResource.endpoint, page);

  return <GenericTablePage config={filmsResource} apiResponse={apiResponse} />;
}

export async function generateMetadata() {
  return SWAPI_RESOURCES.films.metadata;
}
