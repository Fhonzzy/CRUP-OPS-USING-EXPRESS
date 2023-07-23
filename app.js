const express = require("express");
const app = express();
const port = 5000;
const tasks = require("./routes/task");
require("dotenv").config();
const connectDb = require("./db/connect");
const notFound = require("./middleware/notFound");

app.use(express.json());

app.use("/api/v1/task", tasks);

app.use(notFound);

const startApp = async () => {
	try {
		await connectDb(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`Server is listening on port ${port}...`);
		});
	} catch (error) {
		console.log(error);
	}
};

startApp();
