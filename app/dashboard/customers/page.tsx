import type { Metadata } from "next";
import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Customers | Acme Dashboard",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query =
    typeof searchParams?.query === "string" ? searchParams.query : "";

  const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}
