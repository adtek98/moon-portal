import units from "../../../lib/data/Units";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      // Do something with the request data...
      res.status(200).json(req.body);
      break;

    case "GET":
      // Do something to fetch data from the server...

      res.status(200).json(units);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
