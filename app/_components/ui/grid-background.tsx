const GridBackground=({children}:{children: React.ReactNode})=> {
  return (
    <div className="h-[80vh] w-full bg-dot-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}

export default GridBackground;