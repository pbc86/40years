export function formatDate(value: unknown): string {
	const [year, month, day] = String(value).slice(0, 10).split('-')
	return `${day}/${month}/${year}`
}