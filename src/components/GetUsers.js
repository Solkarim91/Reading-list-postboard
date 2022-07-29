// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

// Define the QUERY
const GET_USERS = gql`
  query {
    allUsers {
      id
      name
      email
    }
  }
`;

function GetUsers() {
    const { loading, error, data } = useQuery(GET_USERS);
    console.log(data)
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (!data) return <p>Not found</p>;
  
    return data.allUsers.map(({ id, name, email }) => (
      <div key={id}>
        <h3>Name: {name}</h3>
        <br />
        <h2>Email: {email}</h2>
        <br />
      </div>
    ));
  }
  
  export default GetUsers