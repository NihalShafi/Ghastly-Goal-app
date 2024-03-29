'use client'
import React from 'react'
import { Button } from '../ui/button'
import { logout } from '../actions'
import { toast } from 'react-toastify'

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
    <Button onClick={logo} className='hover:bg-white text-white border-2 hover:text-black  rounded-md'>
        Log Out
    </Button>
  )
}

export default Logout