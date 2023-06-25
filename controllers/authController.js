const bcrypt = require("bcrypt");
const User = require("../models/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username } = req.body;

  try {
    const duplicate = await User.findOne({ userName: username });

    if (duplicate) {
      return res.json({
        message: `User with username ${username} already exists`,
      });
    }

    const hashed = await bcrypt.hash(req.body.password, 10);

    const result = await User.create({
      userName: username,
      password: hashed,
      roles: {
        Admin: false,
      },
    });

    const { password, ...otherDetails } = result._doc;

    res.json({
      message: `User created with username ${result.userName}`,
      data: { ...otherDetails },
    });
  } catch (error) {
    res.send(error);
  }
};

const handleLogin = async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.username }).exec();

    if (!user) {
      res.json({
        message: "User not found",
      });
      return;
    }

    const isValidPass = await bcrypt.compare(
      req?.body?.password,
      user?.password
    );

    if (!isValidPass) {
      res.status(403).send({ success: false, message: "Wrong password" });
      return;
    } else {
      const { password, ...otherDetails } = user._doc;

      const token = await jwt.sign(
        {
          userName: user.userName,
          isAdmin: user.roles.Admin,
        },
        process.env.JWT_SECRET
      );

      res
        .cookie("accessToken", token, {
          httpOnly: true,
        })
        .json({
          message: "Login successful",
          data: { user: user.userName },
        });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  registerUser,
  handleLogin,
};
