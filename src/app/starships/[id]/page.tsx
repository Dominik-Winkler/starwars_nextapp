import { GenericDetailPage } from "@/components/custom_ui/generic-detail-page";
import { fetchDetail } from "@/lib/api";
import { SWAPI_RESOURCES } from "@/lib/swapi.config";
import { Starship } from "@/types/swapi";

export default async function StarshipDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const starship = await fetchDetail<Starship>("starships", Number(id));

  return (
    <GenericDetailPage<Starship>
      config={SWAPI_RESOURCES.starships}
      data={starship}
    />
  );
}
