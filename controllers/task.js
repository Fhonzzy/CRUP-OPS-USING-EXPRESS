const Tasks = require("../models/tasks");

const getTask = async (req, res) => {
	try {
		const task = await Tasks.find({});
		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const createTask = async (req, res) => {
	try {
		const task = await Tasks.create(req.body);
		res.status(201).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const getSingleTaskByID = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Tasks.findOne({ _id: taskID });
		if (!task) {
			res.status(400).json({ msg: "ID not found" });
		}
		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const updateTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Tasks.findOneAndUpdate({ _id: taskID }, req.body, {
			new: true,
			runValidators: true,
		});
		if (!task) {
			res.status(400).json({ msg: "ID not found" });
		}
		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const deleteTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Tasks.findOneAndDelete({ _id: taskID });
		if (!task) {
			res.status(404).json({ msg: "ID not found" });
		}
		res
			.status(200)
			.json({ msg: `ID ${taskID} have been successfully deleted` });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

module.exports = {
	getTask,
	createTask,
	deleteTask,
	getSingleTaskByID,
	updateTask,
};
