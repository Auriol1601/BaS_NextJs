'use client' ;
import { useState } from 'react' ;
import Link from "next/link" ;
import { v4 as uuidv4 } from 'uuid' ;

const Addbook= ()=> {
const [modalOpen, setModalOpen]= useState(false) ;
const [newBookTitle, setNewBookTitle]= useState('') ;
const handleSubmitNewBook = async (e) =>{
e.preventDefault() ;
    const res = await fetch(`/api/books/`,{
            method : 'POST',
    headers:{
        'Content-type' : 'application/json'
    },
    body : JSON.stringify({
        title : newBookTitle,
        link : " https://www.amazon.com/dp/B0979MGJ5J",
        img : "https://via.placeholder.com/600/92c952"
    })
    })
    if(res.ok){
    setNewBookTitle('') ; setModalOpen(false)
    ;
    }
}
return (
    <div>
        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Ajouter Livre </button>
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Add New Book</h3>
            <div className="modal-action">
            <form method="dialog" onSubmit={handleSubmitNewBook}>
                <button className="btn">Close</button>
                <h3 className="font-bold text-lg">Ajouter un nouveau livre</h3>
                <input type="text"
                value={newBookTitle}
                onChange={e=> setNewBookTitle(e.target.value)}
                placeholder="Entrez le titre du nouveau livre"
                className="input input-bordered w-full max-w-xs"
                />
                <button type="submit" className='btn btn-primary'> 
                    Ajouter un livre
                </button>
            </form>
            </div>
        </div>
        </dialog>
    </div>
    )
}
export default Addbook ;