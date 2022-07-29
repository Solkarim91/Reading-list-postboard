// import { useQuery, gql, useMutation } from '@apollo/client';
// import { useNavigate } from 'react-router-dom';

// // Define the MUTATION
// const DELETE_POST = gql`
//   mutation DeletePost($id: Int!) {
//     deletepost(id: $id) {
//       affected_rows 
//     }
//   }
// `;

// const [deletePost, { loading: deleting, error: deleteError }] = useMutation(DELETE_POST);





// function DeletePost(id) {
//     let postId = id
//     const navigate = useNavigate()
//     const [deletePost, {data, loading, error}] = useMutation(DELETE_POST, {
//       variables: {
//         id: postId
//       },
//     })
//     .then(() => {
//         console.log('post deleted')
//         navigate('/')})
// }

// export default DeletePost