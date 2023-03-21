import { factory, primaryKey } from '@mswjs/data';
import { RestHandler } from 'msw';
import { faker } from '@faker-js/faker';

const db = factory({
  user: {
    id: primaryKey(String),
    firstName: String,
    lastName: String,
    age: Number,
  },
});

let count = 100;
while (count--) {
  db.user.create({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number({ min: 1, max: 100 }),
  });
}
// Generates REST API request handlers.
export const handlers: RestHandler[] = [...db.user.toHandlers('rest', 'https://my.backend')];
