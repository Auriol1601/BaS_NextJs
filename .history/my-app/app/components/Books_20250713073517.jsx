import Link from "next/link" ; 


async function getBooks() {
        const res= await fetch("http://localhost:3000/api/books") ;
        const json = await res.json() ; 
        return json ;
    }
        const Books = async () => { const
        books = await getBooks() ; 
        return(
            <div>
                <h1>Livres</h1>
                {books.map((book)=> (
                <div key={book.id}>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src={book.img} width="200" height="150" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{book.id}</h2>
                            <p>{livre.titre}</p> 
                            <p>La carte est un document de travail</p>
                            <div className="card-actions justify-end">
                                <Link href={book.link} className="btn btn-primary">Voir sur
                                Amazon</Link>
                                <button className="btn btn-error">
                                Supprimer
                                </button>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                ))}

            </div>
    )
}
export default Books ;