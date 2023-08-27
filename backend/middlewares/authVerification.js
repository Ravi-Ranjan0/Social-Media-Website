module.exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.json({ success: false, message: 'User not logged-in' });
    }
}