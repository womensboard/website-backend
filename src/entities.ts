export type NewsPageContentInput = {
  title: string;
  description: string;
  author: string;
  imageURL: string;
};

export type NewsPageContent = NewsPageContentInput & {
  createdAt: Date;
  updatedAt: Date;
  id: string;
};

export type EventsPageContentInput = {
  title: string;
  description: string;
  author: string;
  imageURL: string;
};

export type EventsPageContent = EventsPageContentInput & {
  createdAt: Date;
  updatedAt: Date;
  id: string;
};
