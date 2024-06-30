import { fetchCardData, fetchRevenue, fetchLatestInvoices } from '@/app/lib/data';

export default async function Page() {
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();
  // const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();

  return (
    <p>Customers Page</p>
  );
}