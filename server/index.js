import express from "express";
import userRoutes from "./routes/userRoute.js"
import connectDb from "./config/db.js";

const app = express();

connectDb();

app.use(express.json());

app.use("/api", userRoutes)

// app.get("/", (req, res) => {
//     res.send("Hello");
// })
app.listen(3000, () => {
    console.log("Server is on running port 3000");
})