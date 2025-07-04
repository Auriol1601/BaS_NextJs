


async function fetchRepos(user) {
    const res = await fetch(`https://api.github.com/users/${user}/repos`) ; const json =
    await res.json() ;
    return json ;
}
const Repos = async ({user}) => { 
    
    const repos = await fetchRepos(user) ;
    console.log(repos) ;

    return (
        <div>
            <h1>{utilisateur}' Repos</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Nom de la Repo</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repos.map((repo) => (
                            <tr key={repo.id}>
                                <td>{repo.name}</td>
                                <td>{repo.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Repos ;
