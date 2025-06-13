import Post from '../models/post.js';
import { isValidObjectId } from 'mongoose';



const createPost = async (req, res) => {
    try {
        const { body } = req;
        if (!body.title ) {
            return res.status(400).json({ message: "Title and description are required" });
        }
        const post = await Post.create({
            title: body.title,
            description: body.description,
        });
        res.status(201).json({
            status: 'success',
            message: "Post created successfully",
            data: post
        });

    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            status: 'success',
            message: "Posts fetched successfully",
            data: posts
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const post = await Post.findOne({ _id: id });

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json({
            status: 'success',
            message: "Post fetched successfully",
            data: post
        });


    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};



const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;

        if (!isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        if (!body) {
            return res.status(400).json({ message: "Request body is required" });
        }

       

        const updatePost = await Post.findByIdAndUpdate(
            id,
            {title:body.title , description:body.description},
            { new: true }
        );

        if (!updatePost) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json({
            status: 'success',
            message: "Post updated successfully",
            data: updatePost
        });

    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};


const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json({
            status: 'success',
            message: "Post deleted successfully",
            data: post
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};



export default { getAllPosts, getPostById , createPost , updatePost, deletePost};  