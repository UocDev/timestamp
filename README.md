#  ⏰ Timestamp
The open source package files for Node.js / Javascript and multi-purpose utility library built for Discord bots, backend apps, and modern JS tools — featuring modular support for timestamps, environment config, and more.

## 📦 Installation

```bash
npm install @uocdev/timestamp-hasei
```

## ⚒️ Module & Features 
> [!CAUTION]
> for users use Node version 18 it will get some errors, we move from node v18 into node v20
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

### 1.1 Encode / Decode (Timestamp)
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

## 💬 Feedback / Issue?
We are open source project, free feel open PR(s) for make this package better.
Join server discord for support [discord.gg/fperp](https://discord.gg/wQmKyRm5rx)
