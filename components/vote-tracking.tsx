'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { Container } from "@/components/ui/container"

const projectData = [
  {
    title: "Project Alpha",
    votes: 245,
  },
  {
    title: "Project Beta",
    votes: 167,
  },
  {
    title: "Project Gamma",
    votes: 389,
  },
  {
    title: "Project Delta",
    votes: 278,
  },
  {
    title: "Project Epsilon",
    votes: 156,
  },
].sort((a, b) => b.votes - a.votes); // Sort by votes in descending order

const chartConfig = {
  votes: {
    label: "Vote Count",
    color: "hsl(var(--emerald-500))",
  },
}

export default function VoteTracking() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const renderCustomBarLabel = ({ x, y, width, height, value, title }: any) => {
    if (!isMobile || width < 50) return null;
    return (
      <text
        x={x + 10}
        y={y + height / 2}
        fill="white"
        dominantBaseline="middle"
        className="text-xs font-medium"
      >
        {title}
      </text>
    );
  };

  return (
    <Container as="section">
      <div className="py-4 sm:py-8 md:py-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Top Voted Upcoming Projects
        </h2>
        <p className="text-sm text-gray-500 mb-4 sm:mb-6">
          Sign in to vote for your favorite projects and help us decide what to work on next.
        </p>
        <div className="relative w-full h-[350px] md:h-[400px]">
          <ChartContainer config={chartConfig}>
            <BarChart 
              data={projectData} 
              layout="vertical"
              margin={{ 
                top: 20, 
                right: isMobile ? 8 : 20, 
                bottom: 20, 
                left: isMobile ? 20 : 100 // Reduced left margin on mobile
              }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis 
                type="number"
                tick={{ fontSize: isMobile ? 12 : 14 }}
                height={40}
                tickMargin={8}
              />
              <YAxis 
                type="category" 
                dataKey="title" 
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: isMobile ? 12 : 14 }}
                width={isMobile ? 0 : 100} // Hide YAxis on mobile
                hide={isMobile} // Hide entire axis on mobile
              />
              <ChartTooltip 
                content={<ChartTooltipContent />}
                cursor={{ fill: 'hsl(var(--emerald-500) / 0.1)' }}
              />
              <Bar
                dataKey="votes"
                fill="hsl(var(--emerald-500) / 0.7)"
                radius={[0, 4, 4, 0]}
                barSize={isMobile ? 32 : 24}
                label={(props) => renderCustomBarLabel({ ...props, title: projectData[props.index].title }) as any}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </Container>
  );
} 