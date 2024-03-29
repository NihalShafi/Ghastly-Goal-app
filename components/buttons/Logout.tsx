'use client'
import React from 'react'
import { Button } from '../ui/button'
import { logout } from '../actions'
import { toast } from 'react-toastify'
import { LogOut } from 'lucide-react'

function Logout() {
   async function logo (){
        try{
            await logout()
            toast.success("Log out success ")
        }catch(error){
            toast.error("Logout failed")
        }
    }
  return (
    <Button onClick={logo} size={'sm'} className='hover:bg-red-600 text-white  hover:text-black  rounded-md'>
        <LogOut size={13}/>
    </Button>
  )
}

export default Logout