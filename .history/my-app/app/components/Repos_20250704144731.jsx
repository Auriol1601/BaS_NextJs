async function fetchRepos(user) {
    const res = await fetch(`https://api.github.com/users/${user}/repos`) ; const json =
    await res.json() ;
    return json ;
}
const Repos = async ({utilisateur}) => { 
    
    const repos = await fetchRepos(utilisateur) ;
    console.log(repos) ;
    return (
        <div>
            <h1>Repos</h1>
        </div>
    )
}
export default Repos ;


const UserReposPage = ({params : {user}}) => { return
(
<div>
<Repos user={user} />
</div>
)
};
export default UserReposPage ;