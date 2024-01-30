import { z } from 'zod'

const formSchema = z.object({
	name: z.string().min(1, { message: 'Email is required' }),
	email: z
		.string()
		.min(1, { message: 'Email is required' })
		.email({ message: 'Please enter a valid email "xxx@xxx.xxx"' }),
	message: z.string().min(1, { message: 'Message is required' }).max(15, {
		message: 'Bio must be at least 10 characters.'
	})
})

export default defineEventHandler(async (event) => {
	const body = await readFormData(event)
	setResponseStatus(event, 200)
	return {
		status: 200
	}
})
