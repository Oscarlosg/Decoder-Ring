const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;

describe("polybius() submission tests written by student", () => {
  describe("translates i & j to 42", () => {
    it("returns 42 for i & j when encoding", () => {
      const actual = polybius("ij");
      expect(actual).to.equal("4242");
    });
    it("returns i & j when decoding", () => {
      const actual = polybius("42", false);
      expect(actual).to.equal("i/j");
    });
  });
  describe("ignores capital letters", () => {
    it("ignores capital letters", () => {
      const actual = polybius("tHiNkFuL");
      expect(actual).to.equal("4432423352125413");
    });
  });
  describe("mantains spaces in the message", () => {
    it("mantains spaces in the message when encoding", () => {
      const actual = polybius("hello world");
      expect(actual).to.equal("3251131343 2543241341");
    });
    it("mantains spaces in the message when decoding", () => {
      const actual = polybius("3251131343 2543241341", false);
      expect(actual).to.equal("hello world");
    });
  });
});
