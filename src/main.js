import { customEE } from "./event-emitter";

const callback = function(num) {
  console.log(`From the imported module, ping #${num}`);
};

customEE
  .once("ping", () => console.log("Pinging started!"))
  .on("ping", callback)
  .on("ping", num => {
    if (num > 5) {
      customEE.removeListener("ping", callback);
    }
  });
