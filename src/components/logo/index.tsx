import Link from 'next/link';
import Image from "next/image";
import { LogoImage } from './style';

export default function LogoContainer() {
    return (
        <Link passHref={true} href={'/'}>
            <Image
                loading="eager"
                src="/icons/logo.svg"
                alt="Logo"
                width={185}
                height={40}

            />
        </Link>
    );
}
