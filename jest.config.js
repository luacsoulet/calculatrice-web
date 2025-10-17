export default {
  testEnvironment: "node", // ou "jsdom" si tu veux tester le DOM
  transform: {},
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  }
};
