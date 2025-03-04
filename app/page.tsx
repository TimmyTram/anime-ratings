import Image from 'next/image';
import NavButton from './components/buttons/NavButton';

const Page = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-secondary">
      <div className="relative h-screen">
        <Image
          src="/backdrop.jpg"
          alt="Backdrop"
          fill
          className="object-cover brightness-50"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl md:text-6xl shadow-xl p-4">
          Explore The Depths of Anime with Placeholdername
        </h1>
      </div>

      <div className="p-4 md:p-8">
        <p className="text-center text-base md:text-lg">
          Welcome to Placeholder name. Placeholder name is used to discover and search for new animes, whether it&apos;s for seasonal animes or up-and-coming animes, placeholder name is where you want to be.
        </p>
      </div>

      <div className="p-4 md:p-8 flex flex-col md:flex-row items-center gap-8 bg-secondarydark">
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <h2 className="text-white font-bold text-4xl mb-4">Search for Anime</h2>
          <p className="text-center md:text-left text-base md:text-lg">
            Discover new series, read and write reviews, read synopses and more. Placeholder name is the place to find your next anime worthy of your time.
          </p>

          <div>
            <NavButton label="Search" route="/search" className="mt-4 underline font-bold italic underline-offset-8 decoration-4" />
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-64">
          <Image
            src="/search.jpg"
            alt="Search"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="p-4 md:p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full md:w-1/2 h-64">
          <Image
            src="/ranking.jpg"
            alt="ranking"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <h2 className="text-white font-bold text-4xl mb-4">Anime Rankings</h2>
          <p className="text-center md:text-left text-base md:text-lg">
            Find out what animes are popular with users, read reviews and discover animes people think are worth watching.
          </p>

          <div>
            <NavButton label="View Rankings" route="/ranking" className="mt-4 underline font-bold italic underline-offset-8 decoration-4" />
          </div>
        </div>
      </div>


      <div className="p-4 md:p-8 flex flex-col md:flex-row items-center gap-8 bg-secondarydark">
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <h2 className="text-white font-bold text-4xl mb-4">Powered By</h2>
          <p className="text-center md:text-left text-base md:text-lg">
            Placeholder name was built as a hobby project by someone who doesn&apos;t actually watch much anime. Placeholder name is powered by the Jikan API, a RESTful API for MyAnimeList.
          </p>

          <div>
            <a href="https://jikan.moe/" target="_blank" rel="noreferrer" className="mt-4 underline font-bold italic underline-offset-8 decoration-4">Learn More</a>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-64">
          <Image
            src="/jikan.jpg"
            alt="jikan"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;