import Image from "next/image";

export function ChannelPreview() {
  return (
    <div className="hidden md:flex flex-col justify-center text-center items-center py-10 gap-6 lg:w-[40%] bg-[#3A3A3A]">
      <Image src="/svgs/eye-scan.svg" alt="eye-scan" width={100} height={100} />
      <h1 className="text-2xl">Select a channel to view preview</h1>
      <p>The preview will only be available once you selected the channel</p>
    </div>
  );
}
