import { Kafka } from "kafkajs";



export const kafka = new Kafka({
    brokers: ["192.168.1.100:9092"],
    clientId: "node-app",
});



export async function init(){
    const admin = kafka.admin();
    console.log("Connecting....");
    admin.connect();


    await admin.createTopics({
        topics: [{
            topic: "topic-node",
            numPartitions: 2,

        }]
    });

    console.log("Topic Created");

    await admin.disconnect();
    console.log("Admin disconnected");
}