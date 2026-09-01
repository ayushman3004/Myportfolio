import { Cormorant_Garamond, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://ayushmanbhattacharya.dev"),
  title: "Ayushman Bhattacharya | Full-Stack Developer",
  description: "Portfolio of Ayushman Bhattacharya, Full-Stack Developer specializing in React.js, Next.js, Node.js, Express.js, and AI-powered systems.",
  keywords: [
    "Ayushman Bhattacharya",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Software Engineer Portfolio",
    "IIT Guwahati Kirijo",
    "Node.js",
    "MongoDB Certified"
  ],
  authors: [{ name: "Ayushman Bhattacharya" }],
  creator: "Ayushman Bhattacharya",
  openGraph: {
    title: "Ayushman Bhattacharya — Full-Stack Developer",
    description: "Building modern, scalable web applications and AI-powered products.",
    url: "https://ayushmanbhattacharya.dev",
    siteName: "Ayushman Bhattacharya Portfolio",
    images: [
      {
        url: "/portrait.png",
        width: 1200,
        height: 630,
        alt: "Ayushman Bhattacharya",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayushman Bhattacharya — Full-Stack Developer",
    description: "Building modern, scalable web applications and AI-powered products.",
    images: ["/portrait.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-cream-50 text-earth-950 font-sans antialiased selection:bg-cognac selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
