/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";

export default async function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white">
      <nav>
        <ul className="flex justify-center gap-4">
          <li className="text-lg font-bold text-black hover:underline">
            <Link href="/insert">Insert</Link>
          </li>
        </ul>
      </nav>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <img className="dark:invert" src="/next.svg" width={180} height={38} />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            role="none"
            aria-hidden="true"
            style={{ all: "unset" }}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            rel="noopener noreferrer"
          >
            <img
              className="dark:invert"
              src="/vercel.svg"
              width={20}
              height={20}
            />
            Deploy now
          </button>
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            <img src="/vercel.svg" width={20} height={20} alt="" />
          </button>
          <button
            role="none"
            aria-hidden="true"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Test button
          </button>
        </div>
        {/* <footer className="grid grid-cols-2 gap-4">
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            Test button 2
          </button>
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            Test button 3
          </button>
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            Test button 4
          </button>
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            Test button 5
          </button>
        </footer> */}
        <div className="grid grid-cols-3">
          <img
            src={
              "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
            }
            width={500}
            height={500}
            className="object-fill"
          />
          <img
            src={
              "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"
            }
            width={500}
            height={300}
            className="object-contain"
          />
          <img
            src={
              "https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg"
            }
            width={500}
            height={500}
            className="object-fill"
          />
        </div>
      </main>
    </div>
  );
}
