import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  pageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Page', required: true },
  publicId: { type: String, required: true }, // Cloudinary public_id (for deletion)
  imageUrl: { type: String, required: true } // Cloudinary URL
});

const Image = mongoose.model('Image', imageSchema);

export default Image;
