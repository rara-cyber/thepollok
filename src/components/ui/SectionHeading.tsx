interface SectionHeadingProps {
  children: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  children,
  light,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`font-serif font-light text-3xl md:text-5xl lg:text-6xl leading-tight ${
        light ? "text-earth-100" : "text-earth-800"
      } ${className}`}
    >
      {children}
    </h2>
  );
}
