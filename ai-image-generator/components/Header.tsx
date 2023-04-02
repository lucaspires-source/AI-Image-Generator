import Image from "next/image"

function Header() {
  return (
    <header className="flex justify-between">
      <div className="flex space-x-2 items-center">
        <Image src='https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png' alt="logo" width={30} height={30} />
        <div>
          <h1 className="font-bold">
          Lucas Ribeiro Pires <span className="text-violet-500">AI</span> Image Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALLE.E 2, Chat GPT & Microsoft Azure
          </h2>
        </div>
      </div>
      <div>
        right
      </div>
      </header>
  )
}

export default Header