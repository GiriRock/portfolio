import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import ContactMe from '../components/ContactMe'
import { Experience, PageInfo, Skill, Social } from '../typing'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'


type Props = {
  pageinfo: PageInfo
  experiences: Experience[]
  skills: Skill[]
  socials: Social[]
}

const Home = ({ pageinfo, experiences, skills, socials }: Props) => {
  return (
    <div className='bg-[rgb(34,34,34)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Head>
        <title>Giri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <section id='hero' className='snap-start'>
        <Hero pageinfo={pageinfo}/>
      </section>

      <section id='about' className='snap-center'>
        <About pageinfo={pageinfo}/>
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe pageinfo = {pageinfo}/>
      </section>

    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageinfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const socials: Social[] = await fetchSocials()

  return {
    props: {
      pageinfo,
      experiences,
      skills,
      socials,
    },
    revalidate: 10
  }

}