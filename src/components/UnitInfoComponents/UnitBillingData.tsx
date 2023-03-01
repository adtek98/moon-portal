export default function UnitBillingData() {
  return (
    <>
      <div className="infoContainer col-span-4 lg:col-span-2">
        <div className="font-bold text-xl mb-3 mt-1 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end">
          <h1 className="">BILLING DATA</h1>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <p className="font-thin mx-2 mb-px">Days In Usage:</p>
            <div className="infoColumn">
              <p className="font-semibold mx-2">10 day/s</p>
            </div>
          </div>
          <div>
            <p className="font-thin mx-2 mb-px">Total Uptime:</p>
            <div className="infoColumn">
              <p className="font-semibold mx-2">923 mins</p>
            </div>
          </div>
          <div>
            <p className="font-thin mx-2 mb-px">Usage Styles:</p>
            <div className="infoColumn">
              <p className="font-semibold mx-2">???</p>
            </div>
          </div>
          <div>
            <p className="font-thin mx-2 mb-px">Last Updated:</p>
            <div className="infoColumn">
              <p className="font-semibold mx-2">1998/12/01</p>
              <button className="infoButton">Info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
