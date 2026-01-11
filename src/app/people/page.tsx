import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";
import { ApiResponse, Person } from "@/types/swapi";
import Link from "next/link";

export default async function PeoplePage() {
  const data = await fetch(`${config.apiBaseUrl}/people`);
  const json: ApiResponse<Person> = await data.json();
  const people = json.results;
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-500 text-center">
        People Page
      </h1>
      <table className="w-full border-collapse" key="people-table">
        <thead>
          <tr className="border-b">
            <th className="text-left py-4 px-4">Name</th>
            <th className="text-left py-4 px-4">Height</th>
            <th className="text-left py-4 px-4">Mass</th>
            <th className="text-left py-4 px-4">Hair Color</th>
            <th className="text-left py-4 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.name} className="border-b">
              <td className="py-3 px-4">{person.name}</td>
              <td className="py-3 px-4">{person.height}</td>
              <td className="py-3 px-4">{person.mass}</td>
              <td className="py-3 px-4">{person.hair_color}</td>
              <td className="py-3 px-4">
                <Link href={`${person.url.split(`${config.apiBaseUrl}`)[1]}`}>
                  <Button variant="ghost" size="sm">
                    Details
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
