import express from "express";
import pgClient from "../../database/connect";
const router = express.Router();

router.route("/").get((req, res) => {
	res.send("Todo ok");
});

router.route("/values/all").get(async (req, res) => {
	const values = await pgClient.query("SELECT * FROM values");

	res.send({ data: values });
});

router.route("values").post(async (req, res) => {
	if (req.body.value) res.send({ working: false });
	pgClient.query("INSERT INTO values(number) VALUES($1)", [req.body.value]);
	res.send({ working: true });
});

export default router;
