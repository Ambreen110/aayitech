export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute left-1/2 top-[-250px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[170px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
    </>
  );
}