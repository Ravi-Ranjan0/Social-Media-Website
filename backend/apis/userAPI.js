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

// following user 
router.get('/user/:userID/follow/:followingID', async (req, res) => {
    try {
        const { userID, followingID } = req.params;

        const currentUser = await User.findById(userID);
        const followingUser = await User.findById(followingID);

        if (!currentUser || !followingUser) {
            return res.status(404).send("User not found");
        }

        // Check if the users are already following each other
        if (
            currentUser.following.includes(followingID) &&
            followingUser.followers.includes(userID)
        ) {
            return res.status(400).send("Users are already following each other");
        }

        // Use $addToSet to prevent duplicate entries in arrays
        currentUser.following.addToSet(followingID);
        followingUser.followers.addToSet(userID);

        await currentUser.save();
        await followingUser.save();

        res.status(201).send("Followed user successfully!!!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});


// finding user if exist
router.get('/user/search', async (req, res) => {
    const { username } = req.query;

    const allUsers = await User.find({});

    const users = allUsers.filter((user) => user.username.includes(username));

    res.send(users);

})


module.exports = router;
