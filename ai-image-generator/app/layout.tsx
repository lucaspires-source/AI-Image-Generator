import Header from "@/components/Header";
import PromptInput from "@/components/PromptInput";
import "../styles/globals.css";

export const metadata = {
  title: "AI Image Generator",
  description: "AI Image Genarato made by Lucas RIbeiro Pires",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <PromptInput />
        {children}
      </body>
    </html>
  );
}
