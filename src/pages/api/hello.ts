// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Static Generate (SSG)では使えないので、SSGの場合削除

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
