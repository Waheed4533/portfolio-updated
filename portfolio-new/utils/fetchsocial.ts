import { Social } from "../typings";
export async function fetchsocial() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getsocial`);
    const data = await res.json();
    const social: Social[] = data.social;
    return social
}