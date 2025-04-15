import { handleAuth } from "@/actions/handle-auth";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await auth();

    console.log(session);

    if (!session) {
        redirect('/login')
    }

    return (
      <div className="flex flex-col gap-10 justify-center items-center h-screen w-screen">
        <h1 className='text-4xl font-bold'>
          Protected Dashboard
        </h1>
        <p>Olá! Seu email é {session?.user?.email ?? 'nenhum, pois você não logou!'}</p>
      
        <form action={handleAuth}>
            <button className="border rounded-md px-2 py-1 cursor-pointer">
                Logout
            </button>
        </form>

      </div>
    );
}