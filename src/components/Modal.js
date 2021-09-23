import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';


const Modal = (props) => {

    /*const ref = useRef(null);

    //one solution is to use ref elemn and the below useEffect code, another is to add second onClick method on div below in modal hierarhy with stopPropagation fn
    useEffect(() => {
        const onModalClick = e => {
            if(ref.current === e.target){
                history.push('/');
            }
        }
        document.addEventListener('click', onModalClick, {capture: true})
        //remove the listener on unmount
        return () => {
            document.removeEventListener('click', onModalClick, {capture: true})
        }
    }, [])*/

    const onModalClose = () => {
        props.onDismiss();
    }

    return ReactDOM.createPortal(
        <div /*ref={ref}*/ onClick={onModalClose} className="ui dimmer modals visible active">
            <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;
