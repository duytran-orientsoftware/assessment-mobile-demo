import { faker } from '@faker-js/faker'

export const userDataGenerator = (length: number) => {
  return Array.from({ length }, () => ({
    // avatar: faker.image.people(360, 360, true),
    name: `${faker.name.firstName()}_${faker.name.lastName()}`,
    address: faker.address.streetAddress(),
    gender: faker.name.gender(),
    job: faker.name.jobTitle(),
  }))
}
