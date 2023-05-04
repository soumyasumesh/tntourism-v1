function Users({ users }) {

    if (users
        && Object.keys(users).length === 0
        && Object.getPrototypeOf(users) === Object.prototype) {
           return <p>No data</p> 
        }
   
   return (
        <>
        <h1>Users</h1>
        {
           users.map(user => <h4 key={user.name}>{user.name}</h4>)
        }
        </>
    )
}

export default Users;

export async function getServerSideProps() {
    const {response, err}= await fetch('https://jsonplaceholder.typicode.com/users');
    if(err)
    {
    return {
        props: {
           users: null,
        }
    };
}


    console.log('Data='+ response);
    
    return {
        props: {
           users: response,
        }
    };
}