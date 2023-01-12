import Image from "next/image"


export const Header = () => {
    return (
        <>
        <div className='header'>
            <Image src='/MoonLogo2.jpeg' height={30} width={116} alt='hello'/>
        </div>
        </>
    )
}