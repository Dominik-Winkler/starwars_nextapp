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

export async function fetchDetail<T>(endpoint: string, id: number): Promise<T> {
  const response = await fetch(`${config.apiBaseUrl}/${endpoint}/${id}`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch detail from ${config.apiBaseUrl}/${endpoint}/${id}`
    );
  }
  const data: T = await response.json();
  return data;
}
