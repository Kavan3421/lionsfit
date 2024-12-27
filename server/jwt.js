import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
// Secret key (used to sign the token)
// const secretKey = "d28e5f60d826d9977aac6b96eb966888257354cd771cb847579c80d684742f60"; // Replace with a secure key

// // Payload data (data you want to include in the token)
// const payload = {
//   id: "kavan123", // Example user ID
//   email: "kavanpatel4321@gmail.com", // Example email
// };

// // Token options (e.g., expiration time)
// const options = {
//   expiresIn: "9999 years", // Token validity (e.g., 1 hour)
// };

// // Generate the token
// const token = jwt.sign(payload, secretKey, options);

// console.log("Generated JWT:", token);

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmQ3MjI2MzQ3YWM2ZTgwNmI4MjcyNyIsImlhdCI6MTczNTIyNTg5NCwiZXhwIjozMTcyNzk2NjgyOTR9._5XRT-Aav7tvoEJC-capxVvubksjTX2kgkoDZ363vrQ";

const decode = jwt.verify(token, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImthdmFuMTIzIiwiZW1haWwiOiJrYXZhbnBhdGVsNDMyMUBnbWFpbC5jb20iLCJpYXQiOjE3MzUyMjU0NDgsImV4cCI6MzE3Mjc5NjY3ODQ4fQ.OuEhbgJbTv7FqnYnHTgRkyHuUGbGyGIObLoBkL725n0");
console.log(decode);
