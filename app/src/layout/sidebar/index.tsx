import DashboardIcon from '../../asset/img/icon/dashboard.svg'
import GasIcon from '../../asset/img/icon/Gas.svg'
import GrayLine from '../../components/GrayLine'
import InvoiceIcon from '../../asset/img/icon/invoice.svg'
import IpnIcon from '../../asset/img/icon/ipn.svg'
import Logo from '../../asset/img/Logo.png'
import LogsIcon from '../../asset/img/icon/log.svg'
import MenuItem from './MenuItem'
import MenuItems from './MenuItems'
import ReferralsIcon from '../../asset/img/icon/referral.svg'
import SecurityIcon from '../../asset/img/icon/security.svg'
import SupportIcon from '../../asset/img/icon/support.svg'
import SwapIcon from '../../asset/img/icon/swap.svg'
import Transactions from '../../asset/img/icon/Transactions.svg'
import TransactionsIcon from '../../asset/img/icon/TransactionsBulk.svg'
import WalletIcon from '../../asset/img/icon/Wallet.svg'
import WebhookIcon from '../../asset/img/icon/webhook.svg'
import avatar from '../../asset/img/avatar/Ellipse 270.png'

const Sidebar = () => {



    return (
        <>
            <div className="flex flex-col gap-y-[12px]  text-xl text-[--gray]">
                <div className='flex justify-center w-full'>
                    <img className='w-36' src={Logo} alt="Logo" />
                </div>
                <div className="flex flex-col px-[12px] py-[12px] gap-y-[12px]">
                    <MenuItem icon={DashboardIcon} title='Dashboard' />
                    <MenuItem icon={WalletIcon} title='Wallets' />
                    <MenuItem icon={GasIcon} title='Gas Station' />
                    <MenuItem icon={ReferralsIcon} title='Referrals' />
                    <MenuItems icon={InvoiceIcon} title='Invoices' children={['Withdraw', 'Deposit']} />
                    <MenuItem icon={TransactionsIcon} title='Transactions' />
                    <MenuItem icon={SwapIcon} title='Swap' />
                    <MenuItem icon={SecurityIcon} title='Security' />
                    <MenuItem icon={SupportIcon} title='Support' />
                    <MenuItem icon={WebhookIcon} title='Webhook' />
                    <MenuItem icon={LogsIcon} title='Logs' />
                    <MenuItem icon={IpnIcon} title='IPNs' />
                    <GrayLine />

                    <div className="flex flex-row gap-x-4 flex-wrap">
                        <div className="flex flex-row gap-2 items-center">
                            <img className='w-[40px] h-[40px] object-cover' src={avatar} alt="avatar" />
                            <div className="flex flex-col gap-1 text-sm">
                                <b className='text-[--white]'>Frankie Evans</b>
                                <span className='text-[--gray]'>Frankie@gmail.com</span>
                            </div>
                        </div>

                        <div>
                            <img src={Transactions} alt="Transactions" />
                        </div>

                    </div>


                </div>


            </div>
        </>
    )
}

export default Sidebar