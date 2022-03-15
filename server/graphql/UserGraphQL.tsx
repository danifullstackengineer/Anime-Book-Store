import graphql, { GraphQLNonNull } from "graphql";

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
    GraphQLID,
} from "graphql";

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
      phone: { type: GraphQLString },
    created: {type: GraphQLString},
    address: {
      type: new GraphQLObjectType({
        name: "AddressType",
        fields: () => ({
          country: { type: GraphQLString },
          city: { type: GraphQLString },
          postalcode: { type: GraphQLString },
          street: { type: GraphQLString },
            street_nr: { type: GraphQLInt },
        }),
      }),
    },
  }),
});

export { UserType };
