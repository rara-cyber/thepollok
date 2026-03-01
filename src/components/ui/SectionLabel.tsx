interface SectionLabelProps {
  children: string;
  light?: boolean;
}

export default function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span
        className={`block w-8 h-px ${light ? "bg-earth-300" : "bg-earth-400"}`}
      />
      <span
        className={`font-serif text-xs tracking-[0.2em] uppercase ${
          light ? "text-earth-300" : "text-earth-700"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
