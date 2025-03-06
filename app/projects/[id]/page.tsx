import Image from "next/image"
import Link from "next/link"
import { Button } from "../../../components/ui/button"
import { ChevronLeft } from "lucide-react"

const projects = [
  {
    id: "jogjalowker",
    title: "Jogjalowker",
    description: "JogjaLowker is the leading job vacancy information portal in Jogja, with hundreds of thousands of job seekers and collaborations with thousands of companies.",
    image: "https://play-lh.googleusercontent.com/3NzYKqbgrrlFzR-iiOCFC4hlOjNIurQx2wkjU3K0hS3aFkzDwlUob_VkJVekRlrYCSGS=w480-h960-rw",
    playStore: "https://play.google.com/store/apps/details?id=id.co.jogjalowker",
    appStore: "https://apps.apple.com/id/app/jogjalowker/id1451701919",
    features: [
      "Job search and filtering",
      "Company profiles",
      "Application tracking",
      "Resume builder",
      "Job alerts"
    ],
    technologies: ["Flutter", "Firebase", "REST API", "Google Maps"]
  },
  {
    id: "charo",
    title: "Charo - AI Dating Assistant",
    description: "Charo is a French AI-driven dating assistant providing auto-generated tips and advice based on user conversation screenshots.",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/56/ea/76/56ea767d-57c8-ce41-1206-3f3ab79b0824/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp",
    appStore: "https://apps.apple.com/id/app/charo/id6670252822",
    features: [
      "AI-powered conversation analysis",
      "Dating tips and advice",
      "Screenshot analysis",
      "Personalized recommendations"
    ],
    technologies: ["Flutter", "OpenAI", "Firebase", "Cloud Functions"]
  },
  {
    id: "tracegrid",
    title: "Tracegrid Mobile",
    description: "TraceGrid is a fleet management app that enables real-time tracking of vehicle locations, fuel usage, tachograph data, and fleet statistics. It helps users monitor operations efficiently and make informed decisions.",
    image: "https://play-lh.googleusercontent.com/HRgLFqVMaht90gwkDmn5r9pvbGqBUu8vomtXz8mUFoSeG4ondFo1Obd1dtf55z3BIw8=w480-h960-rw",
    playStore: "https://play.google.com/store/apps/details?id=com.tracegrid.app.mobile&hl=en",
    appStore: "https://apps.apple.com/id/app/tracegrid-mobile/id1071231716?l=id",
    features: [
      "Real-time vehicle tracking",
      "Fuel usage monitoring",
      "Fleet statistics",
      "Tachograph data analysis",
      "Route optimization"
    ],
    technologies: ["Flutter", "Google Maps", "WebSocket", "REST API"]
  },
  {
    id: "btp",
    title: "BTP Ranger",
    description: "BTP Ranger helps parents monitor their children's activities in school. I worked on Firebase integration, real-time updates, and ensured smooth data handling using the Provider package",
    image: "https://play-lh.googleusercontent.com/m_XSMTTOwJV5h99isOxEnqkfP8cs0PjfpVYJa4IYQoElQ6cmqqBfxBMyvs9tAMDRiSw=w480-h960-rw",
    playStore: "https://play.google.com/store/apps/details?id=sg.com.bythepark.ranger&hl=en",
    appStore: "https://apps.apple.com/us/app/btp-ranger/id1546573869",
    features: [
      "Real-time activity monitoring",
      "Parent-teacher communication",
      "Attendance tracking",
      "Event notifications",
      "Progress reports"
    ],
    technologies: ["Flutter", "Firebase", "Provider", "Push Notifications"]
  },
  {
    id: "gamaaims",
    title: "Gama AIMS",
    description: "GAMA-AIMS is a psychiatric intervention app for medical students dealing with anxiety. I was responsible for implementing the mental health intervention features and managing user sessions with Provider for optimal performance",
    image: "https://play-lh.googleusercontent.com/TaXMTWe5Aqzf6AwaAQq9wxZasAEzpWaZG3xNH5h5m_CwrB8jXBtLmOh096y_K_xyM8U9=w480-h960-rw",
    playStore: "https://play.google.com/store/apps/details?id=com.gamaaims.app&hl=en",
    appStore: "https://apps.apple.com/id/app/gama-aims/id1616273280",
    features: [
      "Mental health assessments",
      "Intervention strategies",
      "Progress tracking",
      "Resource library",
      "Guided exercises"
    ],
    technologies: ["Flutter", "Provider", "Local Storage", "REST API"]
  },
  {
    id: "hyppe",
    title: "Hyppe",
    description: "Hyppe is a local social media platform that offers a new way for urban youth to share their moments. I contributed by integrating AR features and managing state using the Provider package.",
    image: "https://play-lh.googleusercontent.com/l6gCAxSr5Dzz3jS-VknF3210JI6wjwmzwTef9He68WW7o7jQBypSezOWAEgodPckn763=w480-h960-rw",
    playStore: "https://play.google.com/store/apps/details?id=com.hyppe.hyppeapp&hl=en",
    appStore: "https://apps.apple.com/id/app/hyppe-indonesia-social-media/id1545595684",
    features: [
      "Social Media",
      "AR Features",
      "Photo & Video Processing"
    ],
    technologies: ["Flutter", "Photo & Video Processing", "AR", "REST API"]
  }
];

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="container flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Project not found</h1>
          <Link href="/#projects">
            <Button className="mt-4">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <Link href="/#projects">
        <Button variant="outline" className="mb-8">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
      
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <Image
            src={project.image}
            width={500}
            height={500}
            alt={project.title}
            className="rounded-xl object-cover w-full"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-muted-foreground">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            {(project.playStore || project.appStore) ? (
              <>
                {project.playStore && (
                  <Link href={project.playStore} target="_blank" rel="noreferrer">
                    <Button>Play Store</Button>
                  </Link>
                )}
                {project.appStore && (
                  <Link href={project.appStore} target="_blank" rel="noreferrer">
                    <Button>App Store</Button>
                  </Link>
                )}
              </>
            ) : (
              <p className="text-muted-foreground italic">App coming soon to app stores</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
