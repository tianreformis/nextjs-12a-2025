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
      className={`w-full min-h-screen px-8 py-6
    ${poppins.className}
    `}>
      {children}
    </section>
  );
}
