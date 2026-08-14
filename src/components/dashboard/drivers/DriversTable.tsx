"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpDown } from "lucide-react";
import { DriverModel } from "@/domain/models";
import { useTheme } from "@/components/theme-provider";

interface DriversTableProps {
  drivers: DriverModel[];
  selectedDriverId: string;
  onSelectDriver: (driver: DriverModel) => void;
}

export function DriversTable({
  drivers,
  selectedDriverId,
  onSelectDriver,
}: DriversTableProps) {
  const { theme } = useTheme();

  if (drivers.length === 0) {
    return (
      <div className="theme-card p-12 rounded-2xl border text-center space-y-2">
        <p className="text-sm font-bold theme-text">No drivers found</p>
        <p className="text-xs theme-muted">Try adjusting your search query or filter.</p>
      </div>
    );
  }

  return (
    <div className="theme-card rounded-2xl border shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse min-w-[700px]">
          {/* Header Row (Pale Ice Blue & Pure Black Extra-Bold Text in Light Mode) */}
          <thead>
            <tr
              style={{
                backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
                color: theme === "dark" ? "#ffffff" : "#000000",
                borderColor: theme === "dark" ? "#334155" : "#e0f2fe",
              }}
              className="border-b font-black uppercase tracking-wider text-[11px]"
            >
              <th className="py-3.5 px-4 pl-6">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Name</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Email</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Phone No.</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4 text-center pr-6">
                <div className="flex items-center justify-center gap-1.5 cursor-pointer">
                  <span>Status</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Body Rows with Ultra-Thin Separators */}
          <tbody className="divide-y divide-slate-100/40 dark:divide-slate-800/30 font-medium">
            {drivers.map((driver) => {
              const isSelected = driver.id === selectedDriverId;

              return (
                <tr
                  key={driver.id}
                  onClick={() => onSelectDriver(driver)}
                  style={
                    isSelected
                      ? {
                          backgroundColor: theme === "dark" ? "#1e293b" : "#edf7fc",
                        }
                      : {}
                  }
                  className={`transition-colors cursor-pointer ${
                    isSelected
                      ? "font-extrabold"
                      : "hover:bg-slate-50/60 dark:hover:bg-slate-800/30"
                  }`}
                >
                  {/* Name Cell with Avatar */}
                  <td className="py-3.5 px-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                        <Image
                          src={driver.avatar}
                          alt={driver.name}
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                      <span className="font-extrabold theme-text text-xs whitespace-nowrap">
                        {driver.name}
                      </span>
                    </div>
                  </td>

                  {/* Email Cell */}
                  <td className="py-3.5 px-4 theme-text font-semibold text-slate-700 dark:text-slate-300">
                    {driver.email}
                  </td>

                  {/* Phone Cell */}
                  <td className="py-3.5 px-4 theme-text font-extrabold whitespace-nowrap">
                    {driver.phone}
                  </td>

                  {/* Status Badge Cell */}
                  <td className="py-3.5 px-4 text-center pr-6">
                    {driver.status === "On Duty" && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#edf7fc] text-[#00a8ff] border border-sky-200 dark:bg-sky-950/60 dark:text-sky-400 inline-flex items-center gap-1.5 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00a8ff]" />
                        <span>On Duty</span>
                      </span>
                    )}
                    {driver.status === "Sick Leave" && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-rose-50 text-rose-500 border border-rose-200 dark:bg-rose-950/60 dark:text-rose-400 inline-flex items-center gap-1.5 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <span>Sick Leave</span>
                      </span>
                    )}
                    {driver.status === "Half-Day Leave" && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#0f172a] text-white inline-flex items-center gap-1.5 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span>Half-Day Leave</span>
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
