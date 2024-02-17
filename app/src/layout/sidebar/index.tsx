import DashboardIcon from '../../asset/img/icon/dashboard.svg'
import GasIcon from '../../asset/img/icon/Gas.svg'
import InvoiceIcon from '../../asset/img/icon/invoice.svg'
import Logo from '../../asset/img/Logo.png'
import MenuItem from './MenuItem'
import MenuItems from './MenuItems'
import ReferralsIcon from '../../asset/img/icon/referral.svg'
import WalletIcon from '../../asset/img/icon/Wallet.svg'

const Sidebar = () => {

        

    return (
        <>
            <div className="flex flex-col gap-y-[12px]  text-xl text-[--gray]">
                <div className='flex justify-center w-full'>
                    <img className='w-36' src={Logo} alt="Logo" />
                </div>
                <div className="flex flex-col ps-[20px] py-[12px] gap-y-[12px]">
                    <MenuItem icon={DashboardIcon} title='Dashboard' />
                    <MenuItem icon={WalletIcon} title='Wallets' />
                    <MenuItem icon={GasIcon} title='Gas Station' />
                    <MenuItem icon={ReferralsIcon} title='Referrals' />
                    <MenuItems icon={InvoiceIcon} title='Invoices' children={['Withdraw','Deposit']} />
                  

                </div>


            </div>
        </>
    )
}

export default Sidebar