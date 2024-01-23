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
	const body = await readBody(event)
	const result = formSchema.safeParse(body)
	if (result.success) {
		console.log(result)
		return result
	} else {
		throw createError({
			statusCode: 400,
			statusMessage: 'Something went wrong'
		})
	}
})
