


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

   
    <table className="table">
        <tbody>
        {/* row 1 */}
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
                </td>
                <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 2 */}
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                    </div>
                </div>
                </td>
                <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                </td>
                <td>Red</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 3 */}
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                        src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                    </div>
                </div>
                </td>
                <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                </td>
                <td>Crimson</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
            {/* row 4 */}
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                    </div>
                </div>
                </td>
                <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                </td>
                <td>Indigo</td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </tbody>
    </table>
        
    )
}
export default Repos ;
