import mongoose from 'mongoose';
import express from 'express';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201);

    } catch (error) {
        res.status(409).json({message: error.message});
    }  
}

export const updatePost = async (req, res) =>{
    const {id: _id} = req.params;
    const post = req.body;  //this is the updated post received from the front-end

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("No post with this id")
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    res.json(updatedPost);
}

export const deletePost = async (req, res) =>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No post with this id")
    }

    await PostMessage.findByIdAndRemove(id);

    res.json({message: 'Post deleted successfully'});

}

export const likePost = async (req, res) =>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No post with this id")
    }

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount+1}, {new: true});

    res.json(updatedPost);

}