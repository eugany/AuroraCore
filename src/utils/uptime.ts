const START_DATE_UTC = new Date(Date.UTC(2026, 0, 29));
const MS_PER_DAY = 1000 * 60 * 60 * 24;

export function getUptimeDay(now: Date = new Date()): number {
  const day = Math.floor((now.getTime() - START_DATE_UTC.getTime()) / MS_PER_DAY) + 1;
  return Math.max(1, day);
}
