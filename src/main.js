import eventEmitter from "./event-emitter";

const cb = function(num) {
  console.log(`From the imported module, ping #${num}`);
};

eventEmitter
  .once("ping", () => console.log("Pinging started!"))
  .on("ping", cb)
  .on("ping", num => {
    if (num > 5) {
      eventEmitter.removeListener("ping", cb);
    }
  });
