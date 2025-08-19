import mongoose from 'mongoose';

const TopicSchema = new mongoose.Schema({
    label: { type: String, required: true },
});

const Topic =  mongoose.model('Topic', TopicSchema);
export default Topic;
