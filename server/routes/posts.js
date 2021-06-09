//Any routes related to creating/updating/deleting posts

import express from 'express';
import {getPosts, createPost} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts)
router.post('/', createPost)

export default router;

