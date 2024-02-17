import React from 'react'

const Header = ({showHideSideBar}:{showHideSideBar:Function}) => {
    return (
        <>
            <div className="h-[80px]   flex flex-row text-[--white]">
                <div className='cursor-pointer px-1 z-20 ' onClick={()=>showHideSideBar()}><small>click hear</small></div>
                <div className=' text-xl'>
                    <b>
                    Invoices
                    </b>
                </div>
            </div>
        </>
    )
}

export default Header