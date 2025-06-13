import { Router } from "express";
import postController from "../Controllers/postController.js"

const router = Router();

router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);

router.get('/:id', postController.getPostById);
router.patch('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

export default router;
