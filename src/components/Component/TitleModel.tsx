export default function TitleModel({
  title,
  description,
}: {
  title: String;
  description: String;
}) {
  return (
    <div className="flex flex-col gap-6 md:gap-8 pt-16 pb-8 bg-white">
      <div className="font-bold text-2xl lg:text-3xl">{title}</div>
      <div className="text-gray-600">{description}</div>
    </div>
  );
}
