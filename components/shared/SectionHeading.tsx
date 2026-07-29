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
      <h2 className="text-4xl font-bold text-foreground md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}