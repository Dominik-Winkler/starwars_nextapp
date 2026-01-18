import { ResourceConfig } from "@/lib/swapi.config";
import { extractPageNumber } from "@/lib/utils";
import { ApiResponse } from "@/types/swapi";
import Link from "next/link";

export function GenericTablePage<T>({
  config,
  apiResponse,
}: {
  config: ResourceConfig<T>;
  apiResponse: ApiResponse<T>;
}) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-500 text-center">
        {config.metadata.title} Page
      </h1>
      <table
        className="w-full border-collapse"
        key={`${config.metadata.title}-table`}
      >
        <thead>
          <tr className="border-b">
            {config.columns.map((column) => (
              <th key={String(column.key)} className="text-left py-4 px-4">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {apiResponse.results.map((item) => (
            <tr key={String(item[config.columns[0].key])} className="border-b">
              {config.columns.map((column) => (
                <td key={String(column.key)} className="py-3 px-4">
                  {String(item[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {apiResponse.previous && (
        <Link
          href={`${config.endpoint}?page=${extractPageNumber(apiResponse.previous)}`}
        >
          Previous
        </Link>
      )}
      {apiResponse.next && (
        <Link
          href={`${config.endpoint}?page=${extractPageNumber(apiResponse.next)}`}
        >
          Next
        </Link>
      )}
    </div>
  );
}
