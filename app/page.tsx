import Image from "next/image"
import Link from "next/link"
import { Mail, Github, Linkedin, ChevronRight } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import ProjectCard from "../components/project-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=36&width=36"
                alt="Flutter Logo"
                width={36}
                height={36}
                className="rounded-md"
              />
              <span className="inline-block font-bold">Muhtadi</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="#flutter"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Flutter
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
                  Hey there! I'm Muhtadi, a passionate <b>Mobile App Developer</b> with expertise in creating <b>iOS and Android applications</b>. With a
                  strong foundation in Flutter and a keen eye for UI/UX design, I build performant and beautiful
                  applications that work seamlessly across multiple platforms.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                // src="/placeholder.svg?height=400&width=400"
                src="https://media.licdn.com/dms/image/v2/C4E03AQH2VmBUAGXIEw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517639767087?e=1746662400&v=beta&t=8waGgTXSWEnk3kNd4xgT98zcBmbVq_LnSRMgtmz1cYw"
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
                        8+ years of experience in mobile app development with a focus on Flutter for the last 4 years.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Education</h3>
                      <p className="text-muted-foreground">
                        Bachelor's degree in Computer Science with specialization in Mobile Application Development.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Skills</h3>
                      <p className="text-muted-foreground">
                        Flutter, Dart, Firebase, Supabase, RESTful APIs, State Management (Provider, Bloc, Riverpod), CI/CD, Git
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Additional Skills</h3>
                      <p className="text-muted-foreground">
                        Backend Development: Express.js, Node.js, PostgreSQL, MongoDB, RESTful API design
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Flutter Section */}
        <section id="flutter" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What is Flutter?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web,
                  and desktop from a single codebase.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">What Flutter Can Do</h3>
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">Cross-Platform Development</h4>
                      <p className="text-muted-foreground">
                        Build apps for iOS, Android, web, Windows, macOS, and Linux from a single codebase, reducing
                        development time and costs.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">Fast Development</h4>
                      <p className="text-muted-foreground">
                        Hot reload feature allows you to see changes instantly without losing the current state of the
                        app, making development faster and more efficient.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">Expressive UI</h4>
                      <p className="text-muted-foreground">
                        Create beautiful, custom user interfaces with Flutter's rich set of widgets that follow Material
                        Design and Cupertino (iOS) guidelines.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h4 className="text-xl font-bold">Native Performance</h4>
                      <p className="text-muted-foreground">
                        Flutter compiles to native ARM code, ensuring high performance on both iOS and Android
                        platforms.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-[#041e3c] py-[70px] px-[70px] rounded-xl">
                <Image
                  src="https://storage.googleapis.com/cms-storage-bucket/67187dff9313e2831a8c.svg"
                  width={500}
                  height={500}
                  alt="Flutter Framework"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-contain sm:w-full lg:order-last"
                />
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
                  Check out some of the Flutter applications I've developed for mobile platforms.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <ProjectCard
                id="jogjalowker"
                image="https://play-lh.googleusercontent.com/3NzYKqbgrrlFzR-iiOCFC4hlOjNIurQx2wkjU3K0hS3aFkzDwlUob_VkJVekRlrYCSGS=w480-h960-rw"
                title="Jogjalowker"
                description="JogjaLowker is the leading job vacancy information portal in Jogja, with hundreds of thousands of job seekers and collaborations with thousands of companies."
                playStoreUrl="https://play.google.com/store/apps/details?id=id.co.jogjalowker"
                appStoreUrl="https://apps.apple.com/id/app/jogjalowker/id1451701919"
              />

              {/* Project 2 */}
              <ProjectCard
                id="charo"
                image="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/56/ea/76/56ea767d-57c8-ce41-1206-3f3ab79b0824/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp"
                title="Charo - AI Dating Assistant"
                description="Charo is a French AI-driven dating assistant providing auto-generated tips and advice based on user conversation screenshots."
                appStoreUrl="https://apps.apple.com/id/app/charo/id6670252822"
              />

              {/* Project 3 */}
              <ProjectCard
                id="tracegrid"
                image="https://play-lh.googleusercontent.com/HRgLFqVMaht90gwkDmn5r9pvbGqBUu8vomtXz8mUFoSeG4ondFo1Obd1dtf55z3BIw8=w480-h960-rw"
                title="Tracegrid Mobile"
                description="TraceGrid is a fleet management app that enables real-time tracking of vehicle locations, fuel usage, tachograph data, and fleet statistics. It helps users monitor operations efficiently and make informed decisions."
                playStoreUrl="https://play.google.com/store/apps/details?id=com.tracegrid.app.mobile&hl=en"
                appStoreUrl="https://apps.apple.com/id/app/tracegrid-mobile/id1071231716?l=id"
              />

              {/* Project 4 */}
              <ProjectCard
                id="btp"
                image="https://play-lh.googleusercontent.com/m_XSMTTOwJV5h99isOxEnqkfP8cs0PjfpVYJa4IYQoElQ6cmqqBfxBMyvs9tAMDRiSw=w480-h960-rw"
                title="BTP Ranger"
                description="BTP Ranger helps parents monitor their children's activities in school. I worked on Firebase integration, real-time updates, and ensured smooth data handling using the Provider package"
                playStoreUrl="https://play.google.com/store/apps/details?id=sg.com.bythepark.ranger&hl=en"
                appStoreUrl="https://apps.apple.com/us/app/btp-ranger/id1546573869"
              />

              {/* Project 5 */}
              <ProjectCard
                id="gamaaims"
                image="https://play-lh.googleusercontent.com/TaXMTWe5Aqzf6AwaAQq9wxZasAEzpWaZG3xNH5h5m_CwrB8jXBtLmOh096y_K_xyM8U9=w480-h960-rw"
                title="Gama AIMS"
                description="GAMA-AIMS is a psychiatric intervention app for medical students dealing with anxiety. I was responsible for implementing the mental health intervention features and managing user sessions with Provider for optimal performance"
                playStoreUrl="https://play.google.com/store/apps/details?id=com.gamaaims.app&hl=en"
                appStoreUrl="https://apps.apple.com/id/app/gama-aims/id1616273280"
              />

              {/* Project 6 */}
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="Project 6"
                    className="aspect-video object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold">WeatherNow</CardTitle>
                  <CardDescription className="mt-2 line-clamp-3">
                    A weather forecasting app with real-time updates, location-based forecasts, and weather alerts.
                    Demonstrates Flutter's API integration and dynamic UI capabilities.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <div className="flex space-x-2">
                    <Link href="https://play.google.com" target="_blank" rel="noreferrer">
                      <Button size="sm" variant="outline">
                        {/* <Image
                          src="/placeholder.svg?height=20&width=20"
                          width={20}
                          height={20}
                          alt="Play Store"
                          className="mr-2"
                        /> */}
                        Play Store
                      </Button>
                    </Link>
                    <Link href="https://apps.apple.com" target="_blank" rel="noreferrer">
                      <Button size="sm" variant="outline">
                        {/* <Image
                          src="/placeholder.svg?height=20&width=20"
                          width={20}
                          height={20}
                          alt="App Store"
                          className="mr-2"
                        /> */}
                        App Store
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
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
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Flutter Developer. All rights reserved.
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

