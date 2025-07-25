import { kafka } from "./kafka.service";

export const produceToKafka = async (payload: string) => {
  const producer = kafka.producer();
  await producer.connect();

  await producer.send({
    topic: "topic-node",
    messages: [
      { partition: 0, key: "payload", value: JSON.stringify(payload) },
    ],
  });

  await producer.disconnect();
};
