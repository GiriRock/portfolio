import { Experience } from "../typing";

export const fetchExperiences = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`)
    // console.log(res)
    const data = await res.json()
    const experiences: Experience[] = data.experiences;
    return experiences;
}