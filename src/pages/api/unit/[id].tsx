import units from "../../../../lib/data/Units";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      // Do something with the request data...
      const newUnit = req.body;

      const index = units.findIndex((x) => x.serialNumber === req.query.id);
      units[index] = newUnit;
      res.status(200).json(units[index]);
      break;

    case "GET":
      // Do something to fetch data from the server...
      const unit = units.find((x) => x.serialNumber === req.query.id);

      res.status(200).json(unit);
      break;

    default:
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
