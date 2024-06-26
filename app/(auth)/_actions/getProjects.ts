"use server";

import { api } from "@/config/api";

export default async function getProjects() {
  try {
    const res = await api.get("/projects");
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
