import mongoose from "mongoose"


var auteurSchema = mongoose.Schema({
    title :String,
    categorie: String,
    nomauteur: String,
    content: String,
    imageUrl: String,
    isPopular: Boolean,
    inSlide:    Boolean,
    isLie: Boolean,
    date: { type: Date, default: Date.now },
});
const Article = mongoose.model('Article', auteurSchema);
export default Article