import graphql from "graphql";
import User from "../models/User";
import { UserType } from "../graphql/UserGraphQL";

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
      },
      async resolve(par, args) {
        return User.findById(args.id);
      },
    },
  },
});

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    createUser: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(par, args) {
        const user = new User({
          email: args.email,
          password: args.password,
        });
        await user.save().then((res: any) => {
          return { id: res._id };
        });
      },
    },
  },
});
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
export default schema;
