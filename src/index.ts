import * as dotenv from "dotenv";
import mongo from './db/mongoose';
import server from './server';

dotenv.config();
if (!process.env.PORT) {
  console.log(`Error to get ports`);
    process.exit(1);
 }
const PORT: number = parseInt(process.env.PORT as string, 10);

//Load app only if db is alive
mongo.connectMongoDB(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASS as string).
then(() => {
  //Start Express Server
  server.startServer(PORT);
}).catch((error: Error) => {
  console.log("Cannot connect to database");
});
