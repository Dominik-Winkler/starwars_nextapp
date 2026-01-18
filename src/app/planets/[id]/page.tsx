import { GenericDetailPage } from "@/components/custom_ui/generic-detail-page";
import { fetchDetail } from "@/lib/api";
import { SWAPI_RESOURCES } from "@/lib/swapi.config";
import { Planet } from "@/types/swapi";

export default async function PlanetDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const planet = await fetchDetail<Planet>("planets", Number(id));

  return (
    <GenericDetailPage<Planet> config={SWAPI_RESOURCES.planets} data={planet} />
  );
}
