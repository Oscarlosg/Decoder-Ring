const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

describe("substitution() submission tests written by student", () => {
  describe("returns false if given alphabet is not exactly 26 characters long", () => {
    it("should return false if given alphabet is not exactly 26 characters long", () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibe");
      expect(actual).to.be.false;
    });
  });
  describe("correctly translates the given phrase, based on the given alphabet", () => {
    it("correctly translates the given phrase, based on the given alphabet when encoding", () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal("jrufscpw");
    });
    it("correctly translates the given phrase, based on the given alphabet when decoding", () => {
      const actual = substitution(
        "jrufscpw",
        "xoyqmcgrukswaflnthdjpzibev",
        false
      );
      expect(actual).to.equal("thinkful");
    });
  });
  describe("returns false if there are any duplicate characters in the given alphabet", () => {
    it("returns false if there are any duplicate characters in the given alphabet", () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzioe");
      expect(actual).to.be.false;
    });
  });
  describe("mantains spaces in the message", () => {
    it("mantains spaces in the message when encoding", () => {
      const actual = substitution(
        "You are an excellent spy",
        "xoyqmcgrukswaflnthdjpzibev"
      );
      expect(actual).to.equal("elp xhm xf mbymwwmfj dne");
    });
    it("mantains spaces in the message when decoding", () => {
      const actual = substitution(
        "elp xhm xf mbymwwmfj dne",
        "xoyqmcgrukswaflnthdjpzibev",
        false
      );
      expect(actual).to.equal("you are an excellent spy");
    });
  });
  describe("ignores capital letters", () => {
    it("ignores capital letters when encoding", () => {
      const actual = substitution("tHiNkFuL", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal("jrufscpw");
    });
  });
});
