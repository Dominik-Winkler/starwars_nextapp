import { Vehicle } from "@/types/swapi";
import { SWAPI_RESOURCES } from "@/lib/swapi.config";
import { GenericTablePage } from "@/components/custom_ui/generic-table-page";
import { fetchResource } from "@/lib/api";

export default async function VehiclesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await searchParams;
  const vehiclesResource = SWAPI_RESOURCES.vehicles;
  const apiResponse = await fetchResource<Vehicle>(
    vehiclesResource.endpoint,
    page
  );

  return (
    <GenericTablePage config={vehiclesResource} apiResponse={apiResponse} />
  );
}

export async function generateMetadata() {
  return SWAPI_RESOURCES.vehicles.metadata;
}
