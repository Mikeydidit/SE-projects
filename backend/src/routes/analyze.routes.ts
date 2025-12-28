import { Router } from "express";
import { analyzeProperty } from "../controllers/analyze.controller";

const router = Router();  
router.post("/", analyzeProperty);

export default router;      