import { 
    Youtube, 
    Twitter, 
    Instagram, 
    Music2, 
    MessageSquareMore,
    DollarSign, 
    Music as Spotify,
    LucideIcon,
    MessageSquare
} from "lucide-react"

export interface SocialLink {
  title: string
  description: string
  url: string
  color: string
  icon: LucideIcon
}

export const socialLinks: SocialLink[] = [
  {
    title: "YouTube",
    description: "Watch our latest episodes and investigations",
    url: "https://youtube.com/@thewhyfiles",
    color: "hover:text-red-500",
    icon: Youtube
  },
  {
    title: "Twitter",
    description: "Follow us for updates and behind-the-scenes content",
    url: "https://twitter.com/thewhyfiles",
    color: "hover:text-blue-400",
    icon: Twitter
  },
  {
    title: "Instagram",
    description: "Visual evidence and daily mysteries",
    url: "https://instagram.com/thewhyfiles",
    color: "hover:text-pink-500",
    icon: Instagram
  },
  {
    title: "TikTok",
    description: "Short-form conspiracy content",
    url: "https://tiktok.com/@thewhyfiles",
    color: "hover:text-slate-800 dark:hover:text-slate-200",
    icon: Music2
  },
  {
    title: "Discord",
    description: "Join our community of investigators",
    url: "https://discord.gg/thewhyfiles",
    color: "hover:text-indigo-500",
    icon: MessageSquareMore
  },
  {
    title: "Patreon",
    description: "Support our investigations and get exclusive content",
    url: "https://patreon.com/thewhyfiles",
    color: "hover:text-orange-500",
    icon: DollarSign
  },
  {
    title: "Spotify",
    description: "Listen to our podcast episodes",
    url: "https://open.spotify.com/show/thewhyfiles",
    color: "hover:text-green-500",
    icon: Spotify
  },
  {
    title: "Reddit",
    description: "Discuss theories and share evidence",
    url: "https://reddit.com/r/thewhyfiles",
    color: "hover:text-orange-600",
    icon: MessageSquare
  }
] as const

export const getSocialLink = (platform: string): SocialLink | undefined => {
  return socialLinks.find(link => 
    link.title.toLowerCase() === platform.toLowerCase()
  )
}

export const getSocialUrl = (platform: string): string | undefined => {
  return getSocialLink(platform)?.url
} 