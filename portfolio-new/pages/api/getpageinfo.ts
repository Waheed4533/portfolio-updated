import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { PageInfo } from "../../typings";
import { client } from "../../sanity/lib/client";

const query = groq`*[_type == "pageinfo"]`;

type data = {
    Pageinfo: PageInfo[]
}
export default async function getpageinfo(req:NextApiRequest,res:NextApiResponse<data>){
  const Pageinfo:PageInfo[] = await client.fetch(query);
  res.status(200).json({Pageinfo})
}