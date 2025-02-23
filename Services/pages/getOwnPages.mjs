import Page from '../../Models/page.mjs'

const getOwnPages = async (req, res) => {
    const token = req.headers.authorization;
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token is missing or invalid' });
    }
    const userId = jwt.verify(token.split(' ')[1], process.env.ACCESS_SECRET_KEY).id;

    try {
        const pages = await Page.find({ ownerId: userId });
        res.status(200).json({ pages });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching pages', error: err.message });
    }
};

export default getOwnPages;