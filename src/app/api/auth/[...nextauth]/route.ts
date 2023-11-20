import bcrypt from 'bcrypt';
import prisma from '@/prisma';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    secret: process.env.AUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, _req) {
                if (!credentials?.email || !credentials?.password) return null;

                const { email, password } = credentials;

                const user = await prisma.user.findUnique({ where: { email } });
                if (!user) return null;

                const passwordMatch = await bcrypt.compare(password, user.password);
                if (!passwordMatch) return null;

                return {
                    ...user,
                    id: user.id.toString(),
                    name: `${user.firstName} ${user.lastName}`,
                };
            },
        }),
    ],
    pages: {
        signIn: '/login',
    },
});

export { handler as GET, handler as POST }
