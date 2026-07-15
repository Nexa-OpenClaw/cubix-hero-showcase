export const Component = () => {
  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Soft Yellow Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, #FFE066 0%, transparent 70%)`,
          opacity: 0.55,
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
};

export default Component;
