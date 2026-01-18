import { GenericDetailPage } from "@/components/custom_ui/generic-detail-page";
import { fetchDetail } from "@/lib/api";
import { SWAPI_RESOURCES } from "@/lib/swapi.config";
import { Vehicle } from "@/types/swapi";

export default async function VehicleDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vehicle = await fetchDetail<Vehicle>("vehicles", Number(id));

  return (
    <GenericDetailPage<Vehicle>
      config={SWAPI_RESOURCES.vehicles}
      data={vehicle}
    />
  );
}
