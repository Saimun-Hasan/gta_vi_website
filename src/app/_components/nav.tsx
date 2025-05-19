"use client";

import Image from "next/image";

// UI Components
import OffCanvas from "./offcanvas";
import useStore from "@/store/useStore";

export default function Nav() {
    const isSheetOpen = useStore((state) => state.isSheetOpen);
    const toggleSheet = useStore((state) => state.toggleSheet);

    return (
        <>
            <nav className={`flex-1 items-center justify-between ml-auto hidden lg:flex gap-6 fixed w-[100vw] p-[60px] z-50 pointer-events-none`}>
                <button className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none">
                    <Image
                        src="/vi_logo.svg"
                        alt="GTA VI Menu Logo"
                        width={0}
                        height={0}
                        priority
                        className={`${isSheetOpen ? 'hidden' : 'block'}`}
                        style={{
                            width: '50px',
                            height: '50px'
                        }}
                    />
                </button>
                <div className="pointer-events-auto">
                    <button onClick={toggleSheet} className={`top-[60px] right-[60px] group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none`}>
                        <div className={`flex flex-col items-center justify-center gap-1.5`}>
                            <div className={`bg-white w-[30px] h-[6px] transition duration-300 ${isSheetOpen ? 'rotate-45 translate-y-[6px]' : '-rotate-0'}`}></div>
                            <div className={`bg-white w-[30px] h-[6px] transition duration-300 ${isSheetOpen ? '-rotate-45 translate-y-[-6px]' : '-rotate-0'}`}></div>
                        </div>
                    </button>
                </div>
            </nav>


            <OffCanvas />
        </>
    );
}