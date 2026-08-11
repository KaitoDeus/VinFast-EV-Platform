"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export function DesktopBlogSection() {
  const { t } = useLanguage();

  const posts = [
    {
      day: t("blog.item1.day"),
      month: t("blog.item1.month"),
      title: t("blog.item1.title"),
      meta: t("blog.item1.meta"),
      excerpt: t("blog.item1.excerpt"),
      image: "/section/gallery_4.jpg",
    },
  ];

  return (
    <section id="tin-tuc" className="scroll-mt-[80px] py-16 theme-bg transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-[28px] font-bold theme-text tracking-tight">
            {t("blog.header")}
          </h2>
          <Link
            href="#"
            className="text-[14px] font-medium text-slate-400 hover:text-[#00a8ff] transition-colors"
          >
            {t("blog.viewall")}
          </Link>
        </div>

        {/* Blog Post List */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-8 items-center pt-2 pb-6 border-b border-slate-200/60 dark:border-slate-800/60"
            >
              {/* Date Column */}
              <div className="col-span-2 flex flex-col items-center justify-center border-r border-slate-200 dark:border-slate-800 pr-6 text-center">
                <span className="text-[42px] font-extrabold text-[#00a8ff] leading-none">
                  {post.day}
                </span>
                <span className="text-[13px] font-medium text-slate-400 mt-1">
                  {post.month}
                </span>
              </div>

              {/* Text Details Column */}
              <div className="col-span-7 space-y-2 pr-4">
                <h3 className="text-[18px] font-bold theme-text hover:text-[#00a8ff] transition-colors cursor-pointer leading-snug">
                  {post.title}
                </h3>
                <p className="text-[12px] text-slate-400">
                  {post.meta}
                </p>
                <p className="text-[14px] theme-muted leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Image Column */}
              <div className="col-span-3">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
