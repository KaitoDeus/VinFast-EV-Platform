"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpDown } from "lucide-react";
import { DriverModel } from "@/domain/models";
import { useLanguage } from "@/components/language-provider";

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
  const { lang, t } = useLanguage();

  if (drivers.length === 0) {
    return (
      <div className="bg-[#1f1f1f] p-12 rounded-2xl border border-[#333333] text-center space-y-2">
        <p className="text-sm font-bold text-white">No drivers found</p>
        <p className="text-xs text-slate-400">Try adjusting your search query or filter.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse min-w-[700px]">
          <thead>
            <tr
              className="border-b border-[#333333] bg-[#262626] text-white font-black uppercase tracking-wider text-[11px]"
            >
              <th className="py-3.5 px-4 pl-6">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>{t("bookings.driver")}</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#38bdf8]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Email</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#38bdf8]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>{lang === "vi" ? "Số điện thoại" : "Phone No."}</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#38bdf8]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>{lang === "vi" ? "Giờ làm việc" : "Work Hours"}</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#38bdf8]" />
                </div>
              </th>
              <th className="py-3.5 px-4 text-center">{t("common.status")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2a2a2a] font-medium text-slate-200">
            {drivers.map((driver) => {
              const isSelected = driver.id === selectedDriverId;

              return (
                <tr
                  key={driver.id}
                  onClick={() => onSelectDriver(driver)}
                  className={`hover:bg-[#262626] transition-colors cursor-pointer ${
                    isSelected ? "bg-[#262626]/80 ring-1 ring-[#38bdf8]/40" : ""
                  }`}
                >
                  <td className="py-3.5 px-4 pl-6 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden relative border border-[#3a3a3a]">
                        <Image
                          src={driver.avatar}
                          alt={driver.name}
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-white leading-tight">{driver.name}</p>
                        <p className="text-[10px] text-slate-400">{driver.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 font-medium whitespace-nowrap">
                    {driver.email}
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 font-medium whitespace-nowrap">
                    {driver.phone}
                  </td>
                  <td className="py-3.5 px-4 text-white font-bold whitespace-nowrap">
                    {driver.workHours} {lang === "vi" ? "Giờ" : "Hours"}
                  </td>
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        driver.status === "On Duty"
                          ? "bg-emerald-950 text-emerald-300 border border-emerald-800/40"
                          : driver.status === "Sick Leave"
                          ? "bg-rose-950 text-rose-300 border border-rose-800/40"
                          : "bg-amber-950 text-amber-300 border border-amber-800/40"
                      }`}
                    >
                      {driver.status}
                    </span>
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
