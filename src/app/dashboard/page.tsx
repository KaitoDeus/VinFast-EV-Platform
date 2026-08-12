import {
  MetricCards,
  EarningsChart,
  RentStatusChart,
  BookingsBarChart,
  RemindersCard,
  CarAvailabilityWidget,
  CarTypesBreakdown,
  BookingsTable,
  RecentActivityFeed,
} from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <>
      {/* 4 Metric Callout Cards Grid */}
      <MetricCards />

      {/* Main Grid: Left Column (Charts & Tables) / Right Column (Widgets & Activity) */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column (8 cols on XL) */}
        <div className="col-span-12 xl:col-span-8 space-y-6">
          {/* Earnings & Rent Status Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7">
              <EarningsChart />
            </div>
            <div className="md:col-span-5">
              <RentStatusChart />
            </div>
          </div>

          {/* Bookings Overview & Reminders Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7">
              <BookingsBarChart />
            </div>
            <div className="md:col-span-5">
              <RemindersCard />
            </div>
          </div>

          {/* Car Bookings Interactive Table */}
          <BookingsTable />
        </div>

        {/* Right Column (4 cols on XL) */}
        <div className="col-span-12 xl:col-span-4 space-y-6">
          {/* Car Availability Filter Widget */}
          <CarAvailabilityWidget />

          {/* Car Types Distribution Progress List */}
          <CarTypesBreakdown />

          {/* Recent Activity Timeline Feed */}
          <RecentActivityFeed />
        </div>
      </div>
    </>
  );
}
