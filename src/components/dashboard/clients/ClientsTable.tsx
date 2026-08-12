"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileText, ArrowUpDown } from "lucide-react";
import { ClientModel } from "@/domain/models";
import { useTheme } from "@/components/theme-provider";

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
  const { theme } = useTheme();
  const [selectedIds, setSelectedIds] = useState<string[]>(["CLT-003", "CLT-004"]); // Charlie Davis & Diana White checked by default matching mockup

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
      <div className="theme-card p-12 rounded-2xl border text-center space-y-2">
        <p className="text-sm font-bold theme-text">No clients found</p>
        <p className="text-xs theme-muted">Try adjusting your search query.</p>
      </div>
    );
  }

  return (
    <div className="theme-card rounded-2xl border shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
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
              <th className="py-3.5 px-4 w-10 text-center">
                <input
                  type="checkbox"
                  checked={selectedIds.length === clients.length && clients.length > 0}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 rounded border-slate-300 text-[#00a8ff] focus:ring-[#00a8ff] cursor-pointer"
                />
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Client</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Phone</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Address</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Documents</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span>Points</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
              <th className="py-3.5 px-4 text-center">
                <div className="flex items-center justify-center gap-1.5 cursor-pointer">
                  <span>Action</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#00a8ff]" />
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Body Rows with Ultra-Thin Separator Lines */}
          <tbody className="divide-y divide-slate-100/40 dark:divide-slate-800/30 font-medium">
            {clients.map((client) => {
              const isChecked = selectedIds.includes(client.id);

              return (
                <tr
                  key={client.id}
                  className={`transition-colors ${
                    isChecked
                      ? "bg-slate-50/90 dark:bg-slate-800/50"
                      : "hover:bg-slate-50/50 dark:hover:bg-slate-800/30"
                  }`}
                >
                  {/* Checkbox Cell */}
                  <td className="py-3.5 px-4 text-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleSelectRow(client.id)}
                      className="w-4 h-4 rounded border-slate-300 text-[#00a8ff] focus:ring-[#00a8ff] cursor-pointer"
                    />
                  </td>

                  {/* Client Info Cell (Avatar + Name + Email) */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                        <Image
                          src={client.avatar}
                          alt={client.name}
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <p className="font-extrabold theme-text text-xs leading-snug">{client.name}</p>
                        <p className="text-[10px] theme-muted font-semibold leading-tight truncate">
                          {client.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Phone Cell */}
                  <td className="py-3.5 px-4 theme-text font-bold whitespace-nowrap">
                    {client.phone}
                  </td>

                  {/* Address Cell */}
                  <td className="py-3.5 px-4 theme-text font-semibold whitespace-nowrap">
                    {client.address}
                  </td>

                  {/* Documents Cell (Bold Cyan File Text Icons + High-Contrast Bold Text) */}
                  <td className="py-3.5 px-4">
                    <div className="space-y-1 text-[11px]">
                      <div className="flex items-center gap-1.5 theme-text font-bold">
                        <FileText className="w-3.5 h-3.5 text-[#00a8ff] shrink-0 stroke-[2.5]" />
                        <span className="truncate">{client.residenceCard}</span>
                      </div>
                      <div className="flex items-center gap-1.5 theme-text font-bold">
                        <FileText className="w-3.5 h-3.5 text-[#00a8ff] shrink-0 stroke-[2.5]" />
                        <span className="truncate">{client.driverLicense}</span>
                      </div>
                    </div>
                  </td>

                  {/* Points Cell */}
                  <td className="py-3.5 px-4 theme-text font-black text-center sm:text-left">
                    {client.points}
                  </td>

                  {/* Action Cell (Dark Navy Edit with White text & Delete with Red text) */}
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => onEditClient(client)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#0f172a] text-white font-bold text-[11px] hover:bg-slate-800 transition-all shadow-sm text-center"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDeleteClient(client.id)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#0f172a] text-[#ff3366] font-bold text-[11px] hover:bg-rose-950/40 hover:text-rose-400 transition-all shadow-sm text-center"
                      >
                        Delete
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
