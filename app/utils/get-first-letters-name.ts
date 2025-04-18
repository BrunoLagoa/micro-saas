export function getFirstLettersFromName(name?: string | null): string {
  if (!name) return '';

  const names = name.trim().split(' ');

  if (names.length === 0) return '';

  const firstName = names[0];
  const lastName = names.length > 1 ? names[names.length - 1] : '';

  const firstInitial = firstName[0]?.toUpperCase() || '';
  const lastInitial = lastName[0]?.toUpperCase() || '';

  return `${firstInitial}${lastInitial}`;
}
