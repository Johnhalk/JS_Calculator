'use strict';

describe("Calculator", function() {

  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  describe("Default Calculator", function() {
    it("has a default of zero", function(){
      expect(calculator._default).toEqual(0);
    });
  });
});
