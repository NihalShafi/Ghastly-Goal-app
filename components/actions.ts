'use server'
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function dlt(id:string ) {
    const supabase = createClient();
      const { error } = await supabase.from("note").delete().eq('id', id);
  
      if (error) {
        console.error("Error deleting note:", error);
        // Handle error if needed
        return 
      } else {
        
        console.log("Note deleted successfully");
        revalidatePath('/')
        // Handle success if needed
        return
      }
      

    
} 
export async function update(id:string ,datas:string) {
  const supabase = createClient();
  
const { data, error } = await supabase
.from('note')
.update({ title : datas })
.eq('id', id)
.select()

console.log(datas + "  " + id)

        

    if (error) {
      console.error("Error deleting note:", error);
      // Handle error if needed
      return 
    } else {
      
      console.log("Note deleted successfully");
      revalidatePath('/')
      // Handle success if needed
      return
    }
    

  
} export const logout = async () => {
  const supabase = createClient()
  
const { error } = await supabase.auth.signOut()
redirect('/login')

}

  // const dlt = async (iddata: FormData) => {
  //   "use server";
  //   
  // };
