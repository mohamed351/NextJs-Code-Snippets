"use client"
import {useFormState} from "react-dom";
import * as actions from "@/actions";


export const dynamic = "force-dynamic";
export default function CreateSnippets(){

  const [formState , action ]=   useFormState(actions.createSnippet,{message:""});
   
    return (<>
        <form action={action}>
            <h3 className="font-bold m-3">Create a Snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex grap-4">
                    <label className="w-12" htmlFor="title">
                        Title
                    </label>
                    <input  name="title" className="border rounded p-2 w-full" id="title" />
                </div>

            </div>


            <div className="flex flex-col gap-4 mt-2">
                <div className="flex grap-4">
                    <label className="w-12" htmlFor="code">
                        Code
                    </label>
                    <textarea  name="code" className="border rounded p-2 w-full" id="code">
                    </textarea>
                </div>

            </div>

             {formState.message &&<div className="bg-red-400 text-white p-2 border-red-200 rounded mt-2 ">
                {formState.message}
            </div>}
            <button type="submit" className="border w-full mt-2 rounded p-2 bg-blue-200">
            Create
            </button>
        </form>
    </>)
}