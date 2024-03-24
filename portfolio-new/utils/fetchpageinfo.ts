import { PageInfo } from "../typings";
export async function fetchpageinfo() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getpageinfo`);
    const data = await res.json();
    const pageinfo: PageInfo[] = data.pageinfo;
//    console.log(pageinfo)
    return pageinfo
    
}