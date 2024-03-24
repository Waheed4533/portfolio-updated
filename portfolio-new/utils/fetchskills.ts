import { skill } from "../typings";
export async function fetchskills() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getskills`);
    const data = await res.json();
    const skills: skill[] = data.Skills;
    return skills
}