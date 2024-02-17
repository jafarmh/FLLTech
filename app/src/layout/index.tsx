import Header from './Header'
import React from 'react'
import Sidebar from './sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="w-full min-h-screen lg:flex lg:flex-row py-2">
                <div className='w-[265px]  border-r border-r-[--border]'><Sidebar /></div>
                <div className='px-4 lg:w-[90%] lg:mx-auto'>
                    <Header />
                    <div className="w-full mt-10">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout