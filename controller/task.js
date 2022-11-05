
const performOperation = require("../utils/performOperation");

module.exports.calculate = async (req, res) => {
  try {
    // const slackUsername = "Olaoye Kayode";

    // console.log(req.body);
    const operation_type = req.body.operation_type;
    const x = Number(req.body.x);
    const y = Number(req.body.y);

    // console.log(operation_type);

    if (
      operation_type === "addition" ||
      operation_type === "subtraction" ||
      operation_type === "multiplication"
    ) {
      console.log(true);
      let result = performOperation(operation_type, x, y);
      console.log(result);

      return res.status(200).json({
        slackUsername: "Olaoye Kayode",
        result: result.results,
        operation_type: result.operation_type,
      });
    } else {
      res.status(400).json({ errors: { msg: "Something went wrong." } });
    }
  } catch (err) {
    res.status(400).json({ errors: { msg: "Something went wrong." } });
  }
};