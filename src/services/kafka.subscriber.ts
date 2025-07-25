import { kafka } from "./kafka.service";

export const subscribeToKafka = async () => {
  const consumer = kafka.consumer({
    groupId: "userId",
  });

  await consumer.connect();

  await consumer.subscribe({
    topics: ["topic-node"],
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(topic, message.value?.toString());
    },
  });

};
