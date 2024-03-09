import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Textarea,
} from "@nextui-org/react";
import { getSingleExercise } from "@/lib/data";
import { updateExercise } from "@/lib/action";

const SingleExercisePage = async ({ params }) => {
  const { id } = params;
  const exercise = await getSingleExercise(id);
  return (
    <section className="px-4 py-8">
      <Card className="max-w-screen-md mx-auto">
        <CardHeader>Update exercise</CardHeader>
        <Divider />
        <CardBody>
          <form
            action={updateExercise}
            className="flex flex-col items-center p-4 gap-6"
          >
            <input type="text" hidden name="id" defaultValue={exercise.id}></input>
            <Input
              className="w-full"
              autoComplete="false"
              name="name"
              defaultValue={exercise.name}
            />
            <div className="flex gap-4 w-full">
              <Input placeholder="Duration" type="number" name="duration" defaultValue={exercise.duration}/>
              <Input placeholder="Calories" type="number" name="calories" defaultValue={exercise.calories}/>
            </div>
            <select
              name="mood"
              className="w-full p-6 rounded-lg bg-gray-100 dark:bg-gray-700"
              defaultValue={exercise.mood}
            >
              <option value="amazing">Amazing</option>
              <option value="solid job">Solid Work</option>
              <option value="glad its over">Glad it's over</option>
            </select>
            <label>Rating</label>
            <Input type="number" name="rating" defaultValue={exercise.rating} />
            <Textarea id="notes" name="notes" defaultValue={exercise.notes} />
            <Button type="submit" className="bg-primary text-white">
              Update
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  );
};

export default SingleExercisePage;
