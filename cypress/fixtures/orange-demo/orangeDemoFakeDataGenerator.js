/* Need to look into another alternative for random data
like https://fakerjs.dev/ when I get time */
const numRandom = () => Math.floor((Math.random() + 1) * 99);
const insertNum = numRandom();
const randomEmailGenerator = `john.smith-999-${insertNum}@fake-email-999-${insertNum}.org`;
const randomFirstNameGenerator = `John-999-${insertNum}`;
const randomMiddleNameGenerator = `Jacob-999-${insertNum}`;
const randomLastNameGenerator = `Smith-999-${insertNum}`;

export { numRandom, insertNum, randomEmailGenerator, randomFirstNameGenerator, randomMiddleNameGenerator, randomLastNameGenerator };