import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sharedWith: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      // accessLevel: { type: String, enum: ['view', 'edit'], required: true }
    }
  ],
  createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now }
});

const Page = mongoose.model('Page', pageSchema);

export default Page;