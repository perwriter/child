
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F6F5F4] overflow-x-hidden">
    
      {/* Hero Section */}
      <section className="px-6 max-w-6xl mx-auto pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-[#2B788B] text-sm tracking-wider uppercase">
              E-COURSE PLATFORM
            </div>
            <h1 className="text-5xl font-black leading-tight tracking-tight">
              Learning and
              <br />
              teaching online,
              <br />
              made easy.
            </h1>
            <p className="text-gray-600 max-w-md">
              Practice your English and learn new things with the platform.
            </p>
            <Link href="./about">
            <button className="bg-[#C3DCE3] text-[#2B788B] px-8 py-3 rounded-full hover:bg-[#2B788B] hover:text-white transition-colors">
              About platform
            </button>
            </Link>
            <div className="flex items-center gap-12 pt-8">
              <div className="flex items-center gap-2">
                <div className="text-[#2B788B]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">600+</div>
                  <div className="text-sm text-gray-500">Popular words</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#2B788B]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">2+</div>
                  <div className="text-sm text-gray-500">Mini-games</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="./land1.svg?height=600&width=600"
              alt="Student reading"
              height={400}
              width={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    

      {/* Learn Language Section */}
      <section className="px-6 max-w-6xl mx-auto py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="/land2.svg?height=400&width=400"
              alt="Student learning"
              height={400}
              width={400}
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl font-black leading-tight">
              Learn a language
              <br />
              in a playful way
            </h2>
            <p className="text-gray-600">
              Make learning words more fun with mini-games
            </p>
            {/* <div className="relative">
            <div className="flex gap-4 mt-16">
            <button className="text-[#945069] border px-4 pt-10 pb-4 rounded-xl w-32 bg-[#F2D4DC] text-md">Sprint →</button>
            <button className="text-[#2B788B] border px-4 pt-10 pb-4 rounded-xl w-32 bg-[#C3DCE3] text-md">Audio Call →</button>
        

            </div>
        <div className="flex absolute gap-8 -top-12">
        <Image
                  src="/shoes.svg?height=80&width=80"
                  alt="Sprint game"
                  height={80}
                  width={80}
                  className="mb-4 ml-6 "
                />
                <Image
                  src="/speaker.svg?height=80&width=80"
                  alt="Audio call game"
                  height={80}
                  width={80}
                  className="mb-4 ml-6 "
                />
        </div>
            </div> */}
            <div className="flex relative gap-4 pt-12   ">
                <div className="bg-[#F2D4DC] rounded-xl p-4 w-32">
                <Image
                  src="/shoes.svg?height=80&width=80"
                  alt="Sprint game"
                  height={80}
                  width={80}
                  className="mb-2 ml-6 absolute gap-4 top-0"
                />
                <div className="text-[#945069] pt-4 text-sm">Sprint →</div>
              </div>
              <div className="bg-[#C3DCE3] rounded-xl p-4 w-32">
                <Image
                  src="/speaker.svg?height=80&width=80"
                  alt="Audio call game"
                  height={80}
                  width={80}
                  className="mb-4 ml-6 absolute gap-4 -top-2"
                />
                <div className="text-[#2B788B]  pt-4 text-sm">Audio-call →</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vocabulary Section */}
      <section className="px-6 max-w-6xl mx-auto py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black leading-tight">
              Increase your
              <br />
              vocabulary
            </h2>
            <p className="text-gray-600">
              Traditional and new effective approaches to word study
            </p>
            <button className="bg-[#C3DCE3] text-[#2B788B] px-8 py-3 rounded-full hover:bg-[#2B788B] hover:text-white transition-colors">
              Textbook →
            </button>
          </div>
          <div>
            <Image
              src="/land3.svg?height=400&width=400"
              height={400}
              width={400}
              alt="Student with books"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="px-6 max-w-6xl mx-auto py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="./land4.svg?height=400&width=400"
              height={400}
              width={400}
              alt="Students checking progress"
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl font-black leading-tight">
              Watch your
              <br />
              progress every
              <br />
              day
            </h2>
            <p className="text-gray-600">
              Save statistics on your achievements, words learned, and mistakes
            </p>
            <Link href="./statistics">
            <button className="bg-[#C3DCE3] text-[#2B788B] px-8 py-3 rounded-full hover:bg-[#2B788B] hover:text-white transition-colors">
              Statistics →
            </button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
