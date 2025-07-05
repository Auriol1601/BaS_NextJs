
import Link from 'next/link';
async function fetchGitHubusers ( ){
const res = await fetch("https://api.github.com/search/users?q=greg");await new 
Promise((resolve)=> setTimeout(resolve, 5000));
const json = await res.json () ; 
               return json.items;
}
const Githubuserspage= async()=> {
    const users = await fetchGitHubusers () ;
    console.log (users) ;
    return(

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>URL</th>
                            <th>Repos</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user)=> (
                        <tr key={user.id}>
                                <td>
                                    <th>
                                        <Link href={`/githubusers/${user.login}`} className="btn btn- link">
                                                  Accéder aux dépôts
                                        </Link>
                                    </th>

                                <div className="flex items-center space-
                                    x-3">
                                    <div className="avatar">
                                        <div className="mask mask-
                                            squircle w-12 h-12">
                                                <img src={user.avatar_url} />
                                            </div>
                                        </div>
                                    <div>
                                    <div className="font-bold">
                                        {user.login}
                                    </div>
                                    <div className="text-sm opacity-50">
                                     {user.id}
                                    </div>
                                </div>
                                </div>
                            </td>
                            <td>
                                <Link href={user.html_url} className="btn btn-
                                link">
                                Voir sur GitHub
                                </Link>
                            </td>
                            <th>
                                Aller aux dépôts
                            </th>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

    );
}
export default Githubuserspage;