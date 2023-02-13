import { UnitItem } from "./UnitItem";

export const UnitContainer = ({ units }) => {
  return (
    <>
      <div className="max-h-full overflow-auto ">
        <div className="lg:w-10/12 mx-auto lg:p-3">
          <ul>
            <UnitItem units={units} />
          </ul>
        </div>
      </div>
    </>
  );
};
