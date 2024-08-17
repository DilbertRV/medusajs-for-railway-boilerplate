import { Button, clx, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="h-[50vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <Heading level="h1" className="text-3xl">
          Frutas y verduras frescas a tu puerta en minutos
        </Heading>
        <Heading level="h2" className="text-md text-ui-fg-subtle">
          Descubre nuestra selección de productos frescos y de calidad
        </Heading>
        {/* <div className="absolute bottom-0 left-40 zoom-in-75 -z-10 hidden lg:block">
          <Image
            src={"/images/veggies.webp"}
            alt="Hero image"
            width={300}
            height={300}
          />
        </div> */}
        <div className="absolute top-20 right-40 transform rotate-12 -z-10 blur-lg opacity-25 lg:block lg:blur-none lg:opacity-100">
          <Image
            src={"/images/cart-min.webp" || null}
            alt="Hero image"
            width={400}
            height={400}
            priority
          />
        </div>
        <div className="flex gap-4">
          <LocalizedClientLink href="#shop" passHref>
            <Button
              size="large"
              variant="primary"
              className={clx("bg-red-500 hover:bg-red-500/80 shadow-md")}
            >
              Comprar ahora
            </Button>
          </LocalizedClientLink>
          <Link
            href="https://wa.me/+50685187761"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <Button
              size="large"
              className={clx(
                "bg-[#25d366] hover:bg-[#25d366]/80 shadow-md text-white"
              )}
              variant="secondary"
            >
              WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
