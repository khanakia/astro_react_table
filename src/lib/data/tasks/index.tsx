import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { taskSchema } from "./schema";


export async function getTasks() {
  const data = await fs.readFile(path.join(process.cwd(), "src/lib/data/tasks/tasks.json"));
  const tasks = JSON.parse(data.toString());
  return z.array(taskSchema).parse(tasks);
}