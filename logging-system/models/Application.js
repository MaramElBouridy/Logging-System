import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true, 
    match: [/^\S+$/, "No whitespaces allowed"] 
  },
  createdAt: { type: Date, default: Date.now },
  developer: { type: mongoose.Schema.Types.ObjectId, ref: "Developer" }
});

export default mongoose.model("Application", applicationSchema);
