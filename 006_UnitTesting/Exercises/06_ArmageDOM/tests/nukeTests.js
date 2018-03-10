const jsdom = require('jsdom-global')();
const expect = require('chai').expect;
global.$ = require('jquery');
const nuke = require('../nuke');

describe("Tests for nuke", function () {
    let html;
    beforeEach(() => {
        document.body.innerHTML = '<div id="target">\n' +
            '    <div class="nested target">\n' +
            '        <p>This is some text</p>\n' +
            '    </div>\n' +
            '    <div class="target">\n' +
            '        <p>Empty div</p>\n' +
            '    </div>\n' +
            '    <div class="inside">\n' +
            '        <span class="nested">Some more text</span>\n' +
            '        <span class="target">Some more text</span>\n' +
            '    </div>\n' +
            '</div>\n';

        html = $('#target');
    });

   describe("Valid Tests", function () {
        it("Should body be equal to '.nested.target", function () {
            nuke('#target', '.nested.target');
            expect($('body').innerHTML).to.be.equal($('.nested.target').innerHTML);
        });
       it("Should body be equal to 'body'", function () {
           nuke('body', 'body');
           expect($('body').innerHTML).to.be.equal($('body').innerHTML);
       });
   });

    describe("Invalid Tests", function () {
        it("Should be equal to to body for not present first selector", function () {
            nuke('#missing', '.nested.target');
            expect($('body').innerText).to.be.equal($('body').innerHTML);
        });

        it("Should be equal to to body for not present second selector", function () {
            nuke('body', '#missing');
            expect($('body').innerText).to.be.equal($('body').innerHTML);
        });

        it("Should be equal to to body for not present selectors", function () {
            nuke('#missing', '#missing');
            expect($('body').innerText).to.be.equal($('body').innerHTML);
        });
    });
});
