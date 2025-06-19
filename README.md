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

## 💬 Feedback / Issue?
We are open source project, free feel open PR(s) for make this package better.
Join server discord for support [discord.gg/fperp](https://discord.gg/wQmKyRm5rx)
