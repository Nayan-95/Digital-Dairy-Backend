import Page from '../Models/page.mjs'

const getOwnPages = async (req, res) => {
    const { userId } = req.params;

    try {
        const pages = await Page.find({ ownerId: userId });
        res.status(200).json({ pages });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching pages', error: err.message });
    }
};

export default getOwnPages;