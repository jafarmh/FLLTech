import avatar from '../asset/img/avatar/Ellipse 270.png'
import notification from '../asset/img/icon/notification.svg'

const Header = ({showHideSideBar}:{showHideSideBar:Function}) => {
    return (
        <>
            <div className="h-[80px]   flex flex-row text-[--white] items-center">
                <div className='cursor-pointer px-1 z-20 ' onClick={()=>showHideSideBar()}><small>click hear</small></div>
                <div className=' text-xl flex-grow'>
                    <b>
                    Invoices
                    </b>
                </div>
                <div className="flex flex-row items-center gap-x-4">
                    <div>
                        <img src={notification} alt="notification" />
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <img src={avatar} alt="avatar" />
                        <span>profile</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header