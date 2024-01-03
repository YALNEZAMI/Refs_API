const app = require("../../src/app");

describe("'refs' service", () => {
  it("registered the service", () => {
    const service = app.service("refs");
    expect(service).toBeTruthy();
  });
});
