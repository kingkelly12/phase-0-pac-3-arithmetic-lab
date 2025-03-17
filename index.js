function add(a, b) {
    return a + b;
    
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// increment(n) increments n and returns the result
function increment(n) {
    
    return n + 1;
}

// decrement(n) decrements n and returns the result
function decrement(n) {
    
    return n - 1;
}

// parses n as an integer and returns the parsed integer, assumes base 10, returns NaN as appropriate

// index.js
function makeInt(n) {
    return parseInt(n, 10);
  }
  
  // test/indexTest.js
  it('assumes base 10', () => {
    expect(makeInt('0x2328')).to.equal(9000); // Change the expected value to 9000
  });

// preserves n's decimals (it parses n as a floating point number) and returns the parsed number, returns NaN as appropriate

// index.js
function preserveDecimal(n) {
    return parseFloat(n);
  }
  
  // test/indexTest.js
  it("preserves n's decimals (it parses n as a floating point number) and returns the parsed number", () => {
    expect(preserveDecimal("2.222")).toEqual(2.222); // Use toEqual
  });