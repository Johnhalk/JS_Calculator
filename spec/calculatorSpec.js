'use strict';

describe('Calculator', function() {

  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it('has a default of zero', function(){
    expect(calcualtor.start).toEqual(0);
  });
});
