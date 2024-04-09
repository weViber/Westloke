import 'next-auth';

declare module 'next-auth' {
  interface User {
    _id: string;
    email: string;
    name: string;
    profileImg: string;
    role: string;
    provider: string;
    createdAt: Date;
    emailVerified: Date;
  }
  interface Profile {
    properties: {
      nickname: string;
      profile_image: string;
    };
    kakao_account: {
      email: string;
    };
  }
  interface Account {
    provider: string;
    type: string;
    providerAccountId: string;
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_at: number;
    scope: string;
    refresh_token_expires_in: number;
  }
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image: string;
      role: string;
      provider: string;
    };
    accessToken?: string;
    accessTokenExpires?: number;
    error?: string;
  }
  interface JWT {
    accessToken?: string;
    accessTokenExpires?: number;
    error?: string;
  }
  interface Token {
    user: {
      id: string;
      email: string;
      name: string;
      profileImg: string;
      role: string;
      provider: string;
    };
  }
}
