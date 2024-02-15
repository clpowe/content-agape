import { writeFile } from 'fs/promises'

// import { serverSupabaseClient } from '#supabase/server'
// import Airtable from 'airtable'
// import { record } from 'zod'

export default defineEventHandler(async (event) => {
	// const client = await serverSupabaseClient(event)

	const formData = await readFormData(event)
	const file = formData.find((item) => item.type == 'application/pdf')
	console.log(formData)
	// var base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
	// 	'appRaAlKfaCArFizD'
	// )

	// base('Contat').create(
	// 	[
	// 		{
	// 			fields: {
	// 				Name: body.name,
	// 				Email: body.email,
	// 				Message: body.message
	// 			}
	// 		}
	// 	],
	// 	function (err, result) {
	// 		if (err) {
	// 			throw createError({
	// 				status: 500,
	// 				statusMessage: "Your form didn't submit"
	// 			})
	// 		}
	// 		return result
	// 	}
	// )

	const path = './public/uploads' + file.filename

	await writeFile(path, file.data)

	console.log(path)
})
