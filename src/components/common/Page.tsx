import React, { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  return (
    <main className="container mx-auto min-h-[800px] max-w-[1220px] px-14 py-16">
      {children}
    </main>
  );
}

export default Page;
