import faker from 'faker';
const generatedData = (count) => {
  let data = [];
  for (let i = 0; i <= count; i++) {
    data.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      card: faker.helpers.createCard(),
      image: faker.image.image()
    });
  }
  return data;
};
export default generatedData;