module.exports = {
  extension: ["ts"],
  parallel: false,
  require: [
    "ts-node/register",
    "src/__tests__/fixtures.ts",
    "src/__tests__/hooks.ts",
  ],
};
