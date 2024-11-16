import mongoose from "mongoose"


var auteurSchema = mongoose.Schema({
    title :String,
    categorie: String,
    nomauteur: String,
    content: String,
    imageUrl: String,
    isPopular: Boolean,
    inSlide:    Boolean,
});
const Article = mongoose.model('Article', auteurSchema);
export default Article