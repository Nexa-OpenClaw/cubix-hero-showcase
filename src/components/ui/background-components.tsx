export const Component = () => {
  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Soft Blue Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, #3b82f6 0%, transparent 70%)`,
          opacity: 0.35,
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
};

export default Component;
