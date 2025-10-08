'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Github, Linkedin, ChevronRight } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import ProjectCard from "../components/project-card"
import ContactForm from "../components/contact-form"
import LanguageSwitcher from "../components/language-switcher"
import { useLanguage } from "../lib/language-context"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all")
  const { t, language } = useLanguage()
  
  // Define all projects once
  const allProjects = [
    {
      id: "jogjalowker",
      image: "https://play-lh.googleusercontent.com/3NzYKqbgrrlFzR-iiOCFC4hlOjNIurQx2wkjU3K0hS3aFkzDwlUob_VkJVekRlrYCSGS=w480-h960-rw",
      title: "Jogjalowker",
      description: t.projectDescriptions.jogjalowker,
      playStoreUrl: "https://play.google.com/store/apps/details?id=id.co.jogjalowker",
      appStoreUrl: "https://apps.apple.com/id/app/jogjalowker/id1451701919",
      webUrl: "https://www.jogjalowker.co.id/",
    },
    {
      id: "charo",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/56/ea/76/56ea767d-57c8-ce41-1206-3f3ab79b0824/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp",
      title: "Charo - AI Dating Assistant",
      description: t.projectDescriptions.charo,
      playStoreUrl: undefined,
      appStoreUrl: "https://apps.apple.com/id/app/charo/id6670252822",
      webUrl: undefined,
    },
    {
      id: "surabayakarir",
      image: "https://play-lh.googleusercontent.com/vSD_o_AlJRa2nDPnHdlMZzfo40qGLwyNmLj0oOnFweCNkku0C3G4udd4hAt5fq_TEPjZ=w480-h960-rw",
      title: "Surabaya Karir",
      description: t.projectDescriptions.surabayakarir,
      playStoreUrl: "https://play.google.com/store/apps/details?id=id.co.surabayakarir",
      appStoreUrl: "https://apps.apple.com/id/app/surabaya-karir/id6479258923",
      webUrl: "https://surabayakarir.co.id/",
    },
    {
      id: "tracegrid",
      image: "https://play-lh.googleusercontent.com/HRgLFqVMaht90gwkDmn5r9pvbGqBUu8vomtXz8mUFoSeG4ondFo1Obd1dtf55z3BIw8=w480-h960-rw",
      title: "Tracegrid Mobile",
      description: t.projectDescriptions.tracegrid,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.tracegrid.app.mobile&hl=en",
      appStoreUrl: "https://apps.apple.com/id/app/tracegrid-mobile/id1071231716?l=id",
      webUrl: undefined,
    },
    {
      id: "divapress",
      image: "https://divapress-online.com/Assets/fo/img/logo-divapress.png",
      title: "Divapress Online",
      description: t.projectDescriptions.divapress,
      playStoreUrl: undefined,
      appStoreUrl: undefined,
      webUrl: "https://divapress-online.com/",
    },
    {
      id: "btp",
      image: "https://play-lh.googleusercontent.com/m_XSMTTOwJV5h99isOxEnqkfP8cs0PjfpVYJa4IYQoElQ6cmqqBfxBMyvs9tAMDRiSw=w480-h960-rw",
      title: "BTP Ranger",
      description: t.projectDescriptions.btp,
      playStoreUrl: "https://play.google.com/store/apps/details?id=sg.com.bythepark.ranger&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/btp-ranger/id1546573869",
      webUrl: undefined,
    },
    {
      id: "diomedia",
      image: "https://diomedia.id/wp-content/uploads/2022/08/Logo-Diomedia-Baru-1.png",
      title: "Diomedia",
      description: t.projectDescriptions.diomedia,
      playStoreUrl: undefined,
      appStoreUrl: undefined,
      webUrl: "https://diomedia.id/",
    },
    {
      id: "gamaaims",
      image: "https://play-lh.googleusercontent.com/TaXMTWe5Aqzf6AwaAQq9wxZasAEzpWaZG3xNH5h5m_CwrB8jXBtLmOh096y_K_xyM8U9=w480-h960-rw",
      title: "Gama AIMS",
      description: t.projectDescriptions.gamaaims,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.gamaaims.app&hl=en",
      appStoreUrl: "https://apps.apple.com/id/app/gama-aims/id1616273280",
      webUrl: undefined,
    },
    {
      id: "cantrikpustaka",
      image: "https://cantrikpustaka.com/wp-content/uploads/2021/11/logo-web.png",
      title: "Cantrik Pustaka",
      description: t.projectDescriptions.cantrikpustaka,
      playStoreUrl: undefined,
      appStoreUrl: undefined,
      webUrl: "https://cantrikpustaka.com/",
    },
    {
      id: "hyppe",
      image: "https://play-lh.googleusercontent.com/l6gCAxSr5Dzz3jS-VknF3210JI6wjwmzwTef9He68WW7o7jQBypSezOWAEgodPckn763=w480-h960-rw",
      title: "Hyppe",
      description: t.projectDescriptions.hyppe,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.hyppe.hyppeapp&hl=en",
      appStoreUrl: "https://apps.apple.com/id/app/hyppe-indonesia-social-media/id1545595684",
      webUrl: undefined,
    },
  ]

  // Filter projects based on URLs
  const mobileProjects = allProjects.filter(p => p.playStoreUrl || p.appStoreUrl)
  const webProjects = allProjects.filter(p => p.webUrl)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">muhtadi.dev</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {t.nav.about}
              </Link>
              <Link
                href="#technologies"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {t.nav.technologies}
              </Link>
              <Link
                href="#projects"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {t.nav.projects}
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {t.nav.contact}
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <div className="flex items-center space-x-1">
              <LanguageSwitcher />
              <Link href="https://github.com/imammuhtadi" target="_blank" rel="noreferrer">
                <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/imammuhtadi" target="_blank" rel="noreferrer">
                <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Flutter Developer
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Building beautiful, natively compiled applications for mobile, web, and desktop from a single
                    codebase.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button size="lg">
                      Contact Me
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#projects">
                    <Button size="lg" variant="outline">
                      View Projects
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero Image"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section> */}

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.about.title}</h2>
                <p className="pt-2 max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" dangerouslySetInnerHTML={{ __html: t.about.intro }}>
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/my-photo.jpeg"
                width={400}
                height={400}
                alt="Developer Profile"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{t.about.experience.title}</h3>
                      <p className="text-muted-foreground">
                        {t.about.experience.description}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{t.about.education.title}</h3>
                      <p className="text-muted-foreground">
                        {t.about.education.description}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{t.about.frontendSkills.title}</h3>
                      <p className="text-muted-foreground">
                        {t.about.frontendSkills.description}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{t.about.backendSkills.title}</h3>
                      <p className="text-muted-foreground">
                        {t.about.backendSkills.description}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.technologies.title}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.technologies.subtitle}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">{t.technologies.whatICanBuild}</h3>
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">{t.technologies.webApps.title}</h4>
                      <p className="text-muted-foreground">
                        {t.technologies.webApps.description}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">{t.technologies.mobileApps.title}</h4>
                      <p className="text-muted-foreground">
                        {t.technologies.mobileApps.description}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">{t.technologies.backendSystems.title}</h4>
                      <p className="text-muted-foreground">
                        {t.technologies.backendSystems.description}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">{t.technologies.fullstackSolutions.title}</h4>
                      <p className="text-muted-foreground">
                        {t.technologies.fullstackSolutions.description}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#61DAFB] bg-opacity-10 p-8 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#61DAFB]">React</div>
                    <div className="text-sm text-muted-foreground mt-2">{t.technologies.labels.webDevelopment}</div>
                  </div>
                </div>
                <div className="bg-[#000000] bg-opacity-10 p-8 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold">Next.js</div>
                    <div className="text-sm text-muted-foreground mt-2">{t.technologies.labels.reactFramework}</div>
                  </div>
                </div>
                <div className="bg-[#041e3c] p-8 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#02569B]">Flutter</div>
                    <div className="text-sm text-muted-foreground mt-2">{t.technologies.labels.mobileApps}</div>
                  </div>
                </div>
                <div className="bg-[#339933] bg-opacity-10 p-8 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#339933]">Node.js</div>
                    <div className="text-sm text-muted-foreground mt-2">{t.technologies.labels.backend}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.projects.title}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.projects.subtitle}
                </p>
              </div>
            </div>
            <Tabs defaultValue="all" className="w-full py-12" onValueChange={setActiveTab}>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="all">{t.projects.tabs.all}</TabsTrigger>
                <TabsTrigger value="web">{t.projects.tabs.web}</TabsTrigger>
                <TabsTrigger value="mobile">{t.projects.tabs.mobile}</TabsTrigger>
              </TabsList>
              
              {/* All Projects Tab */}
              <TabsContent value="all" className="mt-8">
                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {allProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </div>
              </TabsContent>
              
              {/* Mobile Projects Tab */}
              <TabsContent value="mobile" className="mt-8">
                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {mobileProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </div>
              </TabsContent>
              
              {/* Web Projects Tab */}
              <TabsContent value="web" className="mt-8">
                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {webProjects.length > 0 ? (
                    webProjects.map((project) => (
                      <ProjectCard key={project.id} {...project} />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-muted-foreground text-lg">{t.projects.comingSoon}</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.contact.title}</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.contact.subtitle}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">{t.contact.information.title}</h3>
                <p className="text-muted-foreground">{t.contact.information.description}</p>
                <div className="mt-4 grid gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>muhtadiimam05@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    <Link href="https://github.com/imammuhtadi" className="hover:underline" target="_blank" rel="noreferrer">
                      github.com/imammuhtadi
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    <Link href="https://www.linkedin.com/in/imammuhtadi/" className="hover:underline" target="_blank" rel="noreferrer">
                      linkedin.com/in/imammuhtadi
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">{t.contact.form.title}</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Imam Muhtadi. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/imammuhtadi" target="_blank" rel="noreferrer">
              <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/imammuhtadi" target="_blank" rel="noreferrer">
              <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

