import React, { useState } from 'react'

import Header from './Header'
import Sidebar from './sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [display, setDisplay] = useState(window.innerWidth > 1024 ? "" : "none");
    
    return (
        <>
            <div className="w-full min-h-screen lg:flex lg:flex-row py-2">
                <div className={`hidden w-[265px] bg-[--black] z-10 border-r border-r-[--border] fixed left-0 top-0 lg:static lg:block ${display==='none'?"!hidden":"!block"}`}>
                    <Sidebar />
                </div>
                <div className='px-4 lg:w-[90%] lg:mx-auto'>
                    <Header showHideSideBar={()=>setDisplay(prevDisplay => prevDisplay==="none"?"":"none")  }/>
                    <div className="w-full mt-10">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout