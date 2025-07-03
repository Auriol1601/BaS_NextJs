
async function fetchGitHubusers ( ){
const res = await fetch("https://api.github.com/search/users ? q=greg") ;
const json = await res.json () ; return
json ;
}
const GitHubuserspage= async()=> {
const users = await fetchGitHubusers () ;
console.log (users) ;
return(
<div>
<h1>Page des utilisateurs de GitHub</h1>
</div>
)
export default GitHubuserspage;