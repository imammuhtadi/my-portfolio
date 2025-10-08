'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Github, Linkedin, ChevronRight } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import ProjectCard from "../components/project-card"
import ContactForm from "../components/contact-form"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all")
  
  // Define all projects once
  const allProjects = [
    {
      id: "jogjalowker",
      image: "https://play-lh.googleusercontent.com/3NzYKqbgrrlFzR-iiOCFC4hlOjNIurQx2wkjU3K0hS3aFkzDwlUob_VkJVekRlrYCSGS=w480-h960-rw",
      title: "Jogjalowker",
      description: "JogjaLowker is the leading job vacancy information portal in Jogja, with hundreds of thousands of job seekers and collaborations with thousands of companies.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=id.co.jogjalowker",
      appStoreUrl: "https://apps.apple.com/id/app/jogjalowker/id1451701919",
      webUrl: "https://www.jogjalowker.co.id/",
    },
    {
      id: "charo",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/56/ea/76/56ea767d-57c8-ce41-1206-3f3ab79b0824/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp",
      title: "Charo - AI Dating Assistant",
      description: "Charo is a French AI-driven dating assistant providing auto-generated tips and advice based on user conversation screenshots.",
      playStoreUrl: undefined,
      appStoreUrl: "https://apps.apple.com/id/app/charo/id6670252822",
      webUrl: undefined,
    },
    {
      id: "surabayakarir",
      image: "https://play-lh.googleusercontent.com/vSD_o_AlJRa2nDPnHdlMZzfo40qGLwyNmLj0oOnFweCNkku0C3G4udd4hAt5fq_TEPjZ=w480-h960-rw",
      title: "Surabaya Karir",
      description: "Surabaya Karir is the most popular online job vacancy information portal in Surabaya, Sidoarjo and surrounding areas, with thousands of employers and job seekers collaborating on the platform.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=id.co.surabayakarir",
      appStoreUrl: "https://apps.apple.com/id/app/surabaya-karir/id6479258923",
      webUrl: "https://surabayakarir.co.id/",
    },
    {
      id: "tracegrid",
      image: "https://play-lh.googleusercontent.com/HRgLFqVMaht90gwkDmn5r9pvbGqBUu8vomtXz8mUFoSeG4ondFo1Obd1dtf55z3BIw8=w480-h960-rw",
      title: "Tracegrid Mobile",
      description: "TraceGrid is a fleet management app that enables real-time tracking of vehicle locations, fuel usage, tachograph data, and fleet statistics. It helps users monitor operations efficiently and make informed decisions.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.tracegrid.app.mobile&hl=en",
      appStoreUrl: "https://apps.apple.com/id/app/tracegrid-mobile/id1071231716?l=id",
      webUrl: undefined,
    },
    {
      id: "divapress",
      image: "https://divapress-online.com/Assets/fo/img/logo-divapress.png",
      title: "Divapress Online",
      description: "Divapress Online is a comprehensive online bookstore and publishing platform offering the latest books, bestsellers, and ebook publishing services with the tagline 'Menulis, Membaca, Mengubah Dunia!' (Write, Read, Change the World!).",
      playStoreUrl: undefined,
      appStoreUrl: undefined,
      webUrl: "https://divapress-online.com/",
    },
    {
      id: "btp",
      image: "https://play-lh.googleusercontent.com/m_XSMTTOwJV5h99isOxEnqkfP8cs0PjfpVYJa4IYQoElQ6cmqqBfxBMyvs9tAMDRiSw=w480-h960-rw",
      title: "BTP Ranger",
      description: "BTP Ranger helps parents monitor their children's activities in school. I worked on Firebase integration, real-time updates, and ensured smooth data handling using the Provider package",
      playStoreUrl: "https://play.google.com/store/apps/details?id=sg.com.bythepark.ranger&hl=en",
      appStoreUrl: "https://apps.apple.com/us/app/btp-ranger/id1546573869",
      webUrl: undefined,
    },
    {
      id: "diomedia",
      image: "https://diomedia.id/wp-content/uploads/2022/08/Logo-Diomedia-Baru-1.png",
      title: "Diomedia",
      description: "Diomedia is a book publishing platform with the philosophy 'Menerbitkan Buku adalah Kemewahan Intelektual!' (Publishing Books is an Intellectual Luxury!), specializing in children's books, academic writing programs, and various literary works.",
      playStoreUrl: undefined,
      appStoreUrl: undefined,
      webUrl: "https://diomedia.id/",
    },
    {
      id: "gamaaims",
      image: "https://play-lh.googleusercontent.com/TaXMTWe5Aqzf6AwaAQq9wxZasAEzpWaZG3xNH5h5m_CwrB8jXBtLmOh096y_K_xyM8U9=w480-h960-rw",
      title: "Gama AIMS",
      description: "GAMA-AIMS is a psychiatric intervention app for medical students dealing with anxiety. I was responsible for implementing the mental health intervention features and managing user sessions with Provider for optimal performance",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.gamaaims.app&hl=en",
      appStoreUrl: "https://apps.apple.com/id/app/gama-aims/id1616273280",
      webUrl: undefined,
    },
    {
      id: "cantrikpustaka",
      image: "https://cantrikpustaka.com/wp-content/uploads/2021/11/logo-web.png",
      title: "Cantrik Pustaka",
      description: "Cantrik Pustaka is a book publisher specializing in academic and literary works, covering topics from philosophy, religion, sociology, to cultural studies and fiction, serving as a platform for intellectual discourse and knowledge dissemination.",
      playStoreUrl: undefined,
      appStoreUrl: undefined,
      webUrl: "https://cantrikpustaka.com/",
    },
    {
      id: "hyppe",
      image: "https://play-lh.googleusercontent.com/l6gCAxSr5Dzz3jS-VknF3210JI6wjwmzwTef9He68WW7o7jQBypSezOWAEgodPckn763=w480-h960-rw",
      title: "Hyppe",
      description: "Hyppe is a local social media platform that offers a new way for urban youth to share their moments. I contributed by integrating AR features and managing state using the Provider package.",
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
                About
              </Link>
              <Link
                href="#technologies"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Technologies
              </Link>
              <Link
                href="#projects"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <div className="flex items-center space-x-1">
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="pt-2 max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hey there! I'm Muhtadi, a passionate <b>Fullstack Developer</b> with expertise in creating <b>web and mobile applications</b>. With a
                  strong foundation in modern web technologies and mobile development, I build performant and beautiful
                  applications that deliver exceptional user experiences across all platforms.
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
                      <h3 className="text-xl font-bold">Experience</h3>
                      <p className="text-muted-foreground">
                        8+ years of experience in fullstack development, specializing in mobile apps (Flutter) and modern web applications (React, Next.js).
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Education</h3>
                      <p className="text-muted-foreground">
                        Bachelor's degree in Computer Science with specialization in Software Engineering and Application Development.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Frontend Skills</h3>
                      <p className="text-muted-foreground">
                        React, Next.js, TypeScript, Flutter, Dart, Tailwind CSS, State Management (Redux, Zustand, Provider, Bloc, Riverpod)
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Backend Skills</h3>
                      <p className="text-muted-foreground">
                        Node.js, Express.js, PostgreSQL, MongoDB, Firebase, Supabase, RESTful APIs, GraphQL, CI/CD, Docker, Git
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technologies I Use</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I work with modern technologies to build scalable, performant applications across web and mobile platforms.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">What I Can Build</h3>
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">Web Applications</h4>
                      <p className="text-muted-foreground">
                        Modern, responsive web applications using React, Next.js, and TypeScript with server-side rendering,
                        optimized performance, and excellent SEO.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">Mobile Applications</h4>
                      <p className="text-muted-foreground">
                        Cross-platform mobile apps with Flutter for iOS and Android, delivering native performance and
                        beautiful user interfaces from a single codebase.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">Backend Systems</h4>
                      <p className="text-muted-foreground">
                        Scalable backend services with Node.js, Express, and databases like PostgreSQL and MongoDB,
                        including RESTful APIs and real-time features.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">Full-Stack Solutions</h4>
                      <p className="text-muted-foreground">
                        End-to-end application development from database design to deployment, with modern DevOps
                        practices and CI/CD pipelines.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#61DAFB] bg-opacity-10 p-8 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#61DAFB]">React</div>
                    <div className="text-sm text-muted-foreground mt-2">Web Development</div>
                  </div>
                </div>
                <div className="bg-[#000000] bg-opacity-10 p-8 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold">Next.js</div>
                    <div className="text-sm text-muted-foreground mt-2">React Framework</div>
                  </div>
                </div>
                <div className="bg-[#041e3c] p-8 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#02569B]">Flutter</div>
                    <div className="text-sm text-muted-foreground mt-2">Mobile Apps</div>
                  </div>
                </div>
                <div className="bg-[#339933] bg-opacity-10 p-8 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#339933]">Node.js</div>
                    <div className="text-sm text-muted-foreground mt-2">Backend</div>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the web and mobile applications I've developed.
                </p>
              </div>
            </div>
            <Tabs defaultValue="all" className="w-full py-12" onValueChange={setActiveTab}>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
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
                      <p className="text-muted-foreground text-lg">Web projects coming soon...</p>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interested in working together? Feel free to reach out to discuss your project.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">Feel free to reach out through any of the following channels:</p>
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
                <h3 className="text-xl font-bold">Send a Message</h3>
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
            © {new Date().getFullYear()} Imam Muhtadi. All rights reserved.
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

