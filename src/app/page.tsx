"use client";

import { useFetchUsers } from "@/lib/hooks/useFetchUsers";

export default function Home() {
  const { isLoading, data } = useFetchUsers();
  return <div></div>;
}
