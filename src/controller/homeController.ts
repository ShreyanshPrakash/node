import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Homw / route");
});

router.get("/path", (req: Request, res: Response) => {
  res.send("path one route");
});

export const HomeRouter = router;
