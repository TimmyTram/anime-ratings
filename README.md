# TOKEI: An Application focused on finding Anime and Manga Information

Tokei is a website built using Typescript, ReactJS, Next.JS 15, Prisma ORM, TailwindCSS and MongoDB.

The primary purpose of Tokei is to create a simple modernized version of MyAnimeList using a modern day tech stack.

## Application URL
https://anime-ratings.vercel.app/

## Environment Variables
```env
DATABASE_URL="MongoDB Url here"
NEXTAUTH_SECRET="secret here"
```

## Run Instructions
1. Clone the repository
```git
git clone https://github.com/TimmyTram/anime-ratings.git
```

2. Navigate to the correct directory
```cmd
cd .\anime-ratings\
```

3. Install dependencies:
```cmd
npm install
```

4. Create and fill  out the .env.local file in the .\anime-ratings\ folder with the required environment variables listed in: [Environment Variables](#environment-variables)

5. Generate Prisma Client:
```cmd
npx prisma generate
```

6. Start the development server:
```cmd
npm run dev
```

## Credits:
All anime and manga data was sourced from MyAnimeList using the Jikan v4 API. https://jikan.moe/

All comments shown are sourced from our users on Tokei