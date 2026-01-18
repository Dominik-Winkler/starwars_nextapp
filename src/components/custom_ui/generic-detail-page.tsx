import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ResourceConfig } from "@/lib/swapi.config";

export function GenericDetailPage<T extends Record<string, unknown>>({
  config,
  data,
}: {
  config: ResourceConfig<T>;
  data: T;
}) {
  const detailColumns = config.columns.filter((col) =>
    config.detailFields.includes(col.key)
  );

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        {config.metadata.title} Detail Page
      </h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{String(data.name)}</CardTitle>
        </CardHeader>
        <CardContent>
          {detailColumns.map((column) => (
            <div key={String(column.key)} className="mb-2">
              <strong>{column.label}:</strong>{" "}
              {column.render
                ? column.render(data[column.key])
                : String(data[column.key])}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
