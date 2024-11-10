const Post = require("../models/postModel.js");

// Fetch all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error });
    }
};

// Save a new post
const savePost = async (req, res) => {
    const { title, content, category, date } = req.body;

    try {
        const newPost = new Post({ title, content, category, date });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({ message: "Error saving post", error });
    }
};

module.exports = { getPosts, savePost };
