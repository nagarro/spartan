define(["spartan/spartan"], function (Spartan) {
    "use strict";
    /*global describe:true, it:true, before:true, sinon:true, expect:true */

    describe("Spartan Apps", function () {

        describe("Spartan Module", function () {

            it("should exist", function () {
                expect(Spartan).to.not.equal(undefined);
            });
        });
    });
});
