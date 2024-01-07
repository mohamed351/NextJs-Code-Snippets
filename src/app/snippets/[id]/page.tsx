import {db} from "@/db";
import Link from "next/link";
import {notFound} from "next/navigation";
import * as action from "@/actions";
import { startTransition } from "react";
export default async function ShowSnippet(props:any){

   const snippet = await db.snippet.findFirst({
    where:{id:+props.params.id}
   })
   if(!snippet){
    return notFound();
   }
    const handleDeleteAction = action.deleteSnippet.bind(null,snippet.id);

    return (
        <>
    <div className="flex justify-between items-center mt-2">
    <h2 className="font-bold">{snippet.title}</h2>
    <div className="flex">
        <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded">Edit</Link>
        <form action={handleDeleteAction}>
        <button  className="p-2 border rounded mx-2">Delete</button>
        </form>
    </div>
    </div>
    <pre className="p-3 border rouned bg-gray-400 mt-2">
        <code>{snippet.code}</code>
    </pre>
    </>
    )
}