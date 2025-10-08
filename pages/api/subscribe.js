export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })
  const { email } = req.body || {}
  if (!email) return res.status(400).json({ message: 'Missing email' })
  return res.status(200).json({ ok: true })
}
JS