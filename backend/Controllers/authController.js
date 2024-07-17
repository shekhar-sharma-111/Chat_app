import bcrypt from "bcryptjs";
import { User } from "../Models/UserModel.js";
import generateToken from "../utils/generateToken.js";

// get user
const getuser = async (req, res) => {
  try {
    const { userId } = req.query
    const user = await User.findOne({ _id: userId });

    console.log(user);
    if (!user) return res.status(400).json({ message: "User not found" });
    res.json({ user });
  } catch (error) {
    console.log(error);
  }
};

// login function
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // const username="shekhar123"
    // const password="hello"
    const user = await User.findOne({ username: username });
    //   console.log(req.body)
    console.log(user);
    if (!user) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, user?.password || "");
    console.log(isMatch);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    generateToken(user._id, res);
    isMatch && res.json({ user });
  } catch (error) {
    console.log(error);
  }
};

// signup function
const signup = async (req, res) => {
  console.log(req.body);
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    const gen = gender != "others" ? (gender == "male" ? "boy" : "girl") : "";
    // https://avatar-placeholder.iran.liara.run/
    const image = `https://avatar.iran.liara.run/public/${gen}?username=${username}`;
    if (password !== confirmPassword) {
      throw new Error("passwords do not match");
    }

    const userCheck = await User.findOne({ username });
    if (userCheck) {
      return res.status(400).json({ error: "username already used" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({
      fullName,
      username,
      password: hash,
      gender,
      profilePic: gen && image,
    });
    await generateToken(user._id, res); //generate token and set cookie
    console.log(user._id);
    if (user) {
      res.status(201).json({ message: "user registered", token: "jwt token" });
    }
  } catch (error) {
    console.log(error);
    res.send("error:" + error);
  }
};
const logout = (req, res) => {
  res.send("logout route");
};
export { login, signup, logout,getuser };
