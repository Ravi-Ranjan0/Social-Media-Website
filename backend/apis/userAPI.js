const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');

const { isLoggedIn } = require('../middlewares/authVerification');

router.post('/user/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        await User.register(new User({ username, email }), password);
        console.log("NEW USER REGISTERED!!!");
        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (err) {
        console.log(err);
        res.status(501).json({ success: false, message: err.message });
    }
});

router.post('/user/login', passport.authenticate('local'), (req, res) => {
    console.log(req.user);
    res.json({ success: true, message: 'User logged in successfully' });
});

router.get('/user/logout', isLoggedIn, (req, res) => {
    req.logout();
    res.json({ success: true, message: 'User logged out successfully' });
});

router.patch('/user/update', isLoggedIn, async (req, res) => {
    try {
        const userId = req.user._id;
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { profilePicture: req.body.profilePicture, bio: req.body.bio },
            { new: true }
        );
        res.json({ success: true, user: updatedUser });
    } catch (error) {
        res.json({ success: false, message: 'Error updating profile' });
    }
});

router.post('/user/follow/:userId', isLoggedIn, async (req, res) => {
    try {
        const userId = req.user._id;
        const targetUserId = req.params.userId;

        await User.findByIdAndUpdate(userId, { $addToSet: { following: targetUserId } });
        await User.findByIdAndUpdate(targetUserId, { $addToSet: { followers: userId } });

        res.json({ success: true, message: 'Followed successfully' });
    } catch (error) {
        res.json({ success: false, message: 'Error following user' });
    }
});

module.exports = router;
