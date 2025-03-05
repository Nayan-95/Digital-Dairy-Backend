import Page from '../../Models/page.mjs';
import date from 'date-and-time';
import jwt from 'jsonwebtoken';

const addPage = async (req, res) => {
  const { title, description } = req.body;
  ////var token = req.headers.authorization;
  // if (!token || !token.startsWith("Bearer ")) {
  //   return res.status(401).json({ message: "Authorization token is missing or invalid" });
  // }
  //token = token.split(" ")[1];

  const now = new Date();
  //const user_is = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
  //const ownerId = user_is.id;
  const ownerId = "65fa3b2a1a3e4a6e9c0b5678";

  try {
    const newPage = new Page({
      title,
      description,
      ownerId,
      sharedWith: [],
      createdAt: date.format(now, 'ddd, MMM DD YYYY'),
    });

    await newPage.save();
    res.status(200).json({ message: 'Page created successfully', page: newPage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating page', error: err.message });
  }
};

export default addPage;