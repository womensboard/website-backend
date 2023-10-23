import { type ContactDetailInput } from 'entities';
import { type IContactDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { contactSchema } from 'schemas/contacts';

export class ContactUsecase {
  constructor(private readonly dataGateway: IContactDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async update(data: ContactDetailInput) {
    const contactData = validateData(contactSchema, data);

    return await this.dataGateway.update(contactData);
  }
}
