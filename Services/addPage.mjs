import Page from '../Models/page.mjs';

const addPage = async (req, res) => {
    const { title, description, ownerId } = req.body;
  
    try {
      // Validate if the owner exists
      const owner = await User.findById(ownerId);
      if (!owner) {
        return res.status(404).json({ message: 'User not found' });
      }
      const newPage = new Page({
        title,
        description,
        ownerId,
        sharedWith: [], 
      });
  
      await newPage.save();
      res.status(201).json({ message: 'Page created successfully', page: newPage });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating page', error: err.message });
    }
  };

export default addPage;