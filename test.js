import now from './index.js';
import assert from 'assert';

console.log("🧪 Running Timestamp HASEI test...");

const result = now(); // Or whatever function you're testing
assert.ok(result, "Expected result to be truthy");

console.log("✅ Test passed!", result);