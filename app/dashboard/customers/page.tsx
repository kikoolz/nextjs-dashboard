import type { Metadata } from "next";
import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Customers | Acme Dashboard",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const query =
    typeof searchParams?.query === "string" ? searchParams.query : "";

  let customers;
  try {
    customers = await fetchFilteredCustomers(query);
  } catch (error) {
    return (
      <main>
        <p>Failed to load customers. Please try again later.</p>
      </main>
    );
  }

  if (!customers || customers.length === 0) {
    return (
      <main>
        <p>No customers found.</p>
      </main>
    );
  }

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}