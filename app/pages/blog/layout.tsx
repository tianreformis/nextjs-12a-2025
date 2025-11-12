import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Tidak ada <html> dan <body>
    <section
      className={`max-w-3xl mx-auto p-6 flex flex-col justify-start items-start
    ${poppins.className}
    `}>
      {children}
    </section>
  );
}
