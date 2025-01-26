export interface Episode {
  id: string
  title: string
  description: string
  releaseDate: string
  thumbnail: string
  status: 'upcoming' | 'released'
  category: string
}

export const episodes: Episode[] = [
  {
    id: 'ep-001',
    title: "The Crabcat Chronicles",
    description: "Investigating the mysterious feline-crustacean hybrid sightings in coastal towns.",
    releaseDate: "2024-03-25",
    thumbnail: "/logo-1.png",
    status: 'upcoming',
    category: 'Cryptids'
  },
  {
    id: 'ep-002',
    title: "Goldfish Conspiracy",
    description: "Do goldfish really have a three-second memory? The truth might surprise you.",
    releaseDate: "2024-04-01",
    thumbnail: "/logo-1.png",
    status: 'upcoming',
    category: 'Conspiracies'
  },
  {
    id: 'ep-003',
    title: "The Hecklefish Files",
    description: "Deep diving into the legend of the mysterious aquatic creature known as the Hecklefish.",
    releaseDate: "2024-04-08",
    thumbnail: "/logo-1.png",
    status: 'upcoming',
    category: 'Cryptids'
  },
  {
    id: 'ep-004',
    title: "Camp Green Foot",
    description: "Exploring the summer camp where multiple Bigfoot sightings were reported.",
    releaseDate: "2024-04-15",
    thumbnail: "/logo-1.png",
    status: 'upcoming',
    category: 'Investigation'
  },
  {
    id: 'ep-005',
    title: "The Roswell Disposal Unit",
    description: "Uncovering the secret government agency responsible for UFO cleanup operations.",
    releaseDate: "2024-04-22",
    thumbnail: "/logo-1.png",
    status: 'upcoming',
    category: 'UFOs'
  }
]

export const getUpcomingEpisodes = () => episodes.filter(ep => ep.status === 'upcoming') 