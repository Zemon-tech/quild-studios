import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Github, Linkedin, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const workData = {
  roc: {
    title: "Roc",
    industry: "Advertisement Creator",
    client: "Roc",
    year: "2025",
    description: "ROC is a dynamic video services agency specializing in creating high-impact visual content for brands. They offer a range of services including user-generated content (UGC), motion graphic ads, professional video editing, and spokesperson ads, helping businesses elevate their marketing with engaging and polished videos. With experience collaborating with over 100 brands such as Myntra, Fiverr, Policy Bazaar, Kroslo, and Car Info, ROC has built a reputation for delivering creative solutions that drive results in the digital space.",
    images: ["/roc.jpg", "/roc.jpg", "/roc.jpg"],
    liveUrl: "#"
  },
  canteen: {
    title: "Automate canteen work",
    industry: "Workflow Automation",
    client: "Canteen Management",
    year: "2025",
    description: "A comprehensive automation solution for canteen management systems, streamlining operations and improving efficiency through intelligent workflow automation.",
    images: ["/canteen.png", "/canteen.png", "/canteen.png"],
    liveUrl: "#"
  },
  havendrip: {
    title: "Havendrip",
    industry: "E-commerce Platform",
    client: "Havendrip",
    year: "2025",
    description: "A modern e-commerce platform designed for the GenZ audience, featuring innovative shopping experiences and seamless user interactions.",
    images: ["/hac.jpg", "/hac.jpg", "/hac.jpg"],
    liveUrl: "#"
  },
  integrated: {
    title: "Integrated solutions",
    industry: "Business Solutions",
    client: "Integrated Systems",
    year: "2025",
    description: "Comprehensive business solutions that integrate various systems and processes to create efficient, scalable operations for modern enterprises.",
    images: ["/int.jpg", "/int.jpg", "/int.jpg"],
    liveUrl: "#"
  }
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const work = workData[params.slug as keyof typeof workData]
  
  if (!work) {
    notFound()
  }

  const otherWorks = Object.keys(workData).filter(key => key !== params.slug).slice(0, 2)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 md:p-8">
        <Link href="/" className="text-xl font-medium hover:opacity-70 transition-opacity">
          Quild
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/#works" className="text-sm hover:opacity-70 transition-opacity">Works</Link>
          <Link href="/#contact" className="text-sm hover:opacity-70 transition-opacity">Contact</Link>
        </nav>
      </header>

      {/* Project Header */}
      <section className="px-6 md:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link href="/#works" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Works
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1 className="text-6xl md:text-8xl font-bold leading-none mb-8">
                  {work.title}
                </h1>
              </div>
              <div className="mt-auto">
                <Button asChild className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-none">
                  <a href={work.liveUrl} target="_blank" rel="noopener noreferrer">
                    See It Live
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={work.images[0]}
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* About Section */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">about.</h2>
            <button className="text-sm underline hover:no-underline transition-all">Show More</button>
          </div>
          <div className="max-w-4xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              {work.description}
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Showcase Images */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {work.images.map((image, index) => (
              <div key={index} className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${work.title} showcase ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* More to Explore */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">more to explore.</h2>
            <button className="text-sm underline hover:no-underline transition-all">Show More</button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {otherWorks.map((workId) => {
              const otherWork = workData[workId as keyof typeof workData]
              return (
                <Link key={workId} href={`/work/${workId}`} className="group cursor-pointer">
                  <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden relative">
                    <img
                      src={otherWork.images[0]}
                      alt={otherWork.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-medium text-lg mb-1">{otherWork.title}</h3>
                        <p className="text-gray-200 text-sm">{otherWork.industry}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Contact Section */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Curious about what we can create together?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's bring something extraordinary to life!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-none">
              <a href="https://tally.so/r/waLW89" target="_blank" rel="noopener noreferrer">
                Get in Touch
              </a>
            </Button>
            <div className="px-8 py-3 text-black">
              Available For Work
            </div>
          </div>

          <div className="flex justify-center items-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>madhavvarshney1879@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-8 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            Designed & Developed by Quild Studios
          </div>
          <div className="text-sm text-gray-600">
            All rights reserved, Quild ©2024
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
