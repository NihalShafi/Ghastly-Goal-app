import Logout from "@/components/buttons/Logout";
import GoalCard from "@/components/GoalCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/server";

import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

async function page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  let userid = user?.id as string;

  let metadata = user?.user_metadata;

  if (!user) {
    console.log(user);

    console.log("Piece of cyka");
    redirect("/login");
  }

  const addgoal = async (formdata: FormData) => {
    "use server";
    const value = formdata.get("name") as string;
    const supabase = createClient();

    const { data, error } = await supabase
      .from("note")
      .insert([{ title: value, user_id: user?.id }])
      .select();
    revalidatePath("/");
    // Clear the input field using the form's `reset()` method
    formdata.set("name", ""); // Target the form that triggered the submission
  };
  return (
    <section className="w-full  bg-black">
      <header className=" flex px-4 py-8 sticky top-0 justify-between items-center backdrop-blur-md bg-white/20  h-10">
        <div>
          <h1 className="text-white  bold ">{metadata?.display_name}</h1>
        </div>
        <div className="flex items-center "> 
          <Link href="/updateuser">
            <Button className="mr-3 bg-white text-black hover:text-white" size={'sm'}>
              Change Name?
            </Button>
          </Link>

          <Logout />
        </div>
      </header>
      <div className="flex w-full items-center justify-center h-48">
        {metadata?.display_name ? (
          <h1 className="text-white text-2xl bold ">
            Welcome{" "}
            <span className="text-green-600">{metadata.display_name}</span>
          </h1>
        ) : (
          <h1>Welcome {userid}</h1>
        )}
      </div>
      <div className="w-full  flex justify-center ">
        <div className="lg:w-1/3 w-1/2 ">
          <form
            className="flex flex-col scale-90 lg:scale-100 items-center"
            action={addgoal}
          >
            <Input
              placeholder="Please add Goal here"
              type="text"
              name="name"
              id="name"
            />
            <Button className="mt-2" variant={"default"} type="submit">
              Add text
            </Button>
          </form>
        </div>
      </div>
      <GoalCard data={userid} />
    </section>
  );
}

export default page;
