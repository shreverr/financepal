import app from "./app";
import logger from "./config/logger";
import swaggerDocs from "./config/swagger";
import { AppError } from "./lib/appError";
import fs from "fs";

logger.info("/////////////////////////////////////////////");
logger.info("/////////////////////////////////////////////");
logger.info("//                                         //");
logger.info("//         FinanacePal Web Server          //");
logger.info("//                                         //");
logger.info("/////////////////////////////////////////////");
logger.info("/////////////////////////////////////////////");

const port = process.env.PORT ?? 3000;

const tempStorageDir = process.env.TEMP_DIR;
if (!tempStorageDir) {
  throw new AppError(
    "environment variable not set", 
    500, 
    "TEMP_DIR not set", 
    false
  );
}
// ensure the temp storage directory exists
if (!fs.existsSync(tempStorageDir)) {
  fs.mkdirSync(tempStorageDir, { recursive: true })
}

const server = app.listen(port, () => {
  logger.info(`Server listening at http://localhost:${port}`);
  swaggerDocs(app);
});

process.on("uncaughtException", (err) => {
  // log the exception
  logger.fatal(err, "uncaught exception detected");
  // shutdown the server gracefully
  server.close(() => {
    process.exit(1); // then exit
  });

  // If a graceful shutdown is not achieved after 1 second,
  // shut down the process completely
  setTimeout(() => {
    process.abort(); // exit immediately and generate a core dump file
  }, 1000).unref();
  process.exit(1);
});
