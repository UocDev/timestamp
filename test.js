// test.js
const { now } = require('./index');
const assert = require('assert');

console.log("🧪 Running Timestamp HASEI test...");

const result = now(); // Or whatever function you're testing
assert.ok(result, "Expected result to be truthy");

console.log("✅ Test passed!", result);