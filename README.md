#  ⏰ Timestamp
The open source package files for Node.js / Javascript and multi-purpose utility library built for Discord bots, backend apps, and modern JS tools — featuring modular support for timestamps, environment config, encode or decode, synchronized, schedule and more!.

## 📦 Installation

```bash
npm install @uocdev/timestamp-hasei
```

## ⚒️ Module & Features 
### 1. Timestamp 
Example:
```js
const {
  now,
  unix,
  discordFull,
  htmlTime,
  androidISO,
  saveTimestamp
} = require('@uocdev/timestamp-hasei');

const filePath = saveTimestamp('id-ID')  // saveTimestamp when run this script

console.log(now());                    // e.g., "18/06/2025, 15:00:00"
console.log(unix());                   // e.g., 1718727000000
console.log(discordFull());            // e.g., "<t:1718727000:F>"
console.log(htmlTime());              // e.g., <time datetime="...">Wed Jun 18 2025</time>
console.log(androidISO());            // e.g., "2025-06-18T15:00:00.000Z"
```

**Method**
| Function   | Description   | Output Example  |
|------------|---------------|------------------
| `now(locale)` | Get current time formatted by locale (default:`id-ID`)| `18/06/2025, 15:00:00"` |
| `unix()`| Get current UNIX timestamp in milliseconds | `1718727000000` |
| `discordFull()`| Get full Discord `<t:...:F>` timestamp string | `<t:1718727000:F>` |
| `htmlTime()` | Get a semantic HTML `<time>` element with ISO string |`<time datetime="...">Wed Jun 18 2025</time>` |
|`androidISO()` | Get ISO string for Android Date/Java compatible format | `2025-06-18T15:00:00.000Z` |
| `saveTimestamp()` | Save currently Timestamp to `./logs/*.txt` file | `logs/timestamp-2025-6-18.txt`


**Platform Support**
| Platform     | Works With  | Notes  |
|--------------|-------------|--------|
| Discord | Node.js/ discord.js | Use `discordFull()` for message embeds |
| Website | Vanilla JS or bundler | `htmlTime()` and `now()` work directly |
| Android | WebView / JS Engines | Use `androidISO()` or `unix()` |
| Windows/Linux | Node.js, Electron, CLI | All functions supported natively |

### 1.1 Encode / Decode
Example:
```js
const {
  now,
  base64Encode,
  base64Decode,
  utfEncode,
  utfDecode
} = require('@uocdev/timestamp-hasei');

const timestamp = now();

const base64 = base64Encode(timestamp);
const decodedBase64 = base64Decode(base64);

const utf = utfEncode(timestamp);
const decodedUtf = utfDecode(utf);

console.log("Original:", timestamp);
console.log("Base64 Encoded:", base64);
console.log("Base64 Decoded:", decodedBase64);
console.log("UTF-8 Encoded:", utf);
console.log("UTF-8 Decoded:", decodedUtf);
```
**Method**
| Function | Description | Output Example |
|----------|-------------|----------------|
|`base64Encode(str)` |Encode timestamp as Base64 string |`MTgvMDYvMjAyNSwgMjM6NTk6NTk=` |
|`base64Decode(str)` |Decode Base64 string back to UTF-8 |`18/06/2025, 23:59:59` |
|`utfEncode(str)` |Encode timestamp as UTF-8 Buffer |`<Buffer 31 38 2f ...>` |
|`utfDecode(buffer)` |Decode UTF-8 Buffer back to readable string |`18/06/2025, 23:59:59` |

### 1.2 Timezone / Compare GMT UTC
Example:
```js
const { getTimezoneInfo, compareGmtUtc } = require('@uocdev/timestamp-hasei');

const info = getTimezoneInfo();
console.log("Timezone Info:");
console.log("Timezone Name:", info.timezoneName);
console.log("GMT Offset:", info.gmtOffset);
console.log("UTC Offset:", info.utcOffset);
console.log("Raw Offset (minutes):", info.rawOffsetMinutes);

const result = compareGmtUtc();

console.log("GMT Format:", result.gmtFormatted);
console.log("UTC Format:", result.utcFormatted);
console.log("Are GMT and UTC Equal Right Now?", result.areEqual ? "Yes" : "No");
```
**Method**
| Function | Description | Output Example |
|----------|-------------|----------------|
|`getTimezoneInfo()` | Return object with GMT/UTC offset & name | `{ gmtOffset: 'GMT+07', ... }` |
|`compareGmtUtc()` | Compares current GMT and UTC formats |`{ gmtFormatted, utcFormatted, areEqual }` |

### 1.3 Synchronized
Example:
```js
// syncTime()
const { syncTime } = require('@uocdev/timestamp-hasei');

syncTime((err, result) => {
  if (err) return console.error('❌ Sync failed:', err.message);

  console.log('Synced Time:', result.syncedTime.toISOString());
  console.log('Local Time:', result.localTime.toISOString());
  console.log('Drift:', result.driftMilliseconds, 'ms');
  console.log('Timezone:', result.timezone);
});

// syncTimeFrom()
const { syncTimeFrom } = require('@uocdev/timestamp-hasei');
syncTimeFrom('https://worldtimeapi.org/api/timezone/Asia/Tokyo', console.log);

// syncAndCorrect()
const { syncAndCorrect } = require('@uocdev/timestamp-hasei');
syncAndCorrect((err, data) => {
  if (!err) {
    console.log("✅ Corrected Time:", data.correctedTime.toISOString());
  }
});

// autoSync()
const { autoSync } = require('@uocdev/timestamp-hasei');

const interval = autoSync(10000, (data) => {
  console.log("🔁 Auto Synced:", data.syncedTime.toISOString(), "Drift:", data.driftSeconds, "s");
});

// To stop auto sync: clearInterval(interval);
```
**Method**
| Function | Description | Output Example |
|----------|-------------|----------------|
|`syncTime(cb)`|Sync with default API `(worldtimeapi.org)`|`{ syncedTime, drift }`|
|`syncTimeFrom(url, cb)`|Sync with custom API (must return datetime field)|`{ syncedTime, drift }`|
|`syncAndCorrect(cb)`|Returns corrected local time removing drift|`{ correctedTime, ... }`|
|`autoSync(ms, cb)`|Auto-sync every X milliseconds|`setInterval` reference|

### 1.4 Schedule
Example:
```js
const {
  scheduleAt,
  scheduleIn,
  scheduleRepeat,
  scheduleCron
} = require('@uocdev/timestamp-hasei');

// Run 5 seconds from now
scheduleIn(5000, () => console.log('⏱️ 5 seconds passed'));

// Run at exact time
scheduleAt('2025-06-19T15:00:00Z', (err, time) => {
  if (!err) console.log('📌 Ran at', time.toISOString());
});

// Repeat every 10 seconds
scheduleRepeat(10000, (time) => console.log('🔁 Repeated at', time.toISOString()));

// Daily at 18:30
scheduleCron('18:30', (time) => console.log('🕒 CRON triggered at', time.toLocaleTimeString()));
```
**Method**
| Function | Description | Output Example |
|----------|-------------|----------------|
|`scheduleAt(date, cb)`|Schedule task for a future timestamp|`2025-06-19T15:00`|
|`scheduleIn(ms, CD)`|Delay execution for X ms|`5000`|
|`scheduleRepeat(ms, cb)`|Repeat every X ms|`10000`|
|`scheduleCron("HH:MM", cb)`|Schedule at a fixed time every day|`"22:15"`|

### 1.5 Validator
Example:
```js
const { validator } = require('@uocdev/timestamp-hasei');

console.log(validator.isString("Hello"));               // true
console.log(validator.isNumber("123"));                 // true
console.log(validator.isValidTime("23:59"));            // true
console.log(validator.isValidTimezone("Asia/Tokyo"));   // true
```
**Method**
| Function | Description | Example Input | Returns |
|----------|-------------|---------------|--------|
|`validator.isString()`|Checks if value is a string|`hello`|`True`|
|`validator.isNumber()`|Checks if value is a number or numeric string|`123.45`|`True`|
|`validator.isValidTime()`|Checks if value is valid 24-hour `HH:mm` format|`18.30`|`True`|
|`validator.isValidTimezone()`|Validates if timezone is IANA-compliant|`Europe/London`|`True`|

### 1.6 Formatters
Example:
```js
const { formatISO, formatCompact, formatReadable } = require('@uocdev/timestamp-hasei');

console.log(formatISO());        // 2025-06-18T14:55:00.000Z
console.log(formatCompact());    // 20250618_2155
console.log(formatReadable());   // Wed, Jun 18, 2025, 21:55
```
**Method**
| Function | Description | Example Output |
|----------|-------------|----------------|
|`formatISO()`|ISO-8601 timestamp|`2025-06-18T15:00:00.000Z`|
|`formatCompact()`|Clean file-friendly format|`20250618_1500`|
|`formatReadable()`|Human-readable with weekday|`Wed, Jun 18, 2025, 15:00`|

## 🐞 Know Error
HTTP Error (Synchronized): Because we use free API this can make you disconnected from timestamp<br>
Module Not Found: Some module not properly when importing<br>
Import Error/Module Error: We use CommonJS import `const` not use ESM Import (open pull request for ide/how to configure this)

## 💬 Feedback / Issue?
We are open source project, free feel open PR(s) for make this package better.
Join server discord for support [discord.gg/fperp](https://discord.gg/wQmKyRm5rx)

#### 📚 Additional source
Repo: https://github.com/UocDev/timestamp <br>
Discord Server: https://discord.gg/wQmKyRm5rx <br>
GitHub: https://github.com <br>
Node.js: https://nodejs.org <br>
NPM: https://npmjs.com <br>
Javascript: https://en.wikipedia.org/wiki/JavaScript
