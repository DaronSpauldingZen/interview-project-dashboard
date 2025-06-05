const schema = `
  type Task {
    id: ID!
    title: String!
    description: String
    status: TaskStatus!
  }

  enum TaskStatus {
    TODO
    IN_PROGRESS
    DONE
  }

  type Mutation {
    updateTaskStatus(id: ID!, status: TaskStatus!): Task
    createTask(title: String!, description: String): Task
  }

  type Query {
    tasks: [Task!]!
  }
`;

module.exports = { schema } 