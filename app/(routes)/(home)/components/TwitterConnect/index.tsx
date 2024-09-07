'use client'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {signIn, signOut, useSession} from 'next-auth/react' ;
import {Card, CardContent} from "@/components/ui/card";

export const TwitterConnect = () => {
    const session = useSession();
    const isAuthenticated = session.status === 'authenticated';

    return (
        <Card className="self-center lg:self-start min-w-[300px] h-[250px] radial-gradient  rounded-xl border-[0.5px] border-gray-600">
            <CardContent className="flex flex-col h-full justify-between items-center">
                    <div className='flex flex-col gap-2 h-full justify-center'>
                        <Image src={session?.data?.user?.image ? session.data.user.image : "/svgs/twitter.svg"} height={55} width={55} alt="twitter" className='rounded-full' />
                        <span className="text-white font-medium">Twitter</span>
                    </div>

                <Button onClick={() => isAuthenticated ? signOut() : signIn()} size='lg' className="w-full text-md radial-gradient-secondary border-[0.5px] border-gray-600 text-white py-5 rounded-xl">
                    {isAuthenticated ? 'Signout' : 'Connect'}
                </Button>
            </CardContent>
        </Card>
    )
}
