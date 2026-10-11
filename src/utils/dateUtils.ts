export function formatDateTime(isoString: string): string {
  if (!isoString) return '';
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return isoString;

  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

export function formatRelativeCountdown(isoString: string): { label: string; isOverdue: boolean; daysRemaining: number } {
  if (!isoString) return { label: 'No date', isOverdue: false, daysRemaining: 0 };
  const target = new Date(isoString);
  if (isNaN(target.getTime())) return { label: 'Invalid date', isOverdue: false, daysRemaining: 0 };

  const now = new Date();
  const diffMs = target.getTime() - now.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffHours = Math.floor(diffSec / 3600);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMs < 0) {
    const absHours = Math.abs(diffHours);
    const absDays = Math.abs(diffDays);
    if (absDays >= 1) {
      return { label: `Overdue by ${absDays} day${absDays > 1 ? 's' : ''}`, isOverdue: true, daysRemaining: -absDays };
    }
    return { label: `Overdue by ${absHours} hour${absHours > 1 ? 's' : ''}`, isOverdue: true, daysRemaining: 0 };
  }

  if (diffDays === 0) {
    if (diffHours <= 1) {
      const minutes = Math.max(1, Math.floor(diffSec / 60));
      return { label: `Due in ${minutes} min${minutes > 1 ? 's' : ''}`, isOverdue: false, daysRemaining: 0 };
    }
    return { label: `Due in ${diffHours} hours today`, isOverdue: false, daysRemaining: 0 };
  }

  if (diffDays === 1) {
    return { label: 'Due tomorrow', isOverdue: false, daysRemaining: 1 };
  }

  return { label: `In ${diffDays} days`, isOverdue: false, daysRemaining: diffDays };
}

export function isDateWithinDays(isoString: string, days: number): boolean {
  if (!isoString) return false;
  const target = new Date(isoString);
  const now = new Date();
  const diffMs = target.getTime() - now.getTime();
  return diffMs >= 0 && diffMs <= days * 24 * 60 * 60 * 1000;
}

export function isDateOverdue(isoString: string): boolean {
  if (!isoString) return false;
  const target = new Date(isoString);
  return target.getTime() < Date.now();
}
