import Page from '../../Models/page.mjs'
const getSharedPages = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const pages = await Page.find({ "sharedWith.userId": userId });
      res.status(200).json({ pages });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching shared pages', error: err.message });
    }
  };

  export default getSharedPages;    