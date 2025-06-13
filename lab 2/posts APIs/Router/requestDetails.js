const requestDetails = (req, res, next) => {
    const route = req.originalUrl;
    const method = req.method;
    const timestamp = new Date().toISOString();    next();
};

export default requestDetails; 