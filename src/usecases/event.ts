import { type IEventsDataGateway } from './interfaces';
import { type EventsPageContentInput } from 'entities';
import { validateData } from 'utils/helpers';
import { eventsContentSchema } from 'schemas/events';

export class EventsUsecase {
  constructor(private readonly dataGateway: IEventsDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: EventsPageContentInput) {
    const newData = validateData(eventsContentSchema, data);
    return await this.dataGateway.create(newData);
  }

  async update(idToUpdate: string, data: EventsPageContentInput) {
    const newData = validateData(eventsContentSchema, data);
    return await this.dataGateway.update(idToUpdate, newData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
