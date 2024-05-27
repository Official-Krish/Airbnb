"use client"

import { AiOutlineMenu } from "react-icons/ai"
import { Avatar } from "../Avatar"
import { useCallback, useState } from "react"
import { MenuItem } from "./MenuItem"
import useRegisterModal from "@/app/hooks/useRegisterModal"
import useLoginModal from "@/app/hooks/useLoginModal"
import { signOut } from "next-auth/react"
import { SafeUser } from "@/app/types"
import useRentModal from "@/app/hooks/useRentModal"
import { useRouter } from "next/navigation"

interface userMenuProps {
    currentUser?:  SafeUser | null
}

export const UserMenu : React.FC<userMenuProps> = ({
    currentUser
}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();
    const [open ,setopen] = useState(false);
    const router = useRouter();
    const toggleOpen = useCallback(() => {
        setopen((value) => !value)
    }, [])

    const onRent = useCallback(() => {
      if(!currentUser){
        return loginModal.onOpen()
      }

      rentModal.onOpen();
    },[currentUser, loginModal,rentModal])


    return (
        <div className="relative ">
            <div className="flex flex-row items-center gap-3">
                <div onClick={onRent}
                className="hidden md:block font-semibold py-3 px-4 rounded-full hover:bg-netural-100 transistion cursor-pointer">

                    Airbnb your home 

                </div>
                <div onClick={toggleOpen}
                className="p-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center rounded-full curson-pointer hover:shadaow-md transition gap-3 cursor-pointer">
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image}/>
                    </div>
                </div>
            </div>
            {open && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                            <MenuItem
                                onClick={() => router.push("/trips")}
                              label="My trips"
                            />
                            <MenuItem
                              onClick={() => router.push("/favorites")}
                              label="My favorites"
                            />
                            <MenuItem
                              onClick={() => router.push("/reservations")}
                              label="My reservations"
                            />
                            <MenuItem
                              onClick={() => router.push("/properties")}
                              label="My properties"
                            />
                            <MenuItem
                              onClick={rentModal.onOpen}
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