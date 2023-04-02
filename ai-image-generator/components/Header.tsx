import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <Image
          src="https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png"
          alt="logo"
          width={30}
          height={30}
        />
        <div>
          <h1 className="font-bold">
            Lucas Ribeiro Pires <span className="text-violet-500">AI</span>{" "}
            Image Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALLE.E 2, Chat GPT & Microsoft Azure
          </h2>
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <Link href="https://github.com/lucaspires-source" className="px-2">
          <Image

            height={30}
            width={30}
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github logo"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/lucas-ribeiro-pires/" className="px-2">
          <Image
            height={30}
            width={30}
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="linkedin logo"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
