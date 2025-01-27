import Hero from "@/components/hero";
import { Hero2 } from "@/components/hero-2";
import UpcomingEpisodes from '@/components/upcoming-episodes';
import VoteTracking from '@/components/vote-tracking';
import CTABanner from '@/components/cta-banner';
import { Button } from "@/components/ui/button";
import { Banner } from "@/components/ui/banner";
import { getSocialUrl } from "@/utils/social-links";
import { Link } from "@/components/ui/link";
import { FeaturedProducts } from "@/components/shop/featured-products";

export default async function Home() {
  return (
    <>
      <Hero />
      <UpcomingEpisodes />
      
      <Banner
        variant="top"
        header="The Why Files Shop"
        subtext="Official merchandise and investigation gear"
        align="center"
      >
        <div className="flex justify-center mb-8">
          <Button asChild>
            <Link href="/shop">
              View All Products
            </Link>
          </Button>
        </div>
      </Banner>

      <Banner
        variant="top"
        align="center"
      >
        <FeaturedProducts />
      </Banner>
      
      {/* With header and subtext */}
      <Banner
        variant="top"
        header="Community Voting"
        subtext="Help us decide which mysteries to investigate next"
        className="w-full"
      >
        <VoteTracking />
      </Banner>
      
      <Banner
        variant="both"
        header="Join Our Community"
        subtext="Be part of something mysterious"
        align="center"
      >
        <Hero2
          title="How to get involved"
          description="Wecome part of our growing community of mystery solvers. Help us investigate cases, share theories, and uncover the truth behind unexplained phenomena."
          imageSrc="/logo-1.png"
          imageAlt="Investigation scene with detective tools"
          imagePosition="left"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href={getSocialUrl('discord') ?? '#'}>
                Join Our Discord
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/the-fix">
                Choose Your Platform
              </Link>
            </Button>
          </div>
        </Hero2>
      </Banner>
      
      <Banner variant="bottom">
        <CTABanner />
      </Banner>
    </>
  );
}
