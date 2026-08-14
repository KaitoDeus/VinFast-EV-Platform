"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, User, Calendar, Clock, MapPin } from "lucide-react";
import { TrackingItem } from "@/types";
import { useRouter } from "next/navigation";

interface TrackingInfoBarProps {
  vehicle: TrackingItem;
}

export function TrackingInfoBar({ vehicle }: TrackingInfoBarProps) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* ── Card 1: Client profile ── */}
      <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] p-5 flex flex-col items-center text-center gap-4">
        <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-neutral-700 shadow-lg">
          <Image src={vehicle.clientAvatar} alt={vehicle.clientName} fill sizes="72px" className="object-cover" />
        </div>
        <div className="space-y-1.5">
          <h4 className="text-[15px] font-semibold text-white">{vehicle.clientName}</h4>
          <span
            className={`inline-block px-3 py-[3px] rounded-md text-[10px] font-bold
              ${
                vehicle.status === "On Trip"
                  ? "bg-sky-950/80 text-sky-300 border border-sky-800/40"
                  : "bg-rose-950/80 text-rose-300 border border-rose-800/40"
              }`}
          >
            {vehicle.status}
          </span>
        </div>
        <button
          onClick={() => router.push("/dashboard/messages")}
          className="w-full py-2.5 rounded-lg
            bg-[#2a2a2a] border border-[#3a3a3a]
            text-slate-200 text-[12px] font-medium
            hover:bg-[#333333] transition-colors cursor-pointer
            flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          Send a Message
        </button>
      </div>

      {/* ── Card 2: Vehicle specs ── */}
      <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] p-5 flex flex-col items-center text-center gap-3">
        <div className="relative w-[140px] h-[80px] rounded-xl overflow-hidden">
          <Image src={vehicle.carImage} alt={vehicle.carModel} fill sizes="140px" className="object-cover" />
        </div>
        <h4 className="text-[15px] font-bold text-white">{vehicle.carModel}</h4>
        <div className="w-full space-y-2 pt-1 border-t border-[#333333]">
          <div className="flex justify-between text-[12px] pt-2">
            <span className="text-slate-400">Car Type</span>
            <span className="font-semibold text-white uppercase">{vehicle.carType}</span>
          </div>
          <div className="flex justify-between text-[12px]">
            <span className="text-slate-400">Car Number</span>
            <span className="font-bold text-white">{vehicle.carNumber}</span>
          </div>
        </div>
      </div>

      {/* ── Card 3: Rent info ── */}
      <div className="bg-[#1f1f1f] rounded-2xl border border-[#333333] p-5 flex flex-col gap-2.5">
        <h4 className="text-[14px] font-bold text-white mb-0.5">Rent Info</h4>
        <InfoRow icon={<User className="w-3.5 h-3.5" />} label="Driver" value={vehicle.driverName} />
        <InfoRow icon={<Calendar className="w-3.5 h-3.5" />} label="Start Date" value={vehicle.startDate} />
        <InfoRow icon={<Calendar className="w-3.5 h-3.5" />} label="End Date" value={vehicle.endDate} />
        <InfoRow icon={<Clock className="w-3.5 h-3.5" />} label="Trip Time" value={vehicle.tripTime} />
        <InfoRow icon={<MapPin className="w-3.5 h-3.5" />} label="Total Distance" value={vehicle.totalDistance} bold />
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  bold,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className="flex items-center justify-between text-[12px]">
      <div className="flex items-center gap-1.5 text-slate-400">
        {icon}
        <span>{label}</span>
      </div>
      <span className={`text-white ${bold ? "font-bold" : "font-medium"}`}>{value}</span>
    </div>
  );
}
