import { Button } from "./ui/button";
// import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
// import { InstagramLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Hirvana
            </span>{" "}
            {/* Development */}
          </h1>{" "}
          {/* <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Growth for
            </span>{" "}
            
          </h2> */}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Hirvana is a mixture of AI Powered tools and the best of the best
          mentorship cohort. We are here to help you grow in your career and
          become a better developer
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">
            <a
              href="https://x.com/hirvanaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </Button>

          {/* <a
            href="https://www.instagram.com/d2d_conference?igsh=MW1ja3BhODMxODU4eg=="
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Instagram
            <InstagramLogoIcon className="ml-2 w-5 h-5" />
          </a> */}
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
