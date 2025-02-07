import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';

// define the shape of the session object
declare module 'next-auth' {
  interface Session {
    user: { // extend the user object with additional fields
      id: string;
      username: string;
      role: 'ADMIN' | 'USER'
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    // extend the user object with additional fields
    id: string;
    username: string;
    role: 'ADMIN' | 'USER';
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    // extend the JWT object with additional fields
    id: string;
    username: string;
    role: 'ADMIN' | 'USER';
  }
}
