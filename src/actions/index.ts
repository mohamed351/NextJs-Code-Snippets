"use server";
import {db} from "@/db/index";
import { redirect } from "next/navigation";

export async function editSnippet(id:number, title:string, code:string){
    console.log("handle click");
   await db.snippet.update({
        where:{id:id},
        data:{
            code:code,
            title:title
        }
    });
    redirect(`/snippets/${id}`);

}
export async function deleteSnippet(id:number){

    await db.snippet.delete({
        where:{id:id}
    })
    redirect(`/`);
}

export async function createSnippet(formState:{message:string},formData:FormData){
    "use server";
    // return {
    //     message:"Title must be longer"
    // }

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    if(typeof title != "string" || title?.length < 3){
        return {
            message:"The title should be longer"
        }
    }
    if(typeof code != "string" ||  code.length < 10){
        return {
            message:"The Code must be longer"
        }
    }
    await db.snippet.create({
        data:{
            code,
            title
        }
    });
    redirect("/");
}