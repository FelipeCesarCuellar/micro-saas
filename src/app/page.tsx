import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className='text-4xl font-bold'>
        Landing Page
      </h1>
      <Link href={'/login'}>Login</Link>
    </div>
  );
}
