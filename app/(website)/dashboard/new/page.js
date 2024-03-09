import { addExercise } from "@/lib/action";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Textarea,
} from "@nextui-org/react";

const NewExercisePage = () => {
  return (
    <section className="px-4 py-8">
      <Card className="max-w-screen-md mx-auto">
        <CardHeader>New exercise</CardHeader>
        <Divider />
        <CardBody>
          <form
            action={addExercise}
            className="flex flex-col items-center p-4 gap-6"
          >
            <Input
              className="w-full"
              placeholder="Name"
              autoComplete="false"
              name="name"
            />
            <div className="flex gap-4 w-full">
              <Input placeholder="Muscle Group" type="text" name="muscle" />
              <div className="flex flex-row gap-2 items-center">
                <Input placeholder="Sets" type="number" name="sets"min={0} />
                x
                <Input placeholder="Reps" type="number" name="reps" min={0}/>
              </div>
            </div>
            <select
              name="mood"
              className="w-full p-6 rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              <option value="amazing">Amazing</option>
              <option value="solid job">Solid Work</option>
              <option value="glad its over">Glad its over</option>
            </select>
            <label>Rating</label>
            <Input type="number" name="rating" placeholder="Rating" />
            <Textarea name="notes" placeholder="Notes..." />
            <Button type="submit" className="bg-primary text-white">
              Post Exercise
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  );
};

export default NewExercisePage;
