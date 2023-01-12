import { Header } from './Header';



export const Layout = ({children}) => {
    return (
        <>
            <main className='main'>
                <Header />
                {children}
            </main>
            
        </>

    )
}