import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline"

export default function Header() {
    return (
      <header className="flex flex-col sm:flex-row items-center sm:justify-between m-5">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="Home" Icon={HomeIcon} />
          <HeaderItem title="TREADING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
        <Image
          className="object-contain"
          src="https://links.papareact.com/ua6"
          width={200}
          height={100}
        />
      </header>
    );
}
