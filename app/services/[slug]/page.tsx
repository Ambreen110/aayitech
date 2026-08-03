import { notFound } from "next/navigation";

import { services } from "@/data/services";

import ServiceBackground from "@/components/sections/services/ServiceBackground";
import ServiceHero from "@/components/sections/services/ServiceHero";
import ServiceBenefits from "@/components/sections/services/ServiceBenefits";
import ServiceProcess from "@/components/sections/services/ServiceProcess";
import Technologies from "@/components/sections/services/Technologies";
import ProjectShowcase from "@/components/sections/services/ProjectShowcase";
import ServiceFAQ from "@/components/sections/services/ServiceFAQ";
import ServiceCTA from "@/components/sections/services/ServiceCTA";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <ServiceBackground />

      <ServiceHero
        badge={service.badge}
        title={service.title}
        highlight={service.highlight}
        description={service.description}
        icon={service.icon}
      />

      {service.benefits?.length ? (
        <ServiceBenefits
          title="What We Deliver"
          description="Professional solutions tailored to your business."
          benefits={service.benefits}
        />
      ) : null}

      {service.process?.length ? (
        <ServiceProcess
          title="Our Process"
          description="A proven process that delivers reliable results."
          steps={service.process}
        />
      ) : null}

      {service.technologies?.length ? (
        <Technologies
          title="Technologies We Use"
          description="Modern tools and platforms we work with."
          technologies={service.technologies}
        />
      ) : null}

      {service.projects?.length ? (
        <ProjectShowcase
          title="Recent Projects"
          description="Examples of our work."
          projects={service.projects}
        />
      ) : null}

      {service.faqs?.length ? (
        <ServiceFAQ
          title="Frequently Asked Questions"
          faqs={service.faqs}
        />
      ) : null}

      {service.ctaTitle && service.ctaDescription ? (
        <ServiceCTA
          title={service.ctaTitle}
          description={service.ctaDescription}
        />
      ) : null}
    </main>
  );
}