let expect = require("chai").expect;
let isSymmetric = require("../isSymmetric");

describe("isSymmetric tests", function () {
    it("Should return false for [1, 2]", function () {
        expect(isSymmetric([1, 2])).to.be.false;
    })
    it("Should return true for [1, 1]", function () {
        expect(isSymmetric([1, 1])).to.be.true;
    })
    it("Should return false for null", function () {
        expect(isSymmetric(null)).to.be.false;
    })
    it("Should return true for []", function () {
        expect(isSymmetric([])).to.be.true;
    })
    it("Should return true for [1]", function () {
        expect(isSymmetric([1])).to.be.true;
    })
    it("Should return true for [-1, 1, -1]", function () {
        expect(isSymmetric([-1, 1, -1])).to.be.true;
    })
    it("Should return false for NaN", function () {
        expect(isSymmetric(NaN)).to.be.false;
    })
    it("Should return false for [1, 2, 3, 4]", function () {
        expect(isSymmetric([1, 2, 3, 4])).to.be.false;
    })
    it("should return true for [5, 'hi', {a:5}, new Date(), {a:5}, 'hi', 5]", () => {
        expect(isSymmetric([5, 'hi', {a:5}, new Date(), {a:5}, 'hi', 5])).to.be.true;
    })
    it("should return false for [5, 'hi', {b:5}, new Date(), {a:5}, 'hi', 5]", () => {
        expect(isSymmetric([5, 'hi', {b:5}, new Date(), {a:5}, 'hi', 5])).to.be.false;
    })
})
