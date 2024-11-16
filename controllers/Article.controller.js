import mongoose from "mongoose";
import Article from "../models/Article.model.js";

export const getAuteurs = async (req, res) => {
  try {
    const cat = await Article.find();

    res.status(200).json(cat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAuteurByID = async (req, res) => {
  try {
    const cat = await Article.findById(req.params.id);

    res.status(200).json(cat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAuteur = async (req, res) => {
  const {  title, categorie, nomauteur, content, imageUrl, isPopular , inSlide } = req.body;

  const newAuteur = new Article({
    title: title,
    categorie: categorie,
    nomauteur: nomauteur,
    content: content,
    imageUrl: imageUrl,
    isPopular: isPopular,
    inSlide: inSlide,
  });

  try {
    await newAuteur.save();

    res.status(201).json(newAuteur);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateAuteur = async (req, res) => {
  const { id } = req.params;
  const { title, categorie, nomauteur, content, imageUrl , isPopular , inSlide } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas de auteur avec un id: ${id}`);

  const aut1 = {   _id: id ,title: title, categorie: categorie,nomauteur: nomauteur , content: content, imageUrl: imageUrl , isPopular: isPopular , inSlide: inSlide};

  await Article.findByIdAndUpdate(id, aut1);

  res.json(aut1);
};

export const deleteAuteur = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas de auteur avec l'ID: ${id}`);

  await Article.findByIdAndDelete(id);

  res.json({ message: "auteur supprimé avec succès." });
};
