import mongoose from 'mongoose';

const formSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image: { type: String, required: true },
});

export default mongoose.model('Form', formSchema);