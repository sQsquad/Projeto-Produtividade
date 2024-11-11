import './desktop-header.css'
import Logo from '../logo'
import Icons from '../icons-modal'
import User from '../../User'
import BotaoTema from '../../BotaoTema'


export default function DesktopHeader () {

    return (

        <header className='desktop_header'>
            <Logo/>

            <div className='desktop_header_divEnd'>
                <Icons/>
                <BotaoTema />
                <User/>
            </div>
        </header>
             
    )
}
