"use client";

import React from "react";
import { Clock, Euro } from "lucide-react";


type VideoSource =
  | { kind: "iframe"; src: string; title?: string }
  | { kind: "video"; src: string; poster?: string };

interface TestimonialItem {
  name: string;
  title?: string;
  description: string;
  metricTime: string;
  metricMoney: string;
  video: VideoSource;
}

interface TestimonialsProps {
  heading?: string;
  gallery?: string[];
  ozren: TestimonialItem;
  djordje: TestimonialItem;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-xl px-3 py-1 text-sm font-semibold bg-white/5 border border-white/10">
      {children}
    </span>
  );
}

function VideoBox({ data }: { data: VideoSource }) {
  return (
    <div className="relative w-full aspect-video rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      {data.kind === "iframe" ? (
        <iframe
          src={data.src}
          title={data.title ?? "testimonial-video"}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={data.src}
          poster={data.poster}
          controls
          preload="metadata"
        />
      )}
    </div>
  );
}

function PersonBlock({ item }: { item: TestimonialItem }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
      {/* TEXT */}
      <div>
        <h3 className="text-6xl font-bold font-stencil tracking-wide">{item.name}</h3>
        {item.title ? <p className="mt-1 text-muted/90">{item.title}</p> : null}
        <p className="mt-3 text-lg text-muted leading-relaxed">
          {item.description}
        </p>

        <div className="mt-4 flex items-center gap-3 flex-wrap">
          <Badge>
  <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
  {item.metricTime}
</Badge>

<Badge>
  <Euro className="h-4 w-4 text-primary" aria-hidden="true" />
  {item.metricMoney}
</Badge>

        </div>
      </div>

      {/* VIDEO */}
      <VideoBox data={item.video} />
    </div>
  );
}

export default function Testimonials({
  heading = "Pogledaj šta kažu oni koji su mislili da je ovo bullshit program:",
  gallery = [],
  ozren,
  djordje,
}: TestimonialsProps) {
  return (

    <section id="rezultati" className="scroll-mt-28 bg-bg mx-auto max-w-8xl px-4 sm:px-6 lg:px-16 py-16 lg:py2">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-stencil leading-tight">{heading}</h2>

        {gallery.length > 0 && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {gallery.slice(0, 3).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`chat-${i}`}
                className="rounded-xl border border-white/10 bg-white/5 object-cover w-full h-full sm:h-auto"
              />
            ))}
          </div>
        )}

        <div className="mt-10">
          <PersonBlock item={ozren} />
        </div>

        <div className="mt-12">
          <PersonBlock item={djordje} />
        </div>
      </div>
    </section>
  );
}
