import Link from "next/link";
import {db} from "@/db/index";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/SnippetEditForm";
interface SnippetEditPageProps{
    params:{
        id:string
    }
}
export default async function SnippetEditPage(props:SnippetEditPageProps){
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({
        where:{id}
    })
    if(!snippet){
        return notFound();
    }

    return (
        <div>
            <SnippetEditForm snippet={snippet} ></SnippetEditForm>
        </div>
    )
}