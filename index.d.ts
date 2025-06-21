export function now(locale?: string): string;

export function saveTimestamp(locale?: string): string;
// 🆕 Additional Timestamp Formatters

/**
 * Returns an HTML5-compatible datetime string (e.g., for `<time datetime="...">`)
 */
export function htmlTime(date?: Date | string | number): string;

/**
 * Returns a UNIX timestamp (seconds since epoch)
 */
export function unix(date?: Date | string | number): number;

/**
 * Returns Discord-compatible timestamp format: `<t:unix:f>`
 */
export function discordFull(date?: Date | string | number): string;

/**
 * Returns Android-compatible ISO-8601 string
 */
export function androidISO(date?: Date | string | number): string;
// 1.1 Encode / Decode
export function encodeBase64(input: string): string;
export function decodeBase64(encoded: string): string;
export function encodeUTF(input: string): string;
export function decodeUTF(encoded: string): string;

// 1.2 Timezones / Compare
export function getGMTInfo(): {
  nowUTC: string;
  offsetMinutes: number;
  offsetHours: number;
  offsetSign: '+' | '-';
};

export function compareTimezones(tz1: string, tz2: string): {
  tz1: string;
  tz2: string;
  offset1: number;
  offset2: number;
  differenceHours: number;
  ahead: string;
};

// 1.3 Sync
export function syncTime(callback: (
  err: Error | null,
  data?: {
    syncedTime: Date;
    localTime: Date;
    driftMilliseconds: number;
    driftSeconds: number;
    timezone: string;
    raw: any;
  }) => void
): void;

export function syncTimeFrom(
  url: string,
  callback: (
    err: Error | null,
    data?: {
      syncedTime: Date;
      localTime: Date;
      driftMilliseconds: number;
      driftSeconds: number;
      timezone: string;
      raw: any;
    }) => void
): void;

export function syncAndCorrect(callback: (
  err: Error | null,
  data?: {
    correctedTime: Date;
    syncedTime: Date;
    driftMilliseconds: number;
    driftSeconds: number;
    localTime: Date;
    timezone: string;
    raw: any;
  }) => void
): void;

export function autoSync(
  intervalMs?: number,
  onSync?: (data: {
    syncedTime: Date;
    localTime: Date;
    driftMilliseconds: number;
    driftSeconds: number;
    timezone: string;
    raw: any;
  }) => void
): NodeJS.Timer;

// 1.4 Schedule
export function scheduleAt(
  targetTime: string | Date | number,
  callback: (err: Error | null, ranTime?: Date) => void
): NodeJS.Timeout;

export function scheduleIn(
  delayMs: number,
  callback: (err: Error | null, ranTime?: Date) => void
): NodeJS.Timeout;

export function scheduleRepeat(
  intervalMs: number,
  callback: (ranTime: Date) => void
): NodeJS.Timer;

export function scheduleCron(
  timeStr: string,
  callback: (ranTime: Date) => void
): void;