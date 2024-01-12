import { serverSupabaseClient } from '#supabase/server'
import Airtable from 'airtable'
// import { record } from 'zod'

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event)

	const body = await readBody(event)

	var base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
		'appRaAlKfaCArFizD'
	)

	base('Contat').create(
		[
			{
				fields: {
					Name: body.name,
					Email: body.email,
					Message: body.message
				}
			}
		],
		function (err, result) {
			if (err) {
				throw createError({
					status: 500,
					statusMessage: "Your form didn't submit"
				})
			}
			return result
		}
	)
})
