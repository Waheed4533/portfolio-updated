import { Project } from "../typings";
export async function fetchprojects() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getprojects`);
    const data = await res.json();
    const Projects: Project[] = data.Projects;
    return Projects
}