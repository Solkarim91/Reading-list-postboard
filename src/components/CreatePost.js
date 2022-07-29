import { gql, useMutation } from '@apollo/client';
import { useState } from "react"
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Define the MUTATION
const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!) {
    createpost(
      title: $title,
      body: $body) {
        title 
    }
  }
`;

// Define the QUERY
const GET_POSTS = gql`
  query {
    allPosts {
      id
      title
      body
      postedBy {
        name
      }
    }
  }
`;

export default function Mutation() {
  
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const navigate = useNavigate()
  
  const [createPost, {loading, error}] = useMutation(CREATE_POST, {
    variables: {
      title: title,
      body: body
    }, 
    refetchQueries: [
      {query: GET_POSTS} // DocumentNode object parsed with gql
    ],
  })
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: ${error.message}</p>;
  
  return (
  <div className='create'>
    <h2>Add a new post</h2>
    <form>
      <label>Post Title:</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Post Body:</label>
      <textarea
          required
          // This will update the value of our 'body' variable
          value={body}
          onChange={(e) => setBody(e.target.value)}
      ></textarea>
    </form>
    <div className="buttons">
      <button className='custom-btn' onClick={() => createPost()
        .then(() => {
          console.log('new post added')
          setTitle('')
          setBody('')
          navigate('/')
      })
      }>Post</button>
    </div>
  </div>
  )
}