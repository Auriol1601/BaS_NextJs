


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
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repos.map((repo) => (
                            <tr key={repo.id}>
                                <td>{repo.name}</td>
                                <td>{repo.description || 'No description'}</td>
                                <td>
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-link">
                                        View on GitHub
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}
export default Repos ;

