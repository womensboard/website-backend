export interface NewsPageContentInput {
  title: string;
  description: string;
  author: string;
  imageURL: string;
}

export type NewsPageContent = NewsPageContentInput & {
  createdAt: Date;
  updatedAt: Date;
  id: string;
};

export interface EventsPageContentInput {
  title: string;
  description: string;
  author: string;
  imageURL: string;
}

export type EventsPageContent = EventsPageContentInput & {
  createdAt: Date;
  updatedAt: Date;
  id: string;
};

export interface TrusteesDetailInput {
  name: string;
  description: string;
  imageURL: string;
}

export type TrusteesDetail = TrusteesDetailInput & {
  createdAt: Date;
  updateAt: Date;
  id: string;
};
