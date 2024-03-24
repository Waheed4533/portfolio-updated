import {Header} from "./Components/Header";
import {Hero} from "./Components/Hero";
import {About} from "./Components/About";
import {Experiencee} from "./Components/Experience";
import {Skills} from "./Components/Skills";
import {Projects} from "./Components/Projects";
import {Contact} from "./Components/Contact";
import Link from "next/link";
import { PageInfo, skill, Project, Experience, Social } from "../../typings";
import { GetStaticProps } from "next";
import { fetchpageinfo } from "../../utils/fetchpageinfo";
import { fetchskills } from "../../utils/fetchskills";
import { fetchprojects } from "../../utils/fetchprojects";
import { fetchexperience } from "../../utils/fetchexperience";
import { fetchsocial } from "../../utils/fetchsocial";
type maintype = {
pageinfo: PageInfo;
skills: skill[];
projects: Project[];
experience: Experience[];
socials: Social[]
}
 const Home: React.FC<maintype> = ({pageinfo,skills,projects,experience,socials})=> {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thumb-rounded-400 ">
  
      <Header socials={socials}/>
      <section id="hero" className="snap-start" >
      <Hero hero={pageinfo}/>
      </section>
      <section id="about" className="snap-center"> 
        <About about={pageinfo}/>
      </section>
      <section id="experience" className="snap-center">
        <Experiencee experience={experience}/>
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>
      <section id="projects" className="snap-start">
        <Projects project={projects}/>
      </section>
      <section id="contact" className="snap-start">
        <Contact/>
      </section>
      
      <Link href={"#hero"}>
<footer className="sticky bottom-3 w-full cursor-pointer">
 <div className="flex justify-center items-center ">
 <img  className="w-10 h-10 rounded-full filter hover:grayscale-0 grayscale"
 src="/FB_IMG_1677007995185 (1).jpg" alt="waheed" />
 </div>
</footer>
      </Link>   
      
       </div>

  );
}
export default Home;
export const getstaticprops:GetStaticProps<maintype> = async () => {
  const pageinfo: PageInfo = (await fetchpageinfo())[0];
  const skills: skill[] = await fetchskills();
  const projects: Project[] = await fetchprojects();
  const experience: Experience[] = await fetchexperience();
  const socials: Social[] = await fetchsocial();
  return{
    props: {
      pageinfo,
      skills,
      projects,
      experience,
      socials,
    }
  }
}