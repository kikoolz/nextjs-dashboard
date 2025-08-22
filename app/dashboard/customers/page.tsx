import type { Metadata } from "next";
import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Customers | Acme Dashboard",
};

export default async function CustomersPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  
  const query =
    typeof params?.query === "string" ? params.query : "";

  const start = Date.now();

  let customers;
  try {
    customers = await fetchFilteredCustomers(query);
  } catch (error) {
    return (
      <main>
        <p>Failed to load customers. Please try again later.</p>
      </main>
    );
  } finally {
    const end = Date.now();
    console.info(`Customer fetch attempt finished in ${end - start}ms`);
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