"use client";
import { Editor } from "@monaco-editor/react";
import type {Snippet} from "@prisma/client";
import {useState, startTransition} from "react";
import * as action from "@/actions";
interface SnippetEditFormProps{
    snippet:Snippet
}
export default function SnippetEditForm({snippet}:SnippetEditFormProps){

    const [getCode , setCode] = useState(snippet.code);
    const [getTitle,setTitle] = useState(snippet.title);
    const handleEditorChange = (value:string= "")=>{
        setCode(value);
    }
    const handleTitle =(input:any)=>{
        setTitle(input.target.value)
    }
    const handleSubmit = action.editSnippet.bind(null,snippet.id,getTitle,getCode);
    return (
        <>

        <div className="flex flex-col gap-4 mt-4">
            <div className="flex grap-4">
            <label className="w-12" htmlFor="title">
                        Title
                    </label>
                    <input  onChange={handleTitle} value={getTitle} name="title" className="border rounded p-2 w-full" id="title" />
            </div>

        </div>

        <div className="mt-2">
      <Editor height={"40vh"} theme="vs-dark" language="javascript"
         defaultValue={getCode}
         options={{minimap:{enabled:false}}}
         onChange={handleEditorChange}>

        </Editor>
        <div>
            <form action={handleSubmit}>
        <button className="p-2 rounded border mt-2"> Save</button>
        </form>
        </div>
        </div>
        </>
    )
}