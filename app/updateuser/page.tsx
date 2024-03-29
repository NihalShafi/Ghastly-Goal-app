import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

async function page () {
  const supabase = createClient()
const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);
  
  if (!user){
    console.log(user);
    
    
    redirect('/login')
    
  }
const updateUser = async ( formData:FormData)=>{
  
    'use server'
    const name = formData.get ('user') as string
    console.log(name);
    
    const supabase = createClient()
    const { data, error } = await supabase.auth.updateUser({
        data: { display_name : name  }
      })
      redirect('/')
}
  
  return (
    <section className="">
     <div className="flex justify-center h-screen items-center ">
     <div className="border backdrop-blur-lg bg-white/30 w-1/2 rounded-sm  h-1/2 flex  items-center justify-center p-4 ">
        <div className=" w-3/4 ">
        <form action={updateUser}>
          <div className="mt-4">
          <label className="text-white " htmlFor="">Name</label>
          <Input name="user" id="user" placeholder="Enter Your name "/>
          </div>
          <div className="w-full mt-6 justify-center flex">
          <Button type="submit">
            buttons
          </Button>
          </div>
        </form>
        </div>
      </div>
     </div>
    </section>
  );
}

export default page;
