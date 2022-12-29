import cors from "cors";
import v1RouterUser from "./v1/routes/user";
import express from "express";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("v1", v1RouterUser);

app.get("/", (req, res) => {
	res.send("HI");
});

app.listen(PORT, () => {
	console.log("Listening on Port" + PORT);
});
