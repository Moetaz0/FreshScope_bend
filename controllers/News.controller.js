import mongoose from "mongoose";
import News from "../models/News.model.js";

export const getNews = async (req, res) => {
  try {
    const cat = await News.find();

    res.status(200).json(cat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



export const createNews = async (req, res) => {
  const {  content } = req.body;

  const newNews = new News({
    
    content: content,
  });

  try {
    await newNews.save();

    res.status(201).json(newNews);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};



export const deleteNews = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas de auteur avec l'ID: ${id}`);

  await News.findByIdAndDelete(id);

  res.json({ message: "auteur supprimé avec succès." });
};
