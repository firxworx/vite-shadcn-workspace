/**
 * Return the age of the person given a birthdate.
 *
 * If a string is provided it is assumed to be parseable by `Date()` and to be a valid date.
 */
export function calculateAge(birthday: string | Date): number {
  const birthDate = typeof birthday === 'string' ? new Date(birthday) : birthday
  const today = new Date()
  const yearDiff = today.getFullYear() - birthDate.getFullYear()

  const isTodayBeforeBirthday =
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())

  return isTodayBeforeBirthday ? yearDiff - 1 : yearDiff
}
