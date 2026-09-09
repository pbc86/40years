const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function formatDate(value: unknown): string {
	const [year, month, day] = String(value).slice(0, 10).split('-')
	return `${day}/${monthNames[Number(month) - 1]}/${year}`
}