"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export function BlogSection() {
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
    <section id="blog" className="scroll-mt-[64px] py-10 px-5 theme-bg transition-colors duration-300">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-[22px] font-bold theme-text tracking-tight">
            {t("blog.header")}
          </h2>
          <Link
            href="#"
            className="text-[13px] font-medium text-slate-400 active:text-[#00a8ff]"
          >
            {t("blog.viewall")}
          </Link>
        </div>

        {/* Blog Post List */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div key={index} className="space-y-4 pt-1">
              <div className="flex items-start gap-4">
                {/* Date Badge */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800/60 rounded-xl px-3 py-2 text-center border border-slate-200 dark:border-slate-700">
                  <span className="text-[28px] font-extrabold text-[#00a8ff] leading-none">
                    {post.day}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400 mt-0.5">
                    {post.month}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-[16px] font-bold theme-text leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {post.meta}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <p className="text-[13px] theme-muted leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { BlogSection as MobileBlogSection };
