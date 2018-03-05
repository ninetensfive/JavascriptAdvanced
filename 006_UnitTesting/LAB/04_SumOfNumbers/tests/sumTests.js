let expect = require("chai").expect;
let sum = require("../sum");

describe("Sum Tests", function () {
    it("Should return 3 for [1, 2]", function () {
        expect(sum([1, 2])).to.be.equal(3);
    })
    it("Should return 0 for []", function () {
        expect(sum([])).to.be.equal(0);
    })
    it("Should return 1 for [1]", function () {
        expect(sum([1])).to.be.equal(1);
    })
    it("Should return 5 for [1.5, 2.5, 2, -1]", function () {
        expect(sum([1.5, 2.5, 2, -1])).to.be.equal(5);
    })
    it("Should return NaN for ['test1', 'test2', 'test3']", function () {
        expect(sum('test1', 'test2', 'test3')).to.be.NaN;
    })
})