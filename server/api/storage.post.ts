import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event)

	const body = await readBody(event)

	console.log(body)

	const uuid = crypto.randomUUID()
	const { data, error } = await client.storage.from('Agape').upload(uuid, body)
	if (error) {
		console.log(error)
	} else {
		console.log(
			`https://nfsivlvxfmhroorykvak.supabase.co/storage/v1/object/public/Agape/${data.path}`
		)
	}
	return
})
