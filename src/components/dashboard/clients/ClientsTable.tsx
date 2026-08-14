"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileText, ArrowUpDown } from "lucide-react";
import { ClientModel } from "@/domain/models";
import { useLanguage } from "@/components/language-provider";

interface ClientsTableProps {
  clients: ClientModel[];
  onEditClient: (client: ClientModel) => void;
  onDeleteClient: (id: string) => void;
}

export function ClientsTable({
  clients,
  onEditClient,
  onDeleteClient,
}: ClientsTableProps) {
  const { lang, t } = useLanguage();
  const [selectedIds, setSelectedIds] = useState<string[]>(["CLT-003", "CLT-004"]);

  const toggleSelectAll = () => {
    if (selectedIds.length === clients.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(clients.map((c) => c.id));
    }
  };

  const toggleSelectRow = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  if (clients.length === 0) {
    return (
      <div className="bg-[#1f1f1f] p-12 rounded-2xl border border-[#333333] text-center space-y-2">
        <p className="text-sm font-bold text-white">No clients found</p>
        <p className="text-xs text-slate-400">Try adjusting your search query.</p>
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
              <th className="py-3.5 px-4 w-10 text-center">
                <input
                  type="checkbox"
                  checked={selectedIds.length === clients.length && clients.length > 0}
                  onChange={toggleSelectAll}
                  className="rounded border-[#3a3a3a] accent-[#1464f4] w-4 h-4 cursor-pointer"
                />
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>{lang === "vi" ? "Mã KH" : "Client ID"}</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#38bdf8]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>{t("bookings.client")}</span>
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
                  <span>{lang === "vi" ? "Số điện thoại" : "Phone"}</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#38bdf8]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>{lang === "vi" ? "Căn cước / Hộ chiếu" : "Residence Card"}</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#38bdf8]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>{lang === "vi" ? "Giấy phép lái xe" : "Driver License"}</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#38bdf8]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>{lang === "vi" ? "Điểm tích lũy" : "Points"}</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#38bdf8]" />
                </div>
              </th>
              <th className="py-3.5 px-4 text-center">{t("common.action")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2a2a2a] font-medium text-slate-200">
            {clients.map((client) => {
              const isSelected = selectedIds.includes(client.id);

              return (
                <tr
                  key={client.id}
                  className={`hover:bg-[#262626] transition-colors ${
                    isSelected ? "bg-[#262626]/80" : ""
                  }`}
                >
                  <td className="py-3.5 px-4 text-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelectRow(client.id)}
                      className="rounded border-[#3a3a3a] accent-[#1464f4] w-4 h-4 cursor-pointer"
                    />
                  </td>
                  <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                    {client.id}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full overflow-hidden relative border border-[#3a3a3a]">
                        <Image
                          src={client.avatar}
                          alt={client.name}
                          fill
                          sizes="28px"
                          className="object-cover"
                        />
                      </div>
                      <span className="font-semibold text-white">{client.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 font-medium whitespace-nowrap">
                    {client.email}
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 font-medium whitespace-nowrap">
                    {client.phone}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <button className="flex items-center gap-1.5 text-xs text-sky-400 font-semibold hover:underline">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{client.residenceCard}</span>
                    </button>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <button className="flex items-center gap-1.5 text-xs text-sky-400 font-semibold hover:underline">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{client.driverLicense}</span>
                    </button>
                  </td>
                  <td className="py-3.5 px-4 font-extrabold text-white whitespace-nowrap">
                    {client.points.toLocaleString()} pts
                  </td>
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => onEditClient(client)}
                        className="px-3 py-1 rounded-lg bg-[#2a2a2a] text-white font-bold text-[11px] hover:bg-[#333333] transition-all shadow-sm cursor-pointer"
                      >
                        {t("common.edit")}
                      </button>
                      <button
                        onClick={() => onDeleteClient(client.id)}
                        className="px-3 py-1 rounded-lg bg-rose-950/40 text-rose-400 border border-rose-900/40 font-bold text-[11px] hover:bg-rose-900/60 transition-all shadow-sm cursor-pointer"
                      >
                        {t("common.delete")}
                      </button>
                    </div>
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
