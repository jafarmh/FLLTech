import { MenuItemProps } from '../../interface/Menu'
import React from 'react'

const MenuItem = ({icon,title}:MenuItemProps) => {
    return (
        <>
            <div className='flex flex-row gap-x-[12px] h-[48px] items-center'>
                <img src={icon} alt={title} />
                <span>{title}</span>
            </div>
        </>
    )
}

export default MenuItem