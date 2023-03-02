export default function TitleContainer({ title, children }) {
  return (
    <>
      <div className="titleContainer flex justify-between items-start shadow-md">
        <h1 className="text-3xl text-bold font-bold">{title}</h1>
        {children}
      </div>
    </>
  );
}
