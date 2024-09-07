import Image from "next/image";
import {SecurityPopup, TwitterConnect} from "@/app/(routes)/(home)/components";

export default function Home() {
    return (
        <div className="w-full min-h-[90dvh] flex items-center justify-center relative">
            <div className="flex items-center flex-col gap-10 p-4">
                <Image src="/svgs/person.svg" height={256} width={270} alt="person" />
                <div className='flex gap-2'>
                    <Image src='/svgs/share.svg' alt='share' height={25} width={25} className={'self-start mt-1'}/>
                    <div className='flex flex-col gap-2'>
                        <p className={`text-[24px] font-bold font-merriweather`}>
                            Connect Your Social Media Channel
                        </p>
                    <p className='font-[14px] text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </p>
                    </div>
                </div>
                <TwitterConnect/>
                <SecurityPopup/>
            </div>
        </div>
    );
}
