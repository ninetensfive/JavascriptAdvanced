let expect = require("chai").expect;
let createCalculator = require("../createCalculator");

describe("Tests for createCalculator", function () {
   let calc;
   beforeEach(function () {
       calc = createCalculator();
   });

    describe("Tests with valid values", function () {
        it("Should be 0 for initial value", function () {
            expect(calc.get()).to.be.equal(0);
        });
        it('Should be 1 when adding 1', function () {
            calc.add(1);
            expect(calc.get()).to.be.equal(1);
        });
        it('Should be -1 when subtract -1', function () {
            calc.subtract(1);
            expect(calc.get()).to.be.equal(-1);
        });
        it('Should be 1 when subtract -1', function () {
            calc.subtract(-1);
            expect(calc.get()).to.be.equal(1);
        });
        it('Should be 3.14 when add 3.14', function () {
            calc.add(3.14);
            expect(calc.get()).to.be.equal(3.14);
        });
        it('Should be -3.14 when subtract 3.14', function () {
            calc.subtract(3.14);
            expect(calc.get()).to.be.equal(-3.14);
        });
        it("should work with fractions properly", () => {
            calc.add(3.14);
            calc.subtract(2.15);
            expect(calc.get()).to.be.closeTo(0.99, 0.0001);
        });
        it("should add strings that can be parsed to numbers properly", () => {
            calc.add('3');
            calc.add('7');
            expect(calc.get()).to.equal(10);
        });
        it("should subtract strings that can be parsed to numbers properly", () => {
            calc.subtract('3');
            calc.subtract('7');
            expect(calc.get()).to.equal(-10);
        })
    });

    describe("Test with invalid values", function () {
        it('Should be NaN when add string', function () {
            calc.add("Oh, NaN");
            expect(calc.get()).to.be.NaN;
        });
        it('Should be NaN when subtract string', function () {
            calc.subtract("Oh, NaN");
            expect(calc.get()).to.be.NaN;
        });
        it('Should be MAX_VALUE when 1 is added', function () {
            calc.add(Number.MAX_VALUE);
            calc.add(1);
            expect(calc.get()).to.be.equal(Number.MAX_VALUE);
        });
        it('Should be -MAX_VALUE when 1 is subtracted', function () {
            calc.add(-Number.MAX_VALUE);
            calc.subtract(1);
            expect(calc.get()).to.be.equal(-Number.MAX_VALUE);
        });
    })
});