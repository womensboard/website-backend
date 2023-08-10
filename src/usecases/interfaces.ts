import { type NewsPageContent, type NewsPageContentInput } from 'entities';

interface TokenData {
  email: string;
  emailIsVerified: boolean;
  aud: string;
  iss: string;
}

export interface ITokenManager {
  verifySocialLogin: (token: string) => TokenData | Promise<TokenData>;
  decode: (token: string) => Record<string, string>;
  verifyToken: (secretKey: string, token: string) => object;
  generateToken: (secretKey: string, payload: object) => Promise<string>;
}

export interface NewsDataGateway {
  create: (data: NewsPageContentInput) => Promise<NewsPageContent>;
}

export interface INewsDataGateway {
  fetch: () => Promise<NewsPageContentInput[]>;
  create: (data: NewsPageContentInput) => Promise<any>;
  update: (id: string, data: NewsPageContentInput) => Promise<any>;
  delete: (id: string) => Promise<any>;
}
