interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  
  title,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg text-white/60">
        {subtitle}
      </p>
    </div>
  );
}