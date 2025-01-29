import { Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import AtomLogo from "./atom-logo"
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <AtomLogo />
            <h3 className="font-['Montserrat'] text-2xl font-bold">BioQuest</h3>
          </div>
          <p className="text-gray-600">Empowering the next generation of scientists through innovative education.</p>
        </div>

        <div>
          <h4 className="font-['Montserrat'] text-lg font-bold mb-4">Contact</h4>
          <div className="space-y-2 text-gray-600">
            <p>Email: tnbioquest@gmail.com</p>
          </div>
          <div className="mt-6 flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-purple-100 hover:text-purple-600 transition-colors"
              asChild
            >
              <Link href="https://www.instagram.com/tnbioquest/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-purple-100 hover:text-purple-600 transition-colors"
              asChild
            >
              <Link href="https://www.youtube.com/@BioQuestUS" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-500">
        <p>&copy; 2025 BioQuest. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

