'use server'

import Exercise from "@/models/Exercise"
import connectDB from "./db"


export const getExercises = async ()=>{
    try{
        await connectDB()
        const exercises = await Exercise.find()
        return exercises
    }catch(error){
        throw new Error("Failed to Get Exercises" + error)
    }
}

//GET SINGLE EXERCISE
export const getSingleExercise = async(id)=>{
    try {
        await connectDB()
        const exercise = await Exercise.findById(id)
        return exercise;
    } catch (e) {
        console.log(e)
    }
}