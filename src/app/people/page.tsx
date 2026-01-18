import { Person } from "@/types/swapi";
import { SWAPI_RESOURCES } from "@/lib/swapi.config";
import { GenericTablePage } from "@/components/custom_ui/generic-table-page";
import { fetchResource } from "@/lib/api";

export default async function PeoplePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await searchParams;
  const peopleResource = SWAPI_RESOURCES.people;
  const apiResponse = await fetchResource<Person>(
    peopleResource.endpoint,
    page
  );

  return <GenericTablePage config={peopleResource} apiResponse={apiResponse} />;
}

export async function generateMetadata() {
  return SWAPI_RESOURCES.people.metadata;
}
