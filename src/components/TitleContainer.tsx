export default function TitleContainer({ title, children }) {
  return (
    <>
      <div className="titleContainer border border-gray-500 border-x-0 border-t-0 flex justify-between items-start">
        <h1 className="text-3xl text-bold font-bold">{title}</h1>
        {children}
      </div>
    </>
  );
}
