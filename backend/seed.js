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
    },
    {
        img: "https://w0.peakpx.com/wallpaper/114/435/HD-wallpaper-gear-5-monkey-d-luffy-art-one-piece-thumbnail.jpg",
        desc: `Monkey D. Luffy, also known as "Straw Hat Luffy," is the protagonist of the popular manga and anime series One Piece. Luffy is a young and ambitious pirate who dreams of becoming the Pirate King by finding the legendary treasure known as One Piece. With his straw hat and a powerful crew known as the Straw Hat Pirates, Luffy sets out on a grand adventure across the vast and treacherous Grand Line.
    
        Luffy possesses the power of the Gomu Gomu no Mi, a Devil Fruit that grants him rubber-like abilities, making his body incredibly elastic. He can stretch his limbs to deliver powerful punches and kicks, making him a formidable fighter. Along his journey, Luffy encounters various enemies, fellow pirates, and government organizations, all while striving to protect his friends and achieve his ultimate goal.
    
        The world of One Piece is filled with colorful characters, epic battles, and a deep lore that captivates fans around the world. Luffy's unwavering determination, loyalty to his crew, and indomitable spirit make him a beloved and iconic character in the world of anime and manga.`
      },
      {
        img: "https://staticg.sportskeeda.com/editor/2023/07/35206-16893440521036-1920.jpg",
        desc: `Monkey D. Luffy is renowned for his trademark straw hat and a scar beneath his left eye. His crew includes a diverse group of individuals with unique abilities and dreams of their own. Together, they face formidable foes, explore mysterious islands, and uncover the mysteries of the Grand Line.
    
        As they sail towards their ultimate goal, Luffy and his crew form unbreakable bonds and forge unforgettable memories. Their adventures are filled with laughter, tears, and moments of pure excitement. One Piece has captured the hearts of fans for its compelling storytelling and intricate world-building.
    
        Join Monkey D. Luffy and the Straw Hat Pirates on their quest for the One Piece, and experience the thrill of an epic journey through a world filled with pirates, marines, and mythical creatures.`
      },
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

