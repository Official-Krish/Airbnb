"use client"

import { AiOutlineMenu } from "react-icons/ai"
import { Avatar } from "../Avatar"
import { useCallback, useState } from "react"
import { MenuItem } from "./MenuItem"


export const UserMenu = () => {
    const [open ,setopen] = useState(false);
    const toggleOpen = useCallback(() => {
        setopen((value) => !value)
    }, [])
    return (
        <div className="relative ">
            <div className="flex flex-row items-center gap-3">
                <div onClick={toggleOpen}
                className="hidden md:block font-semibold py-3 px-4 rounded-full hover:bg-netural-100 transistion cursor-pointer">

                    Airbnb your home 

                </div>
                <div onClick={() =>{}}
                className="p-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center rounded-full curson-pointer hover:shadaow-md transition gap-3">
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                        <Avatar/>
                    </div>
                </div>
            </div>
            {open && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <>
                        <MenuItem
                          onClick={() => {}}
                          label="Login"
                        />
                        <MenuItem
                          onClick={() => {}}
                          label="Signup"
                        />
                        </>
                    </div>

                </div>
            )}
        </div>
    )
}