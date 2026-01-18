import { GenericDetailPage } from "@/components/custom_ui/generic-detail-page";
import { fetchDetail } from "@/lib/api";
import { SWAPI_RESOURCES } from "@/lib/swapi.config";
import { Species } from "@/types/swapi";

export default async function SpeciesDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const species = await fetchDetail<Species>("species", Number(id));

  return (
    <GenericDetailPage<Species>
      config={SWAPI_RESOURCES.species}
      data={species}
    />
  );
}
