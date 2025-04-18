'use server'

import { auth, signIn, signOut } from "@/lib/auth";

export async function handleAuth() {
    const session = await auth();

    if (session) {
        await signOut({
            redirectTo: '/login'
        })
        return;
    }

    await signIn('google', {
        redirectTo: '/dashboard'
    });
}
