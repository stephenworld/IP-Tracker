export default function IPInfo({ title, content }) {
  return (
    <div className="w-full text-center md:text-left">
      <p className="uppercase text-xs text-gray-500">{title}</p>
      <h2 className="font-bold">{content}</h2>
    </div>
  );
}
