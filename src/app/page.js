import Image from "next/image";
import styles from "./page.module.css";
import dynamic from 'next/dynamic'
import { CssBaseline, Divider } from "@mui/material";
import { Roboto } from "next/font/google";
import HeroSection from "@/components/sections/HeroSection";

const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), {
  ssr: false,
})
const Aboutme = dynamic(() => import('@/components/sections/Aboutme'), {
  ssr: false,
})
const Skills = dynamic(() => import('@/components/sections/Skills'), {
  ssr: false,
})
const SocialMedia = dynamic(() => import('@/components/SocialMedia'), {
  ssr: false,
})
const Experience = dynamic(() => import('@/components/sections/Experience'), {
  ssr: false,
})

// const roboto = Roboto({subsets: ['latin'],weight:["300","400","500","700"]})

export default function Home() {
  return (
    <main>
      <CssBaseline />
      <HeroSection />
      <Divider />
      <ProjectsSection source="work" idSection="work" />
      <Divider />
      <ProjectsSection source="personal" idSection="personal-projects" />
      <Divider />
      <Aboutme />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <SocialMedia />
    </main>
  );
}
