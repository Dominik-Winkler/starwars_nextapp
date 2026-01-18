import { ResourceConfig } from "@/lib/swapi.config";
import { extractIdFromUrl, extractPageNumber } from "@/lib/utils";
import { ApiResponse } from "@/types/swapi";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export function GenericTablePage<T extends { url: string }>({
  config,
  apiResponse,
}: {
  config: ResourceConfig<T>;
  apiResponse: ApiResponse<T>;
}) {
  const tableColumns = config.columns.filter((col) =>
    config.tableFields.includes(col.key)
  );

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-500 text-center">
        {config.metadata.title} Page
      </h1>
      <Table key={`${config.metadata.title}-table`}>
        <TableHeader>
          <TableRow>
            {tableColumns.map((column) => (
              <TableHead
                key={String(column.key)}
                className="text-left py-4 px-4"
              >
                {column.label}
              </TableHead>
            ))}
            <TableHead className="text-left py-4 px-4">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apiResponse.results.map((item, index) => (
            <TableRow key={index} className="border-b">
              {tableColumns.map((column) => (
                <TableCell key={String(column.key)} className="py-3 px-4">
                  {column.render
                    ? column.render(item[column.key])
                    : String(item[column.key])}
                </TableCell>
              ))}
              <TableCell className="py-3 px-4">
                <Link
                  href={`${config.endpoint}/${extractIdFromUrl(item[config.detailsLink] as string)}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
