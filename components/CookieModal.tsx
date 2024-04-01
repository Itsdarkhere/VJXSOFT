'use client'

import { useEffect } from "react"

export default function CookieModal() {
    
    useEffect(() => {
        let target = document.getElementById('my_modal_1') as HTMLDialogElement;
        if (target) target.showModal();
    }, [])

    const accept = () => {

        closeDialog();
    }

    const deny = () => {


        closeDialog();
    }

    const closeDialog = () => {
        let target = document.getElementById('my_modal_1') as HTMLDialogElement;
        if (target) target.close();
    }

    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-zinc-700">Evästeiden käyttö</h3>
                <p className="py-4 text-zinc-500">
                    Käytämme sivustollamme evästeitä parantaaksemme käyttökokemustasi. 
                    Evästeet auttavat meitä analysoimaan sivuston käyttöä ja kohdentamaan mainontaa. 
                </p>
                <div className="modal-action">
                <div className=" flex flex-row gap-2">
                    <button onClick={deny} className="btn ">Hylkää</button>
                    <button onClick={accept} className="btn btn-primary">Hyväksy</button>
                </div>
                </div>
            </div>
        </dialog>
    )
}