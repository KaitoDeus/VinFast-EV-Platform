"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, User, Calendar, Clock, MapPin } from "lucide-react";
import { TrackingModel } from "@/domain/models";
import { useRouter } from "next/navigation";

interface TrackingInfoBarProps {
  vehicle: TrackingModel;
}

export function TrackingInfoBar({ vehicle }: TrackingInfoBarProps) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* ── Card 1: Client profile — pure white ── */}
      <div className="bg-white rounded-2xl border border-[#f1f5f9] p-5 flex flex-col items-center text-center gap-4">
        <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-white shadow-lg">
          <Image src={vehicle.clientAvatar} alt={vehicle.clientName} fill sizes="72px" className="object-cover" />
        </div>
        <div className="space-y-1.5">
          <h4 className="text-[15px] font-semibold text-[#1e293b]">{vehicle.clientName}</h4>
          <span
            className={`inline-block px-3 py-[3px] rounded-md text-[10px] font-bold
              ${
                vehicle.status === "On Trip"
                  ? "bg-[#dbeafe] text-[#2563eb]"
                  : "bg-[#ffe4e6] text-[#e11d48]"
              }`}
          >
            {vehicle.status}
          </span>
        </div>
        <button
          onClick={() => router.push("/dashboard/messages")}
          className="w-full py-2.5 rounded-lg
            bg-[#f8fafc] border border-[#e2e8f0]
            text-[#475569] text-[12px] font-medium
            hover:bg-[#f1f5f9] transition-colors cursor-pointer
            flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          Send a Message
        </button>
      </div>

      {/* ── Card 2: Vehicle specs — light gray ── */}
      <div className="bg-[#f8fafc] rounded-2xl border border-[#f1f5f9] p-5 flex flex-col items-center text-center gap-3">
        <div className="relative w-[140px] h-[80px] rounded-xl overflow-hidden">
          <Image src={vehicle.carImage} alt={vehicle.carModel} fill sizes="140px" className="object-cover" />
        </div>
        <h4 className="text-[15px] font-bold text-[#1e293b]">{vehicle.carModel}</h4>
        <div className="w-full space-y-2 pt-1 border-t border-[#e2e8f0]">
          <div className="flex justify-between text-[12px] pt-2">
            <span className="text-[#94a3b8]">Car Type</span>
            <span className="font-semibold text-[#1e293b] uppercase">{vehicle.carType}</span>
          </div>
          <div className="flex justify-between text-[12px]">
            <span className="text-[#94a3b8]">Car Number</span>
            <span className="font-bold text-[#1e293b]">{vehicle.carNumber}</span>
          </div>
        </div>
      </div>

      {/* ── Card 3: Rent info — light gray ── */}
      <div className="bg-[#f8fafc] rounded-2xl border border-[#f1f5f9] p-5 flex flex-col gap-2.5">
        <h4 className="text-[14px] font-bold text-[#1e293b] mb-0.5">Rent Info</h4>
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
      <div className="flex items-center gap-1.5 text-[#94a3b8]">
        {icon}
        <span>{label}</span>
      </div>
      <span className={`text-[#1e293b] ${bold ? "font-bold" : "font-medium"}`}>{value}</span>
    </div>
  );
}
