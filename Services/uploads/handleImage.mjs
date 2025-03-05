import Image from '../../models/image.mjs';
import cloudinary from '../../config/cloudinary.mjs';

const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const { pageId } = req.body;
        if (!pageId) {
            return res.status(400).json({ error: 'Page ID is required' });
        }

        // Upload image to Cloudinary
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
                if (error) reject(error);
                else resolve(result);
            }).end(req.file.buffer);
        });

        // Store image details in MongoDB (Image collection)
        const newImage = new Image({
            pageId,
            publicId: result.public_id,
            imageUrl: result.secure_url
        });

        await newImage.save();

        res.json({ message: 'Image uploaded successfully', imageUrl: result.secure_url });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default uploadImage;
