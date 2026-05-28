"use client";

import {
    HomeIcon,
    MusicalNoteIcon,
    FilmIcon,
} from '@heroicons/react/24/outline';
import OlympicRingsStatic from '@/public/Olympic_Rings.svg'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from "clsx";

function OlympicRingsIcon({ className }) {
	return (
		<div className={className}>
			<Image
				src={OlympicRingsStatic}
				alt="Olympic Rings"
				width={24}
				height={24}
				className="w-full h-full object-contain"
			/>
		</div>
	);
}

const links = [
    {name: "Home", href: "/", icon: HomeIcon},
    {name: "Music", href: "/music", icon: MusicalNoteIcon},
    {name: "Movies", href: "/movies", icon: FilmIcon},
		{name: "Olympics", href: "/olympics", icon: OlympicRingsIcon},
]

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
             {
              'bg-sky-100 text-blue-600': pathname === link.href,
             },
            )}
					>
						<LinkIcon className="w-10" />
						<p className="hidden md:block">{link.name}</p>
					</Link>
				);
			})}
		</>
	);


}