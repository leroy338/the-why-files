import { Banner } from "@/components/ui/banner"
import { Container } from "@/components/ui/container"
import { episodes } from "@/lib/mock-episodes"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"
import Image from "next/image"

export default function SchedulePage() {
  return (
    <Container>
      <Banner
        variant="top"
        header="Upcoming Episodes"
        subtext="Mark your calendars for these mysterious investigations"
        align="center"
      >
        <></>
      </Banner>

      <div className="grid gap-8 my-8">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="group relative grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-lg border bg-card transition-colors hover:bg-muted/50"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video md:aspect-square rounded-md overflow-hidden">
              <Image
                src={episode.thumbnail}
                alt={episode.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold">{episode.title}</h2>
                  <Badge variant="secondary" className="h-6">
                    {episode.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{episode.description}</p>
              </div>

              {/* Release Date */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={episode.releaseDate}>
                  {new Date(episode.releaseDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Banner
        variant="bottom"
        header="Want to influence our investigations?"
        subtext="Join our community and vote on upcoming episodes"
        align="center"
      >
        <div className="flex justify-center">
          <Badge variant="secondary" className="text-base px-4 py-2">
            Coming Soon
          </Badge>
        </div>
      </Banner>
    </Container>
  )
} 