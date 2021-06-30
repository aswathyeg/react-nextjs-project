import { ApolloServer, gql, IResolvers } from 'apollo-server-micro';

const typeDefs = gql`
  enum TaskStatus {
    active
    completed
  }

  type Task {
    id: Int!
    title: String!
    status: TaskStatus!
  }

  input CreateTaskInput {
    title: String!
  }

  input UpdateTaskInput {
    id: Int!
    title: String
    status: TaskStatus
  }

  type Query {
    tasks(status: TaskStatus): [Task!]!
    task(id: Int!): Task
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task
    updateTask(input: UpdateTaskInput!): Task
    deleteTask(id: Int!): Task
  }
`;

const resolvers: IResolvers = {
  Query: {
    tasks(parent: any, args: any, context: any) {
      return [];
    },
    task(parent: any, args: any, context: any) {
      return null;
    },
  },
  Mutation: {
    createTask(parent: any, args: any, context: any) {
      return null;
    },
    updateTask(parent: any, args: any, context: any) {
      return null;
    },
    deleteTask(parent: any, args: any, context: any) {
      return null;
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });