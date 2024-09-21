const { classes } = require("../Model/Class.js");
exports.userClass = async (req, res) => {
  try {
    const data = await classes.find();
     console.log(data)

    if (!data) {
      res.status(404).json({
        message: "Data Not Found",
        status: false,
      });
    } else {
      res.status(200).json({
        message: "Data Found Successfully",
        status: true,
        data: data,
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({
      message: "An error occurred",
      status: false,
      error: error.message,
    });
  }
};
