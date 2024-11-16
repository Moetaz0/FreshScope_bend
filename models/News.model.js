import mongoose from "mongoose"


var newsSchema = mongoose.Schema({
    
    content: String,
});
const News = mongoose.model('news', newsSchema);
export default News