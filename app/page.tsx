import WorkPreview from "@/components/WorkPreview"
import { Project } from "@/lib/types"
import Image from "next/image"

const projects: Project[] = [
   {
      big_image_url: "/big_image.png",
      small_image_url: "/small_image.png",
      button_text: "LISTEN TO WHAT FEAR SOUNDS LIKE",
      link: "/project/soundwalk",
      paragraph_text: "What does it feel like to move through a city as a woman? Two audio pieces presented at K21 Kunstsammlung Nordrhein-Westfalen explore safety, fear, and the small invisible decisions women make every time they step outside. Research made audible."
   },
   {
      big_image_url: "/design/cocreation-urbanism-testingground-cork-heritage-design-shandon.png",
      small_image_url: "/design/report-mockup-cover-free-illustration.png",
      button_text: "SEE HOW CARE SHAPES THE CITY",
      link: "/project/co-creation",
      paragraph_text: "Co-creating Shandon’s historic heart brings feminist, community-led methods into urban regeneration. Walking, conversations and collective mapping reveal how care, safety and belonging shape the spaces we share and how small actions can prepare the ground for long-term change."
   },
    {
      big_image_url: "/design/zine-urban-research-design-feminist.png",
      small_image_url: "/design/connectiontothesea.jpg",
      button_text: "SEE MALMÖ’S PAST AND FUTURE",
      link: "/project/zine-sweden",
      paragraph_text: "Shaping Nyhamnen explores Malmö’s old ferry terminal through walking, interviews, and collage. A zine that layers memory, observation, and speculation to question how post-industrial cities remember, regenerate, and reconnect with the sea."
   },
   {
      big_image_url: "/design/mapping-map-digital-interactive-safety-fear-women-design.png",
      small_image_url: "/design/mapping-map-digital-interactive-safety-fear-women-illustration-visualization.jpg",
      button_text: "TRACE SAFETY ACROSS CORK",
      link: "/project/threads",
      paragraph_text: "threads is a visual map tracing everyday experiences of safety and unease in Cork, Ireland from a feminist perspective. It weaves together personal stories that reveal how identity, space, and time shape how we move through the city."
   },
   {
      big_image_url: "/design/interior-design-cozy-home-modern-mid-century-vintage.png",
      small_image_url: "/design/illustration-cologne-art-mural-1.jpg",
      button_text: "WELCOME TO MY HOME",
      link: "/project/home",
      paragraph_text: "Step inside my creative space, where thoughtful design transforms small areas into inviting, functional living spaces. Explore how I blend modern aesthetics with personal touches to make every square meter count."
   },
   {
      big_image_url: "/design/mt-popup-diversity-exhibiton-guerrilla.png",
      small_image_url: "/design/mt-popup-ux-diversity.png",
      button_text: "EMBRACE DIVERSITY",
      link: "/project/diversity",
      paragraph_text: "Breaking down prejudices through empathy – with the help of a pop-up event *revisited*"
   },
   {
      big_image_url: "/design/mt-illustration-typography.jpg",
      small_image_url: "/design/mt-illustration-summer-vibes.png",
      button_text: "EXPLORE VIBRANT STORIES",
      link: "/project/illustration",
      paragraph_text: "A journey of creativity and self-expression through vibrant digital art, where each piece tells a unique story."
   },
   {
      big_image_url: "/design/mt-workhabitat-key.jpg",
      small_image_url: "/design/mt-workhabitat-design.gif",
      button_text: "EXPLORE WORK HABITAT",
      link: "/project/office",
      paragraph_text: "The modular office strategy that grows with your startup. This brand-oriented office solution grows with a startup in a scalable way and was created in cooperation with academa GmbH."
   },
   {
      big_image_url: "/design/pop-up-exhibition-diveristy-design-spatial-urban.jpg",
      small_image_url: "/design/mt-beyond-selfie-pop-up-design-brand-illustration.png",
      button_text: "EXPLORE PROJECT",
      link: "/project/exhibition",
      paragraph_text: "A hybrid solution to discrimination and microaggressions in everyday life: Designing a series of interactive pop-up events to be human with each other *student project*"
   },
]

export default function Home() {
   return <div className="flex flex-col gap-8 mt-16 mb-24">
      <div className="w-full mx-auto flex justify-center">
         <Image className="max-w-[600px]" src="/hero_description.png" alt="Hero" width={2000} height={1000} />
      </div>
      <div className="flex flex-col gap-16 mt-16">
         {projects.map((project) => (
            <WorkPreview key={project.link} project={project} />
         ))}
      </div>
   </div>
}
