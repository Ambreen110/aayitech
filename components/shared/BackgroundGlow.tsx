export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute left-1/2 top-[-220px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/8 blur-[120px]" />

      <div className="absolute left-0 top-1/2 h-64 w-64 rounded-full bg-primary/6 blur-[100px]" />
    </>
  );
}