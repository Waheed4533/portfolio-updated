import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

import { Project } from "../../typings";
import { client } from "../../sanity/lib/client";

const query = groq`*[_type == "project"]{
    ...,
    technologies[]->
}`;

type data = {
    Projects: Project[]
}
export default async function getprojects(req:NextApiRequest,res:NextApiResponse<data>){
  const Projects:Project[] = await client.fetch(query);
  res.status(200).json({Projects})
}