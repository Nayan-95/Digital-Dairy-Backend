import Image from '../../models/image.mjs';
import cloudinary from '../../config/cloudinary.mjs';

const deleteImage = async (req, res) => {
    try {
        const { imageId } = req.params;
        if (!imageId) {
            return res.status(400).json({ error: 'Image ID is required' });
        }
        const image = await Image.findById(imageId);
        if (!image) {
            return res.status(404).json({ error: 'Image not found' });
        }

        // Delete from Cloudinary
        await cloudinary.uploader.destroy(image.publicId);

        // Delete from MongoDB
        await Image.findByIdAndDelete(imageId);

        res.json({ message: 'Image deleted successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default deleteImage;
