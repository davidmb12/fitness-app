import mongoose from 'mongoose';


const ExerciseSchema = new mongoose.Schema({
    name: String,
    muscle: String,
    reps: Number,
    sets: Number,
    type:String,
    rating: Number,
    mood: String,
    notes: String
})

export default mongoose?.models?.Exercise || mongoose.model("Exercise",ExerciseSchema)