require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  try {
    const token = req?.cookies?.accessToken;

    if (!token) {
      res.send({
        message: "jwt must be provided",
        status: "Unauthorized - Access denied",
        success: false,
      });

      return;
    }

    const verify = jwt.verify(token, process.env.JWT_SECRET);
    console.log(verify);

    const { isAdmin } = verify;

    if (isAdmin) {
      next();
    } else {
      res
        .status(403)
        .send({ success: false, message: "Forbidden - Access denied" });

      return;
    }
  } catch (error) {
    res.send({ status: false, message: error });
  }
};

module.exports = verifyJWT;
