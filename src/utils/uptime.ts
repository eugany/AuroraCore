/** Project start date: January 29, 2026 */
const PROJECT_START = new Date('2026-01-29T00:00:00Z');

export function getUptimeDays(): number {
  const now = new Date();
  const diff = now.getTime() - PROJECT_START.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
