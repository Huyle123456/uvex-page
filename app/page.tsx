import { Button } from "@/components/button";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center ">
        <Image
          src="/logos/logo-main.svg"
          alt="uvex logo"
          width={190}
          height={190}
          priority
        ></Image>
        <h1 className="text-4xl font-bold text-center ">
          Find your solutions with UVEX SAFETY SINGAPORE
        </h1>
        <Button>
          <Link href={ROUTES.QUESTIONAIRE}>Start the questionnaire</Link>
        </Button>
      </main>
    </div>
  );
}
