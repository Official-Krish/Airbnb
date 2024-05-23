"use client"

import { AiOutlineMenu } from "react-icons/ai"
import { Avatar } from "../Avatar"
import { useCallback, useState } from "react"
import { MenuItem } from "./MenuItem"
import useRegisterModal from "@/app/hooks/useRegisterModal"
import useLoginModal from "@/app/hooks/useLoginModal"
import { User } from "@prisma/client"
import { signOut } from "next-auth/react"

interface userMenuProps {
    currentUser?:  User | null
}

export const UserMenu : React.FC<userMenuProps> = ({
    currentUser
}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
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
                        {currentUser ? (
                            <>
                            <MenuItem
                              onClick={() => {}}
                              label="My trips"
                            />
                            <MenuItem
                              onClick={() => {}}
                              label="My favourits"
                            />
                            <MenuItem
                              onClick={() => {}}
                              label="My reservations"
                            />
                            <MenuItem
                              onClick={() => {}}
                              label="My properties"
                            />
                            <MenuItem
                              onClick={() => {}}
                              label="Airbnb my home"
                            />
                            <hr/>
                            <MenuItem
                              onClick={() => signOut()}
                              label="Logout"
                            />
                            </>
                        ): (
                            <>
                        <MenuItem
                          onClick={loginModal.onOpen}
                          label="Login"
                        />
                        <MenuItem
                          onClick={registerModal.onOpen}
                          label="Signup"
                        />
                        </>
                        )}
                        
                    </div>

                </div>
            )}
        </div>
    )
}