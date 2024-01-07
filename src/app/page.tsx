import {db} from "@/db/index";
import Link from "next/link";

export const dynamic = "force-dynamic";
export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map(snippet =>{
    return (<Link href={`snippets/${snippet.id}`} 
    key={snippet.id}
    className="flex justify-between item-center p-2 mt-2 border  rounded">
        {snippet.title}
        <div>View</div>
    </Link>)
  })
  return (
    <div className="m-4">
      <div className="flex justify-between item-center">
        <h2>Snippet List</h2>
        <Link href="/snippets/new" className="border  rounded p-2"> Create New Snippet</Link>
      </div>
      {renderSnippets}
    </div>
  )
}
