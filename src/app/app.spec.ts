import { expect } from "chai";

import { App } from "./app";

describe("Inital Test", () => {
  it("should fail", () => {
    // tslint:disable-next-line:no-unused-expression
    expect(true).to.be.true;
  });

  it("should pass if it can find App Class", () => {
    // tslint:disable-next-line:no-unused-expression
    expect(App).to.exist;
  });
});
