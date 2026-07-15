declare module "@/components/SideRays" {
  interface SideRaysProps {
    speed?: number;
    rayColor1?: string;
    rayColor2?: string;
    intensity?: number;
    spread?: number;
    origin?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    tilt?: number;
    saturation?: number;
    blend?: number;
    falloff?: number;
    opacity?: number;
    className?: string;
  }
  const SideRays: React.FC<SideRaysProps>;
  export default SideRays;
}
