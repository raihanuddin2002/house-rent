'use server'

import prisma from "@/prisma";
import { InitialFormState } from "./page";
import bcrypt from "bcrypt";

export async function SignUpAction(_prevState: InitialFormState, formData: FormData) {
    try {
        const email = formData.get('email') as string;

        const isUserExist = await prisma.user.findUnique({ where: { email } });
        if (isUserExist) return { status: "404", message: "User already exist!" };

        const password = formData.get('password') as string;
        const hashPassword = await bcrypt.hash(password, 10)

        const firstName = formData.get('first_name') as string;
        const lastName = formData.get('last_name') as string;
        const user = await prisma.user.create({
            data: { firstName, lastName, email, password: hashPassword }
        })
        if (!user.email) return { status: "404", message: 'Failed Attempt!' }

        return { status: "200", message: 'User Created Successfully!' }
    } catch (error) {
        return { status: "500", message: 'Internal Server Error!' }
    }

}