import Repos from "@/app/components/Repos";



const UserRepospage = ({params : {user}}) => { return
    (
        <div>
            <Repos user={user} />
        </div>
    )
};
export default UserRepospage ;