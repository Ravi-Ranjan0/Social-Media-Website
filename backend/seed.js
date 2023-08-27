const Post = require('./models/Post');
const mongoose = require('mongoose');

const dummyPost = [
    {
        img: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SXJvbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc: 'Tony Stark is the wealthy son of industrialist and weapons manufacturer Howard Stark and his wife, Maria'
    },
    {
        img: 'https://images.unsplash.com/photo-1536895878856-6738f6d20051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc: 'Thor (from Old Norse: Þórr) is a prominent god in Germanic paganism. In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of humankind, hallowing, and fertility.'
    },
    {
        img: 'https://images.unsplash.com/photo-1624213111452-35e8d3d5cc18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwdGFpbiUyMGFtZXJpY2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        desc: 'Captain America: The First Avenger. If you want to watch all the Marvel movies in chronological order then you have to start with Captain America: The First Avenger.'
    },
    {
        img: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SXJvbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc: 'Tony Stark is the wealthy son of industrialist and weapons manufacturer Howard Stark and his wife, Maria'
    },
    {
        img: 'https://images.unsplash.com/photo-1536895878856-6738f6d20051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc: 'Thor (from Old Norse: Þórr) is a prominent god in Germanic paganism. In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of humankind, hallowing, and fertility.'
    },
    {
        img: 'https://images.unsplash.com/photo-1624213111452-35e8d3d5cc18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwdGFpbiUyMGFtZXJpY2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        desc: 'Captain America: The First Avenger. If you want to watch all the Marvel movies in chronological order then you have to start with Captain America: The First Avenger.'
    }
];


dbURL = 'mongodb://127.0.0.1:27017/social-media-app'
mongoose.connect(dbURL)
    .then(console.log('DB CONNECTED'))
    .catch((err) => { console.log(err) });

async function addDummyPost(dummyPost) {
    await Post.insertMany(dummyPost).
        then(() => { console.log("DB SEEDED") }).
        catch((e) => { console.log(e.message) });
}

addDummyPost(dummyPost);

