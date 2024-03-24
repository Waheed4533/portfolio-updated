import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { Experience } from "../../typings";
import { client } from "../../sanity/lib/client";

const query = groq`*[_type == "experience"]{
    ...,
    technologies[]->
}`;

type data = {
    Experiences: Experience[]
}
export default async function getexperience(req:NextApiRequest,res:NextApiResponse<data>){
  const Experiences:Experience[] = await client.fetch(query);
  res.status(200).json({Experiences})
}