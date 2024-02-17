import React, { useState } from 'react'

import ArrowDown from '../../asset/img/icon/ArrowDown.svg'
import ArrowUp from '../../asset/img/icon/ArrowUp.svg'
import { MenuItemsProps } from '../../interface/Menu';

const MenuItems = ({ icon, title, children }: MenuItemsProps) => {

    const [open, setOpen] = useState(false);


    return (
        <>
            <div className='flex flex-col   gap-y-[12px]  '>
                <div onClick={() => setOpen(prevOpen => !prevOpen)} className='flex flex-row gap-x-[12px] min-h-[48px] items-center cursor-pointer'>
                    <img src={icon} alt={title} />
                    <span className='flex-grow'>{title}</span>
                    <img src={open ? ArrowUp : ArrowDown} alt='arrow' />


                </div>

                {open && children.map((item) =>
                    <div className="ps-[36px] rounded-[--radius] hover:bg-[--brand] min-h-[48px] flex items-center hover:text-[--black]">{item}</div>
                )}
            </div>
        </>
    )
}

export default MenuItems