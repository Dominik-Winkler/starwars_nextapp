import { GenericDetailPage } from "@/components/custom_ui/generic-detail-page";
import { fetchDetail } from "@/lib/api";
import { SWAPI_RESOURCES } from "@/lib/swapi.config";
import { Film } from "@/types/swapi";

export default async function FilmDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const film = await fetchDetail<Film>("films", Number(id));

  return <GenericDetailPage<Film> config={SWAPI_RESOURCES.films} data={film} />;
}
