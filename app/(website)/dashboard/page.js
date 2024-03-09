
import ExerciseCard from '@/components/ExerciseCard/ExerciseCard'
import { getExercises } from '@/lib/data'
import React from 'react'

const DashboardPage = async () => {
  const exercises = await getExercises()
  console.log(exercises)
  return (
    <section className='px-5 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {exercises.map((exercise) =>
        (<ExerciseCard exercise={exercise} >

        </ExerciseCard>)
        )}
      </div>
    </section>
  )
}

export default DashboardPage