import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { skill } from "../../typings";
import { client } from "../../sanity/lib/client";

const query = groq`*[_type == "skill"]`;

type data = {
    Skills: skill[]
}
export default async function getskills(req:NextApiRequest,res:NextApiResponse<data>){
  const Skills:skill[] = await client.fetch(query);
  res.status(200).json({Skills})
}