interface Episode {
  title: string;
  releaseDate: string;
  description: string;
  status: 'recording' | 'editing' | 'finalizing';
}

export default function UpcomingEpisodes() {
  const upcomingEpisodes: Episode[] = [
    {
      title: "The Bermuda Triangle: Beyond the Mystery",
      releaseDate: "March 28, 2024",
      description: "Diving deep into the unexplained disappearances and strange phenomena within the Devil's Triangle.",
      status: "recording"
    },
    {
      title: "Ancient Aliens: The Hidden Evidence",
      releaseDate: "April 4, 2024",
      description: "Examining controversial artifacts and structures that challenge our understanding of human history.",
      status: "editing"
    },
    {
      title: "The Lost City of Atlantis",
      releaseDate: "April 11, 2024",
      description: "Uncovering new theories about the legendary sunken civilization and its possible locations.",
      status: "finalizing"
    }
  ];

  const getStatusColor = (status: Episode['status']) => {
    switch (status) {
      case 'recording':
        return 'text-red-500';
      case 'editing':
        return 'text-yellow-500';
      case 'finalizing':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <section className="w-full py-4 sm:py-8 md:py-12">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-foreground/80">
          Upcoming Episodes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {upcomingEpisodes.map((episode, index) => (
            <div 
              key={index}
              className="bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-lg p-4 md:p-6 hover:border-foreground/20 transition-all"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
                <h3 className="text-lg md:text-xl font-semibold">{episode.title}</h3>
                <span className={`text-sm ${getStatusColor(episode.status)} capitalize whitespace-nowrap`}>
                  {episode.status}
                </span>
              </div>
              <p className="text-sm text-foreground/60 mb-4">{episode.description}</p>
              <div className="flex items-center justify-between">
                <time className="text-sm text-foreground/40">{episode.releaseDate}</time>
                <div className="h-2 w-2 rounded-full bg-foreground/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 