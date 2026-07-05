type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-2 text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}