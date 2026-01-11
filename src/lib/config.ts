export const config = {
  apiBaseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://swapi.py4e.com/api",
} as const;
