import express from "express";
import getUsers from "../../controllers/users";
import { getPosts, getPost } from "../../controllers/posts";
const router = express.Router();

router.get("/users", getUsers);
router.get("/posts", getPosts);
router.get("/post/:id", getPost);

export default router;
