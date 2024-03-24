import { Experience } from "../typings";
export async function fetchexperience() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getexperience`);
    const data = await res.json();
    const experience: Experience[] = data.experience;
    return experience
}