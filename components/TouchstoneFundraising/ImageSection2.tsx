import Image from 'next/image';

export default function ImageSection2() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <div className="absolute inset-0">
        <Image
          src="/touchstone fundraising/fundraising-2.jpg"
          alt="Fundraising campaign supporters celebrating a donation milestone"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[60px] md:h-[80px] lg:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
        >
          <path
            d="M0,150 Q600,-50 1200,150 L1200,150 L0,150 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
