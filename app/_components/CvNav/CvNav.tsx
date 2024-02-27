"use client";

import React from "react";
import toObject from "@/utils/toObject";
import capitalize from "@/utils/capitalize";

const CV_PARTS = ["presentation", "experiences"] as const;

export default function CvNav() {
  const [activeAnchors, setActiveAnchors] = React.useState(
    toObject(CV_PARTS, (el) => [el, false]),
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setActiveAnchors((s) => ({
          ...s,
          [entry.target.getAttribute("id")!]: entry.isIntersecting,
        }));
      });
    });

    const sections = document.querySelectorAll("section.cv-sections");
    sections.forEach((section) => {
      observer.observe(section);
    });

    () => observer.disconnect();
  }, []);

  return (
    <ul className="flex flex-col gap-4">
      {CV_PARTS.map((part) => (
        <li key={part}>
          <CvLink anchor={part} active={activeAnchors[part]}>
            {part}
          </CvLink>
        </li>
      ))}
    </ul>
  );
}

type CvLinkProps = {
  anchor: (typeof CV_PARTS)[number];
  active: boolean;
  children: (typeof CV_PARTS)[number];
};

function CvLink({ anchor, active, children }: CvLinkProps) {
  return (
    <a
      href={`#${anchor}`}
      className={active ? "font-bold" : ""}
      onClick={(e) => {
        e.preventDefault();

        document
          .querySelector(e.currentTarget!.getAttribute("href")!)
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }}
    >
      {capitalize(children)}
    </a>
  );
}
