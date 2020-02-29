import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

let count = 0;
setInterval(() => {
  eventEmitter.emit("ping", count);
  count++;
  if (count > 10) process.exit(0);
}, 2500);

export default eventEmitter;
