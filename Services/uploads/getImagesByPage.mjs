import Image from '../../models/image.mjs';

const getImagesByPage = async (req, res) => {
    try {
        const { pageId } = req.params;
        if (!pageId) {
            return res.status(400).json({ error: 'Page ID is required' });
        }

        // Find all images linked to this pageId
        const images = await Image.find({ pageId });

        if (images.length === 0) {
            return res.json({ message: 'No images found for this page', images: [] });
        }

        res.json({ images });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default getImagesByPage;
