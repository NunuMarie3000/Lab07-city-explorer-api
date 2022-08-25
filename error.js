const errorFunc = (req, res, next) => {
    res.status(500).json({error: 'Something went wrong'});
    next();
}

module.exports = errorFunc