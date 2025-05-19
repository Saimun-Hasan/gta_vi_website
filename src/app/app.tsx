'use client'

import Nav from "./_components/nav";
import useStore from "@/store/useStore";


export default function App({
  children,
  fontVars
}: {
  children: React.ReactNode;
  fontVars: string;
}) {

  const isSheetOpen = useStore((state) => state.isSheetOpen);

  return (
    <body className={`${fontVars} antialiased dark min-h-full ${isSheetOpen ? 'overflow-hidden' : 'overflow-auto'}`}>
      <Nav />
      {children}
    </body>
  );
}
