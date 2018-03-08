let expect = require("chai").expect;
let isOddOrEven = require("../isOddOrEven");

describe("Tests for isOddOrEven", function () {
    describe("Valid Tests", function () {
        it("Should be even for 'four'", function () {
            expect(isOddOrEven('four')).to.be.equal('even');
        });

        it("Should be odd for two", function () {
           expect(isOddOrEven('two')).to.be.equal('odd');
        });
    });

    describe("Invalid Tests", function () {
       it("Should be undefined for {}", function () {
          expect(isOddOrEven({})).to.be.undefined;
       });
    });
});