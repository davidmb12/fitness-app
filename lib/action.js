'use server'
import connectDB from "./db"
import Exercise from "@/models/Exercise"
import {revalidatePath} from 'next/cache'
import {redirect} from "next/navigation"

export const addExercise = async(formData)=>{
    const {name,muscle,reps,sets, rating,notes,mood} =Object.fromEntries(formData)
    console.log(formData)
    try{
        await connectDB()
        const newExercise = new Exercise({name,muscle,reps,sets,rating,notes,mood})
        await newExercise.save()
    }catch(e){
        throw new Error("Failed to add exercise"+e)
    }
    revalidatePath("/dashboard")
    redirect("/dashboard")
}

export const deleteExercise = async(FormData)=>{
    const {id} = Object.fromEntries(FormData)
    await connectDB()
    try{
        await Exercise.findByIdAndDelete(id)
    }catch(e){
        console.log(e)
    }
    revalidatePath("/")

}

//UPDATE SINGLE EXERCISE
export const updateExercise = async(formData)=>{
    const {id,name,duration,reps,sets,rating,notes,mood} =Object.fromEntries(formData)
    await connectDB()
    try {
        const updateFields = {
            name,duration,rating,calories,notes,mood
        }
        Object.keys(updateFields).forEach((key)=>(updateFields[key] === ""  || undefined) &&delete updateFields[key])
        await Exercise.findByIdAndUpdate(id,updateFields)
    } catch (e) {
        throw new Error("Failed to update exercise")
    }
    revalidatePath("/dashboard")
    redirect("/dashboard")
}