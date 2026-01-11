import { config } from "@/lib/config";
import { Person } from "@/types/swapi";

export default async function PersonDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetch(`${config.apiBaseUrl}/people/${id}`);
  const person: Person = await data.json();

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-500 text-center">
        {person.name}
      </h1>
      <ul className="list-disc list-inside mt-4">
        <li>
          <strong>Height:</strong> {person.height}
        </li>
        <li>
          <strong>Mass:</strong> {person.mass}
        </li>
        <li>
          <strong>Hair Color:</strong> {person.hair_color}
        </li>
        <li>
          <strong>Skin Color:</strong> {person.skin_color}
        </li>
        <li>
          <strong>Eye Color:</strong> {person.eye_color}
        </li>
        <li>
          <strong>Birth Year:</strong> {person.birth_year}
        </li>
        <li>
          <strong>Gender:</strong>
          {person.gender}
        </li>
      </ul>
    </div>
  );
}
