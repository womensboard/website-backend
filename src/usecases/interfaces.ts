import {
  type TrusteesDetail,
  type TrusteesDetailInput,
  type EventsPageContent,
  type EventsPageContentInput,
  type NewsPageContent,
  type NewsPageContentInput,
} from 'entities';

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

export interface INewsDataGateway {
  fetch: () => Promise<NewsPageContentInput[]>;
  create: (data: NewsPageContentInput) => Promise<NewsPageContent>;
  update: (id: string, data: NewsPageContentInput) => Promise<NewsPageContent>;
  delete: (id: string) => Promise<any>;
}

export interface IEventsDataGateway {
  fetch: () => Promise<EventsPageContent[]>;
  create: (data: EventsPageContentInput) => Promise<EventsPageContent>;
  update: (
    id: string,
    data: EventsPageContentInput
  ) => Promise<EventsPageContent>;
  delete: (id: string) => Promise<any>;
}

export interface ITrusteesDataGateway {
  fetch: () => Promise<TrusteesDetailInput[]>;
  create: (data: TrusteesDetail) => Promise<TrusteesDetailInput>;
  update: (id: string, data: TrusteesDetail) => Promise<TrusteesDetailInput>;
  delete: (id: string) => Promise<any>;
}
