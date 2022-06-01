const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;

describe("caesar() submission tests written by student", () => {
  describe("return false if improper shift value", () => {
    it("returns false if shift value === 0", () => {
      const actual = caesar("message", 0);
      expect(actual).to.be.false;
    });
    it("returns false if shift value < -25", () => {
      const actual = caesar("message", -26);
      expect(actual).to.be.false;
    });
    it("returns false if shift value > 25", () => {
      const actual = caesar("message", 26);
      expect(actual).to.be.false;
    });
    it("returns false if no shift value is present", () => {
      const actual = caesar("message");
      expect(actual).to.be.false;
    });
  });

  describe("error handling", () => {
    it("returns lowercase letters/ignores capital letters ", () => {
      const expected = "phvvdjh";
      const actual = caesar("MESSAGE", 3);
      expect(actual).to.equal(expected);
    });
    it("shifts letters through the alphabet", () => {
      const expected = "qiwweki";
      const actual = caesar("message", 4);
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and other non-alphabet symbols when encoding", () => {
      const expected = "qiwweki ! !";
      const actual = caesar("message ! !", 4);
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and other non-alphabet symbols when decoding", () => {
      const expected = "message ! !";
      const actual = caesar("qiwweki ! !", 4, false);
      expect(actual).to.equal(expected);
    });
  });
});
