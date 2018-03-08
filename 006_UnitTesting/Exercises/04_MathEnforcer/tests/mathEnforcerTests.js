let expect = require('chai').expect;
let mathEnforcer = require('../mathEnforcer');



describe("Tests for mathEnforcer", function () {
   describe("Valid tests", function () {
        it("Should return 5 for addFive(0)", function () {
           expect(mathEnforcer.addFive(0)).to.be.equal(5);
       });

       it("Should return 0 for addFive(-5)", function () {
           expect(mathEnforcer.addFive(-5)).to.be.equal(0);
       });

       it("Should return 5.14 for addFive(0.14)", function () {
           expect(mathEnforcer.addFive(0.14)).to.be.equal(5.14);
       });

       it("Should return 4.86 for addFive(-0.14)", function () {
           expect(mathEnforcer.addFive(-0.14)).to.be.equal(4.86);
       });

       it("Should return -10 for subtractTen(0)", function () {
           expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
       });

       it("Should return 0 for subtractTen(10)", function () {
           expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
       });

       it("Should return -9.86 for subtractTen(0.14)", function () {
           expect(mathEnforcer.subtractTen(0.14)).to.be.equal(-9.86);
       });

       it("Should return 10.14 for subtractTen(-0.14)", function () {
           expect(mathEnforcer.subtractTen(-0.14)).to.be.equal(-10.14);
       });

       it("Should return 2 for sum(1, 1)", function () {
           expect(mathEnforcer.sum(1, 1)).to.be.equal(2);
       });

       it("Should return 0 for sum(1, -1)", function () {
           expect(mathEnforcer.sum(1, -1)).to.be.equal(0);
       });

       it("Should return 5.14 for sum(2, Math.PI)", function () {
           expect(mathEnforcer.sum(2, Math.PI)).to.be.closeTo(5.14, 0.01);
       });

       it("Should return 0 for sum(3.14, -Math.PI)", function () {
           expect(mathEnforcer.sum(3.14, -Math.PI)).to.be.closeTo(0, 0.01);
       });
   });

   describe("Invalid tests", function () {
      it("Should return undefined for addFive({})", function () {
         expect(mathEnforcer.addFive({})).to.be.undefined;
      });

       it("Should return undefined for subtractTen({})", function () {
           expect(mathEnforcer.subtractTen({})).to.be.undefined;
       });

       it("Should return undefined for sum({}, 1))", function () {
           expect(mathEnforcer.sum({}, 1)).to.be.undefined;
       });

       it("Should return undefined for sum(1, {}))", function () {
           expect(mathEnforcer.sum(1, {})).to.be.undefined;
       });

       it("Should return undefined for sum({}, {}))", function () {
           expect(mathEnforcer.sum({}, {})).to.be.undefined;
       });
   });
});