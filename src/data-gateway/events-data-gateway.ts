import { EVENTS_FILE_ENV } from 'config';
import { type EventsPageContent, type EventsPageContentInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IEventsDataGateway } from 'usecases';
import { EventNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

export class EventsDataGateway implements IEventsDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<EventsPageContent[]> {
    const fileName = EVENTS_FILE_ENV;

    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Events: ', error);
      return [];
    }
  }

  async create(data: EventsPageContentInput): Promise<EventsPageContent> {
    const fileName = EVENTS_FILE_ENV;

    const currentEvents = await this.fetch();

    const newEvents = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentEvents.push(newEvents);

    const newEvnetString = JSON.stringify(currentEvents);
    await this.fileService.write(fileName, newEvnetString);

    return newEvents;
  }

  async update(
    id: string,
    data: EventsPageContentInput
  ): Promise<EventsPageContent> {
    const fileName = EVENTS_FILE_ENV;

    const currentEvents = await this.fetch();

    const indexToUpdate = currentEvents.findIndex((events) => (events.id = id));

    if (indexToUpdate < 0) {
      throw new EventNotFound();
    }
    const updated = {
      ...currentEvents[indexToUpdate],
      ...data,
    };
    currentEvents[indexToUpdate] = updated;

    const eventsDataString = JSON.stringify(currentEvents);
    await this.fileService.write(fileName, eventsDataString);

    return updated;
  }

  async delete(id: string): Promise<any> {
    const fileName = EVENTS_FILE_ENV;

    const currentEvents = await this.fetch();

    const indexToDelete = currentEvents.findIndex((event) => event.id === id);

    if (indexToDelete < 0) {
      throw new EventNotFound();
    }

    currentEvents.splice(indexToDelete, 1);

    const eventsDataString = JSON.stringify(currentEvents);

    await this.fileService.write(fileName, eventsDataString);
  }
}
