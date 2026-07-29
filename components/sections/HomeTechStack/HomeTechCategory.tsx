"use client";

import HomeTechCard from "./HomeTechCard";

interface Props {
  category: string;
  technologies: {
    name: string;
    icon: any;
  }[];
}

export default function HomeTechCategory({
  category,
  technologies,
}: Props) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-foreground">
        {category}
      </h3>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {technologies.slice(0, 4).map((tech) => (
          <HomeTechCard
            key={tech.name}
            {...tech}
          />
        ))}
      </div>
    </div>
  );
}