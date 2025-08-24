import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const workItems = [
    {
      id: "roc",
      image: "/roc.jpg",
      title: "Roc Roc",
      category: "Video Services Agency"
    },
    {
      id: "canteen",
      image: "/canteen.png",
      title: "Automate canteen work",
      category: "Workflow Automation"
    },
    {
      id: "havendrip",
      image: "/hac.jpg",
      title: "Havendrip",
      category: "E-commerce Platform"
    },
    {
      id: "integrated",
      image: "/int.jpg",
      title: "Integrated solutions",
      category: "Business Solutions"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 md:p-8">
        <div className="text-xl font-medium">Quild</div>
        <nav className="flex items-center gap-8">
          <a href="#works" className="text-sm hover:opacity-70 transition-opacity">Works</a>
          <a href="#contact" className="text-sm hover:opacity-70 transition-opacity">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold leading-none mb-8">
                Quild
                <br />
                Studios
              </h1>
              <div className="text-sm text-gray-600">madhavvarshney1879@gmail.com</div>
            </div>
            <div className="md:pt-12">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Hello, We're a 5-member creative agency specializing in minimal web & app design and workflow
                automation, working remotely with clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Works Section */}
      <section id="works" className="px-6 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">work.</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {workItems.map((item, index) => (
              <Link key={index} href={`/work/${item.id}`} className="group cursor-pointer">
                <div className="aspect-[3/2] bg-gray-100 rounded-lg overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-200 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* About Section */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">about.</h2>
          
          <div className="max-w-4xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
              Our team blends design, development and automation expertise to deliver sleek, functional and modern digital experiences.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              I'm dedicated to crafting beautiful and highly functional designs that seamlessly align with my clients' unique needs and long-term goals.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-8 py-16">
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
