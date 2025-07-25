import { Router, Request, Response } from "express";
import { produceToKafka } from "../services/kafka.producer";
import { subscribeToKafka } from "../services/kafka.subscriber";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Homw / route");
});

router.get("/path", (req: Request, res: Response) => {
  res.send("path one route");
});

router.get("/publish", async (req: Request, res: Response) => {
  res.json({ message: "triggered" });

  await produceToKafka("Hello Kafka");
  await produceToKafka("Hello Kafka");
  await subscribeToKafka();
});

router.get("/subscribe", (req: Request, res: Response) => {});

export const HomeRouter = router;
