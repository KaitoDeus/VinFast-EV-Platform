import {
  BookingKpiCards,
  BookingsDivergingChart,
  FullBookingsTable,
} from "@/components/dashboard/bookings";

export default function BookingsPage() {
  return (
    <>
      {/* Top Split Section: Mini KPI Cards & Diverging Overview Bar Chart */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left 4 Mini KPI Cards (2x2 Grid on md/lg) */}
        <div className="col-span-12 xl:col-span-6">
          <BookingKpiCards />
        </div>

        {/* Right Diverging Bar Chart (Done vs Canceled) */}
        <div className="col-span-12 xl:col-span-6">
          <BookingsDivergingChart />
        </div>
      </div>

      {/* Main Full Car Bookings Data Table */}
      <FullBookingsTable />
    </>
  );
}
