import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { Role } from '@prisma/client';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password?.trim();

        if (!email || !password) {
          return null;
        }

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        };
      }
    })
  ],
  pages: {
    signIn: '/auth'
  },
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: Role }).role ?? Role.PARENT;
      }

      if (!token.role && token.email) {
        const dbUser = await prisma.user.findUnique({ where: { email: token.email } });
        token.role = dbUser?.role ?? Role.PARENT;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? '';
        session.user.role = (token.role as Role) ?? Role.PARENT;
      }

      return session;
    }
  }
};

export const getAuthSession = () => getServerSession(authOptions);
