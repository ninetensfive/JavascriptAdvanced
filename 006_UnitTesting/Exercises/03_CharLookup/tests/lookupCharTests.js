let expect = require('chai').expect;
let lookupChar = require('../lookupChar');

describe("Tests for lookupChar", function () {
   describe("Valid Tests", function () {
      it("Should return 'a' for 'abc, 0'", function () {
         expect(lookupChar('abc', 0)).to.be.equal('a');
      });

       it("Should return 'c' for 'abc, 2'", function () {
           expect(lookupChar('abc', 2)).to.be.equal('c');
       });
   });

   describe("Invalid Tests", function () {
       it("Should return undefined for '{}, -1'", function () {
           expect(lookupChar({}, -1)).to.be.undefined;
       });

       it("Should return undefined for 'abc, {}'", function () {
           expect(lookupChar('abc', {})).to.be.undefined;
       });

       it("Should return undefined for '{}, {}'", function () {
           expect(lookupChar('{}', {})).to.be.undefined;
       });

       it("Should return undefined for 'abc, '2''", function () {
           expect(lookupChar('abc', '2')).to.be.undefined;
       });

       it("Should return undefined for 'abc, 2.14'", function () {
           expect(lookupChar('abc', 2.14)).to.be.undefined;
       });

      it("Should return 'Incorrect index' for 'abc, -1'", function () {
         expect(lookupChar('abc', -1)).to.be.equal('Incorrect index');
      });

       it("Should return 'Incorrect index' for 'abc, 3'", function () {
           expect(lookupChar('abc', 3)).to.be.equal('Incorrect index');
       });
   });
});