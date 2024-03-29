"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { update } from "../actions";
import { toast } from "react-toastify";
import { Edit } from "lucide-react";

export function DialogDemo({ id }: { id: string }) {
  const updateGoal = async (formData: FormData) => {
    const name = formData.get("name") as string;
    console.log("Hello food after noon" + name);

    try {
      await update(id, name);
      toast.success("Goal updated");
    } catch (e) {
      toast.error("Goal not updated ");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-500 active:bg-green-700">
          <Edit size={15} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] backdrop-blur-md bg-white/20 border  ">
        <DialogHeader>
          <DialogTitle className="text-white">Edit Goal</DialogTitle>
          <DialogDescription className="text-white">
            Make changes to your goal here. Click save when you &apos; re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form action={updateGoal}>
            <div className=" flex justify-center items-center gap-4">
              <Input id="name" name="name" className="w-1/2" />
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
