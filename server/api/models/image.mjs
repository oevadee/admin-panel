import mongoose from 'mongoose';

const imageSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image: { type: String, required: true },
});

export default mongoose.model('Image', imageSchema);