#  ⏰ Timestamp
The open source package files for Node.js / Javascript and multi-purpose utility library built for Discord bots, backend apps, and modern JS tools — featuring modular support for timestamps, environment config, and more.

## 📦 Installation

```bash
npm install @uocdev/timestamp-hasei
```

## ⚒️ Module & Features 
1. environment<br>
custom configuration directory for your application
```js
const env = require('my-utils-lib').environment;

env.setEnvironment({
  timezone: 'Asia/Jakarta',
  defaultFormat: 'f',
});

console.log(env.getEnv('timezone')); // Asia/Jakarta
console.log(env.getAllEnv());
```
**Method**
| Method   | Description   |
|------------|------------|
| `setEnvironment(opts)` | Set Timezone, Formats, etc|
| `getEnv(key)`| Get specific config |
| `getAllEnv()`| Get all Environment variabel values |
| `resetEnvironment` | Reset to default values |

2. Timestamp<br>
timestamp formatting handlers, support discord and global applications
```js
const ts = require('my-utils-lib').timestamp;

ts.init({ defaultFormat: 'R' }); // Optional setup

console.log(ts.discord(Date.now(), 'F')); // <t:UNIX:F>
console.log(ts.iso());                    // 2025-06-13T12:34:56.000Z
console.log(ts.unix());                   // 1718290000
```
**Method**
| Method   | Description   |
|------------|------------|
| `init(opts)`| Set default Timezone/format|
| `discord(date, format)` | Output `<t:UNIX:format` String |
| `iso(date)` | Return ISO string |
| `unix(date)` | Return UNIX Timestamp |
| `now()` | Return `Date` Object |

**Format Codes (Discord):**

t: Short time (16:20)

T: Long time (16:20:30)

d: Short date (13/06/2025)

D: Long date (13 June 2025)

f: Full date + time (13 June 2025 16:20)

F: Day, date & time (Friday, 13 June 2025 16:20)

R: Relative (in 2 hours)

## 💬 Feedback / Issue?
We are open source project, free feel open PR(s) for make this package better.
Join server discord for support [discord.gg/fperp](https://discord.gg/wQmKyRm5rx)
