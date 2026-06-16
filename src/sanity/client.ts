import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ctuyjorv",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: true,
});