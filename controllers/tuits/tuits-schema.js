import mongoose from 'mongoose';

const tuitsSchema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislliked: Boolean,
    dislikes: Number,
}, {collection: 'tuits'});

export default tuitsSchema;

