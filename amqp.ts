import amqp from 'amqplib';

export const connectToRabbitMQ = async () => {
  try {
    // Connect to RabbitMQ server
    const connection = await amqp.connect('amqp://localhost:5672');

    // Create a channel
    const channel = await connection.createChannel();

    // Define the queue you want to connect to
    const queue = 'video_processing';

    // Assert the queue into existence (idempotent)
    await channel.assertQueue(queue, {
      durable: true, // Makes sure the queue survives server restarts
    });

    console.log(`Connected to RabbitMQ and queue '${queue}' asserted successfully.`);

    // Your further logic here...

    // Remember to handle closing the connection and channel when appropriate
  } catch (error) {
    console.error('Failed to connect to RabbitMQ', error);
  }
};