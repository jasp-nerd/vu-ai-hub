interface AcademicPeriod {
  period: number;
  start: string; // ISO date 'YYYY-MM-DD'
  end: string;
  label: string;
}

interface AcademicYear {
  year: string; // e.g. '2025-2026'
  periods: AcademicPeriod[];
}

const ACADEMIC_YEARS: AcademicYear[] = [
  {
    year: '2025-2026',
    periods: [
      { period: 1, start: '2025-09-01', end: '2025-10-24', label: 'Period 1' },
      { period: 2, start: '2025-10-27', end: '2025-12-19', label: 'Period 2' },
      { period: 3, start: '2026-01-05', end: '2026-01-30', label: 'Period 3' },
      { period: 4, start: '2026-02-02', end: '2026-03-27', label: 'Period 4' },
      { period: 5, start: '2026-03-30', end: '2026-05-22', label: 'Period 5' },
      { period: 6, start: '2026-05-25', end: '2026-06-26', label: 'Period 6' },
    ],
  },
  // Derived from "Year Schedule B Artificial Intelligence 2026-2027" (P1 = week 36)
  {
    year: '2026-2027',
    periods: [
      { period: 1, start: '2026-08-31', end: '2026-10-23', label: 'Period 1' },
      { period: 2, start: '2026-10-26', end: '2026-12-18', label: 'Period 2' },
      { period: 3, start: '2027-01-04', end: '2027-01-29', label: 'Period 3' },
      { period: 4, start: '2027-02-01', end: '2027-03-26', label: 'Period 4' },
      { period: 5, start: '2027-03-29', end: '2027-05-21', label: 'Period 5' },
      { period: 6, start: '2027-05-24', end: '2027-06-25', label: 'Period 6' },
    ],
  },
];

export interface CurrentPeriodInfo {
  period: number;
  label: string;
  academicYear: string;
  isGap: boolean;
}

function parseDate(iso: string): Date {
  return new Date(iso + 'T00:00:00');
}

function getDateOverride(): Date | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const dateParam = params.get('date');
  if (!dateParam) return null;
  const parsed = new Date(dateParam + 'T00:00:00');
  return isNaN(parsed.getTime()) ? null : parsed;
}

export function getCurrentPeriod(date?: Date): CurrentPeriodInfo | null {
  const now = date ?? getDateOverride() ?? new Date();

  // Find the academic year that contains this date
  for (const ay of ACADEMIC_YEARS) {
    const firstStart = parseDate(ay.periods[0].start);
    const lastEnd = parseDate(ay.periods[ay.periods.length - 1].end);

    // Check if date is before this academic year
    if (now < firstStart) continue;
    // Check if date is after this academic year (summer break → return null)
    if (now > lastEnd) continue;

    // Date falls within the academic year range — find the exact period
    for (const p of ay.periods) {
      const start = parseDate(p.start);
      const end = parseDate(p.end);
      if (now >= start && now <= end) {
        return { period: p.period, label: p.label, academicYear: ay.year, isGap: false };
      }
    }

    // Date is within the year range but in a gap between periods → find next period
    for (const p of ay.periods) {
      const start = parseDate(p.start);
      if (now < start) {
        return { period: p.period, label: p.label, academicYear: ay.year, isGap: true };
      }
    }
  }

  // No matching academic year → return null (summer or no data)
  return null;
}
