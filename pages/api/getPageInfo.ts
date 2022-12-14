import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import { sanityClient } from '../../sanity'
import type { PageInfo } from '../../typing'

const query = groq`*[_type == 'pageinfo'][0]{
  ...,
  socials[]->
}
`

type Data = {
    pageinfo: PageInfo
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const pageinfo : PageInfo = await sanityClient.fetch(query)
    res.status(200).json({ pageinfo })
  }
  