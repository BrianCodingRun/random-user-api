import express from "express";
import { getRandomUser } from "../controllers/user.controller.js";
import { addUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getRandomUser);
router.post("/", addUser);

export default router;
