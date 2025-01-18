import './modalSequencia.css';
import trophy from '/imagens-svg/trofeus.svg'

export default function ModalSequencia() {
    return (
        <div className="modal_container">
            <div className='modal_content'>
                <h1><strong>1°</strong> dia da sequência</h1>
                <div className="week_container">
                    <p className='week_days selected'>D</p>
                    <p className='week_days'>S</p>
                    <p className='week_days'>T</p>
                    <p className='week_days'>Q</p>
                    <p className='week_days'>Q</p>
                    <p className='week_days'>S</p>
                    <p className='week_days'>S</p>
                </div>
                <div className="modal_section">
                    <div className="content_img">
                        <img src={trophy} alt="troféis" />
                    </div>
                    <div className="content_text">
                        <p>Mantenha sua sequência para <strong>ganhar mais recompensas</strong>!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}