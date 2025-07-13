'use client' ;
import { useState } from 'react' ;
import Link from "next/link" ;

const Addbook= ()=> {
const [modalOpen, setModalOpen]= useState(false) ;
return (
    <div>
        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Ajouter Livre </button>
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Add New Book</h3>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
    </div>
    )
}
export default Addbook ;