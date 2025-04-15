'use server'

import { handleAuth } from "@/actions/handle-auth";

export default async function Home() {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <h1 className='text-4xl font-bold mb-10'>
          Login
        </h1>
        <form action={handleAuth}>
            <button 
                type="submit"
                className="border rounded-md px-2 py-1 cursor-pointer"
            >
                Signin with Google
            </button>
        </form>
      </div>
    );
  }
  