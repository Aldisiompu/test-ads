"use server";

import { revalidatePath } from "next/cache";

const customRevalidatePath = (path) => {
  revalidatePath(path);
};

export default customRevalidatePath;
