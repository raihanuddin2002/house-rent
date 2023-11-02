'use server'

import prisma from "@/prisma";

export async function SignUpAction(formData: FormData) {
    const email = formData.get('email') as string;

    const isUserExist = await prisma.user.findUnique({ where: { email } });

    if (isUserExist) return ({ status: "404", message: "User already exist!" })
    const password = formData.get('password') as String;


}