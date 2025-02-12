const healthChecker = (req, res) => {
    // Add any business logic for health check here
    res.send('so...... Server is running!! Health is Good');
};

export default healthChecker;