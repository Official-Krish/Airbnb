import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSessesion(){
    return await getServerSession(authOptions);
}

export default async function getCurrentUser(){
    try{
        const session = await getSessesion();

        if(!session?.user?.email){
            return null;
        }
        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email
            }
        });
        if (!currentUser){
            return null;
        }
        return currentUser;

        
    } catch(e){
        return null;
    }
}