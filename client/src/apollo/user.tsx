import { gql } from "@apollo/client";

const getEmail = gql`
    query($id: ID!){
        getUser(id: $id){
            email
        }
    }
`;

export { getEmail };
