// Import everything needed to use the `useQuery` hook
import { useQuery, gql, useMutation } from '@apollo/client';
// import { useNavigate } from 'react-router-dom';
import DeletePost from './DeletePost'
// import { useState, useEffect } from "react"


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

// Define the MUTATION
const DELETE_POST = gql`
  mutation DeletePost($id: Int!) {
    deletepost(id: $id) {
      title
    }
  }
`;


function GetPosts() {
  const { loading, error, data } = useQuery(GET_POSTS);
  
  const [deletePost, { mdata, mloading, merror}] = useMutation(DELETE_POST, {refetchQueries : [
    {
        query: GET_POSTS
    }
  ]});

  const handleDelClick = (postId) => {
      deletePost({ variables : {id: postId}});
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div className="post-list">
      {data.allPosts.map(({ id, title, body, postedBy }) => (
        <div className="post-preview" key={id}>
          <h3>Title: {title}</h3>
          <br />
          <b>About this post:</b>
          <p>{body}</p>
          <br />
          <b>Written by:</b>
          <br />
          <div className="buttons">
            <p>{postedBy.name}</p>
            <button className='custom-btn' onClick={ () => handleDelClick(parseInt(id)) }>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GetPosts