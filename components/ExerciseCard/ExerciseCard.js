import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import DeleteIcon from "../Buttons/DeleteIcon";
import RatingDisplay from "./RatingDisplay";
import MoodDisplay from "./MoodDisplay";
import { deleteExercise } from "@/lib/action";

const ExerciseCard = ({ exercise }) => {
  return (
    <Card className="max-w-screen-sm">
      <CardHeader>
        <div className="flex w-full justify-between p-4">
          <p>
            <Link href={`/dashboard/exercise/${exercise.id}`}>
              {exercise.name}
            </Link>
          </p>
          <form action={deleteExercise}>
            <input
              hidden
              name="id"
              value={exercise.id}
              defaultValue={exercise.id}
            />
            <button>
              <DeleteIcon></DeleteIcon>
            </button>
          </form>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex justify-around p-4">
          <div className="flex flex-col items-center">
            <span className="font-bold"> Muscle Group</span>
            <span className="font-light"> {exercise.muscle}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold"> Sets/Reps</span>
            <span className="font-light"> {exercise.sets}x{exercise.reps}</span>
          </div>
        </div>
        
      </CardBody>
      <CardFooter>
        <div className="flex w-full justify-between p-4">
          <RatingDisplay rating={exercise.rating}></RatingDisplay>
          <MoodDisplay mood={exercise.mood}></MoodDisplay>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExerciseCard;
