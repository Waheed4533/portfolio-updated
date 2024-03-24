import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { Social } from "../../typings";
import { client } from "../../sanity/lib/client";

const query = groq`*[_type == "social"]`;

type data = {
    socials: Social[]
}
export default async function getsocial(req:NextApiRequest,res:NextApiResponse<data>){
  const socials:Social[] = await client.fetch(query);
  res.status(200).json({socials})
}