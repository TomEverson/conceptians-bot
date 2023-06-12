import express from "express";

const server = express();

server.all("/", (req, res) => {
  res.send("Bot is Running");
});

export function keepAlive() {
  server.listen(3000, () => {
    console.log("server is ready");
  });
}
