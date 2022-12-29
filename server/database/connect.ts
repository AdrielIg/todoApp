import { Pool } from "pg";
import keys from "../keys";

const pgClient = new Pool({
	user: keys.pgUser,
	host: keys.pgHost,
	database: keys.pgDatabase,
	password: keys.pgPassword,
	port: keys.pgPort as unknown as number,
});

pgClient.on("connect", client => {
	client
		.query("CREATE TABLE IF NOT EXISTS values (number INT)")
		.catch(err => console.log("PG ERROR", err));
});

export default pgClient;
