let jsdom = require('jsdom-global')();
let expect = require('chai').expect;
global.$ = require('jquery');
let sharedObject = require("../sharedObject");
fs = require('fs');

let html = fs.readFileSync('../index.html', 'utf-8');

describe("Tests for sharedObject", function () {
    beforeEach(() => {
        let html = '<div id="wrapper">\n' +
            '        <input type="text" id="name">\n' +
            '        <input type="text" id="income">\n' +
            '    </div>';
        document.documentElement.innerHTML = html;
    });

    describe("Valid Tests", function () {
        it('Should be null name', function () {
            expect(sharedObject.name).to.be.null;
        });

        it('Should be null income', function () {
            expect(sharedObject.income).to.be.null;
        });

        it('Should persist name', function () {
            sharedObject.changeName('testName');
            expect(sharedObject.name).to.be.equal('testName');
        });

        it('Should set name', function () {
            sharedObject.changeName('testName');
            expect($('#name').val()).to.be.equal('testName');
        });

        it('Should persist income', function () {
            sharedObject.changeIncome(10000);
            expect(sharedObject.income).to.be.equal(10000);
        });

        it('Should set income', function () {
            sharedObject.changeIncome(10000);
            expect($('#income').val()).to.be.equal('10000');
        });

        it('Should update name', function () {
            $('#name').val('testName');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('testName');
        });

        it('Should update income', function () {
            $('#income').val(10000);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(10000);
        });
    });

    describe("Invalid Tests", function () {
        it('Should not set empty name', function () {
            sharedObject.changeName('testName');
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal('testName');
        });

        it('Should not change to income that is not a number', function () {
            sharedObject.changeIncome(10000);
            sharedObject.changeIncome({});
            expect(sharedObject.income).to.be.equal(10000);
        });

        it('Should not change to income that is not a integer', function () {
            sharedObject.changeIncome(10000);
            sharedObject.changeIncome(3.14);
            expect(sharedObject.income).to.be.equal(10000);
        });

        it('Should not change to income to negative', function () {
            sharedObject.changeIncome(10000);
            sharedObject.changeIncome(-10000);
            expect(sharedObject.income).to.be.equal(10000);
        });

        it('Should not change to income to 0', function () {
            sharedObject.changeIncome(10000);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(10000);
        });

        it('Should not update empty name', function () {
            sharedObject.changeName('testName');
            $('#name').val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('testName');
        });

        it('Should not update to income to NaN', function () {
            sharedObject.changeIncome(10000);
            $('#income').val(NaN);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(10000);
        });

        it('Should not update to income that is not a number', function () {
            sharedObject.changeIncome(10000);
            $('#income').val('ten thousands');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(10000);
        });

        it('Should not update to income that is not a integer', function () {
            sharedObject.changeIncome(10000);
            $('#income').val(3.14);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(10000);
        });

        it('Should not update to income to negative', function () {
            sharedObject.changeIncome(10000);
            $('#income').val(-10000);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(10000);
        });

        it('Should not update to income to 0', function () {
            sharedObject.changeIncome(10000);
            $('#income').val(0);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(10000);
        });
    });
});
