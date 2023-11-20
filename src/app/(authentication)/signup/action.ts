'use server'

import prisma from "@/prisma";
import { InitialFormState } from "./page";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export async function SignUpAction(_prevState: InitialFormState, formData: FormData): Promise<InitialFormState> {
    try {
        const firstName = formData.get('first_name') as string;
        const lastName = formData.get('last_name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirm_password') as string;

        if (password !== confirmPassword) {
            return { responseType: 'error', status: "404", message: "Confirm password not matched!" };
        }

        const isUserExist = await prisma.user.findUnique({ where: { email } });
        if (isUserExist) return { responseType: 'error', status: "404", message: "User already exist!" };

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: { firstName, lastName, email, password: hashPassword }
        })
        if (!user.id) return { responseType: 'error', status: "404", message: 'Failed Attempt!' }

        revalidatePath('/signup')
        return { responseType: 'success', status: "200", message: 'User Created Successfully!' }
    } catch (error) {
        return { responseType: 'error', status: "500", message: 'Internal Server Error!' }
    }

}