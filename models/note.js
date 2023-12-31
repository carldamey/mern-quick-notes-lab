const mongoose = require("mongoose")
const Schema = mongoose.Schema
const User = require("./user")

const noteSchema = new Schema(
	{
		text: {
			type: String,
			required: true,
		},
		user: {
			type: mongoose.types.ObjectId(),
			required: true,
		},
	},
	{
		timestamps: true,
	},
)

module.exports = mongoose.model("Note", noteSchema)