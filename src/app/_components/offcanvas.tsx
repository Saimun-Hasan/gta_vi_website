'use client';

import Image from "next/image";
import useStore from "@/store/useStore";

//UI Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";


export default function OffCanvas() {
    const isSheetOpen = useStore((state) => state.isSheetOpen);

    return (
        <>
            <div className={` fixed top-0 right-0 h-full w-[50vw] bg-[#14131c] text-white transform transition-transform duration-500 ${isSheetOpen ? 'translate-x-0 delay-100' : 'translate-x-full'} z-40`}>
                <Tabs defaultValue="people" className="p-[4vw]">
                    <TabsList className="bg-transparent gap-6">
                        <TabsTrigger value="people" className="flex items-center p-[1.5vw] rounded-[1000px] cursor-pointer transition-colors text-fluid text-white! hover:text-[#fff9cb]! data-[state=active]:!bg-white data-[state=active]:!text-[#111117] font-gta font-medium">People</TabsTrigger>
                        <TabsTrigger value="places" className="flex items-center p-[1.5vw] rounded-[1000px] cursor-pointer transition-colors text-fluid text-white! hover:text-[#fff9cb]! data-[state=active]:!bg-white data-[state=active]:!text-[#111117] font-gta font-medium">Places</TabsTrigger>
                        <TabsTrigger value="trailers" className="flex items-center p-[1.5vw] rounded-[1000px] cursor-pointer transition-colors text-fluid text-white! hover:text-[#fff9cb]! data-[state=active]:!bg-white data-[state=active]:!text-[#111117] font-gta font-medium">Trailers</TabsTrigger>
                        <TabsTrigger value="downloads" className="flex items-center p-[1.5vw] rounded-[1000px] cursor-pointer transition-colors text-fluid text-white! hover:text-[#fff9cb]! data-[state=active]:!bg-white data-[state=active]:!text-[#111117] font-gta font-medium">Downloads</TabsTrigger>
                    </TabsList>

                    <TabsContent value="people" className="overflow-hidden pt-[3vw] pr-[3vw] pb-[3vw] pl-[0vw]">
                        <div className="flex flex-col items-start gap-[.25vw]">
                            <Link href={"/"} className="font-gta font-extrabold text-7xl uppercase hover:text-[#fff9cb]">
                                JASON DUVAL
                            </Link>
                            <Link href={"/"} className="font-gta font-extrabold text-7xl uppercase hover:text-[#fff9cb]">
                                lucia caminos
                            </Link>
                            <Link href={"/"} className="font-gta font-extrabold text-7xl uppercase hover:text-[#fff9cb]">
                                cal hampton
                            </Link>
                            <Link href={"/"} className="font-gta font-extrabold text-7xl uppercase hover:text-[#fff9cb]">
                                boobie ike
                            </Link>
                            <Link href={"/"} className="font-gta font-extrabold text-7xl uppercase hover:text-[#fff9cb]">
                                dre&apos;quan priest
                            </Link>
                            <Link href={"/"} className="font-gta font-extrabold text-7xl uppercase hover:text-[#fff9cb]">
                                real dimez
                            </Link>
                            <Link href={"/"} className="font-gta font-extrabold text-7xl uppercase hover:text-[#fff9cb]">
                                raul bautista
                            </Link>
                            <Link href={"/"} className="font-gta font-extrabold text-7xl uppercase hover:text-[#fff9cb]">
                                brian heder
                            </Link>
                        </div>
                    </TabsContent>

                    <TabsContent value="places" className="overflow-hidden pt-[3vw] pr-[3vw] pb-[3vw] pl-[0vw]">
                        <div className="flex flex-col items-start gap-[.25vw]">
                            <Link href={"/"} className="font-gta font-extrabold text-7xl uppercase hover:text-[#fff9cb]">
                                Vice city
                            </Link>
                            <Link href={"/"} className="font-gta font-extrabold text-7xl uppercase hover:text-[#fff9cb]">
                                leonida keys
                            </Link>
                            <Link href={"/"} className="font-gta font-extrabold text-7xl uppercase hover:text-[#fff9cb]">
                                grassrivers
                            </Link>
                            <Link href={"/"} className="font-gta font-extrabold text-7xl uppercase hover:text-[#fff9cb]">
                                port gellhorn
                            </Link>
                            <Link href={"/"} className="font-gta font-extrabold text-7xl uppercase hover:text-[#fff9cb]">
                                Ambrosia
                            </Link>
                            <Link href={"/"} className="font-gta font-extrabold text-7xl uppercase hover:text-[#fff9cb]">
                                mount kalaga
                            </Link>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            <div className={`fixed top-0 left-0 w-full h-full bg-[#2f6276] flex items-center justify-center transition-opacity duration-500 z-30 ${isSheetOpen ? 'opacity-100' : 'opacity-0 pointer-events-none  delay-200'}`}>
                <div className="grid grid-cols-2 content-center justify-items-center w-full">
                    <div>
                        <Image
                            src="/menu_logo.svg"
                            alt="GTA VI Menu Logo"
                            width={0}
                            height={0}
                            priority
                            style={{
                                width: '350px',
                                height: '350px'
                            }}
                        />
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}