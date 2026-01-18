import { ApiResponse } from "@/types/swapi";
import { config } from "./config";

export async function fetchResource<T>(
  endpoint: string,
  page: string | string[] | undefined
): Promise<ApiResponse<T>> {
  let fetchUrl = `${config.apiBaseUrl}/${endpoint}`;
  if (page && typeof page === "string") {
    fetchUrl += `?page=${page}`;
  }

  const response = await fetch(fetchUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }
  const data: ApiResponse<T> = await response.json();
  return data;
}
