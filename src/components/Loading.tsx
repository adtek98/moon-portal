export default function Loading() {
  return (
    <>
      <div className="select-none">
        <img
          unselectable="on"
          className="m-auto h-full noselect"
          src={"/Spinner.svg"}
          alt={""}
          height={200}
          width={200}
        />
      </div>
    </>
  );
}
