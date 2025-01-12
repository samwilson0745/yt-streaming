import { connectToRabbitMQ } from './amqp';
import { app } from './app';

const start = async()=>{
    try{
        await connectToRabbitMQ();
        console.log("Connected to rabbit-mq")
    }catch(err){
        console.error(`Error while starting the server:${err}`)
    }

    app.listen(
        3000,
        ()=>{
            console.log("Service is running on port 3000!")
        }
    )

}

start()