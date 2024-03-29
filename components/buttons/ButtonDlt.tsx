'use client'
import { Trash2 } from 'lucide-react'
import React, { ComponentProps } from 'react'
import { Button } from '../ui/button'
import { dlt } from '../actions'
import { toast } from 'react-toastify'
type Props = ComponentProps<'button'>
function ButtonDlt({id } : {id:string}) {
const dltgoal = async () =>{
   try{
    await dlt(id)
    toast.success("Goal deleted")
   }catch(e){
    toast.error("Goal not deleted")
   }
}

  return (
    <Button  onClick={dltgoal} className=" rounded-sm hover:bg-red-500 active:bg-red-800" >
<Trash2 className="text-white  " size={15} />
    </Button>
  )
}

export default ButtonDlt

// <ButtonDlt formAction={dltGoal}   ">
      

//         </Button>