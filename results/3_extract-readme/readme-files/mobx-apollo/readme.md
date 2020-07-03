# mobx-apollo

[![npm version](https://badge.fury.io/js/mobx-apollo.svg)](https://badge.fury.io/js/mobx-apollo)

# Installation

`yarn add mobx mobx-apollo`

# Usage

```javascript
import graphql from 'mobx-apollo';

type config = {
  client: apolloClientInstance, // new ApolloClient()
  query: gqlInstance, // gql`..`
  onError?: Function,
  onFetch?: Function, // invoked every time new data is fetched
  ...ApolloWatchQueryOptions // (see Apollo Client docs)
};

const store = new class {
  constructor() {
    this.allPosts = graphql({ ...config });

    // or lazy load it
    extendObservable(this, {
      get allPosts() {
        return graphql({ ...config });
      }
    });

    // when lazy loading, you should return graphql() without adding anything extra within the block to avoid over-fetching
    // utilize another computed for any extra checking or manipulation of data
  }
}();

autorun(() => console.log(toJS(store.allPosts.data.allPosts))); // [{ title: 'Hello World!' }]

type response = {
  error: ApolloError, // (see Apollo Client docs)
  loading: boolean,
  data: { queryAlias: Array<Object> },
  ref: ApolloObservableQuery // (see Apollo Client docs)
};
```

## Examples

[![Edit 76j6x4lyx](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/76j6x4lyx)

### Example without subscriptions

```javascript
import React, { Component } from 'react';

// create-react-app example
// yarn add apollo-client-preset graphql graphql-tag mobx mobx-apollo mobx-react

import gql from 'graphql-tag';
import graphql from 'mobx-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { extendObservable } from 'mobx';
import { inject, observer, Provider } from 'mobx-react';

// schema built with Graphcool
// type Post implements Node {
//   id: ID! @isUnique
//   title: String!
//   createdAt: DateTime!
//   updatedAt: DateTime!
// }

// fragments, queries and mutations
const postFragment = gql`
  fragment post on Post {
    id
    title
    createdAt
    updatedAt
  }
`;

const allPostsQuery = gql`
  {
    allPosts {
      ...post
    }
  }
  ${postFragment}
`;

const createPostMutation = gql`
  mutation createPost($title: String!) {
    createPost(title: $title) {
      ...post
    }
  }
  ${postFragment}
`;

const updatePostMutation = gql`
  mutation updatePost($id: ID!, $title: String!) {
    updatePost(id: $id, title: $title) {
      ...post
    }
  }
  ${postFragment}
`;

const deletePostMutation = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;

const uri = 'https://api.graph.cool/simple/v1/<project>';

const client = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache()
});

// building a mobx store
const postsStore = new class {
  constructor() {
    extendObservable(this, {
      get allPosts() {
        return graphql({ client, query: allPostsQuery });
      },
      get error() {
        return (this.allPosts.error && this.allPosts.error.message) || null;
      },
      get loading() {
        return this.allPosts.loading;
      },
      get posts() {
        return (this.allPosts.data && this.allPosts.data.allPosts) || [];
      },
      get count() {
        return this.posts.length;
      }
    });
  }

  createPost = title =>
    client
      .mutate({
        mutation: createPostMutation,
        variables: { title },
        refetchQueries: [{ query: allPostsQuery }]
      })
      .catch(error => console.error(error.message));

  updatePost = (id, title) =>
    client
      .mutate({
        mutation: updatePostMutation,
        variables: { id, title },
        refetchQueries: [{ query: allPostsQuery }]
      })
      .catch(error => console.error(error.message));

  deletePost = id =>
    client
      .mutate({
        mutation: deletePostMutation,
        variables: { id },
        refetchQueries: [{ query: allPostsQuery }]
      })
      .catch(error => console.error(error.message));
}();

// our main component
const Example = inject('postsStore')(
  observer(
    class extends Component {
      create = () => this.props.postsStore.createPost('Hello World!');

      update = (id, title) => {
        const newTitle = prompt('Enter title', title);

        if (newTitle && newTitle !== '')
          this.props.postsStore.updatePost(id, newTitle);
      };

      delete = id => this.props.postsStore.deletePost(id);

      render() {
        const { error, loading, count, posts } = this.props.postsStore;

        if (error) return <p>{error}</p>;
        
        if (loading) return <p>Loading ..</p>;
        
        if (count === 0)
          return (
            <div>
              <button onClick={this.create}>Say Hello</button>
              <p>No posts :(</p>
            </div>
          );

        return (
          <div>
            <button onClick={this.create}>Say Hello</button>

            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>Index</th>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Created at</th>
                  <th>Updated at</th>
                  <th>Actions</th>
                </tr>
              </thead>
              
              <tbody>
                {posts.map((post, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{new Date(post.createdAt).toLocaleString()}</td>
                    <td>{new Date(post.updatedAt).toLocaleString()}</td>
                    <td>
                      <button
                        onClick={this.update.bind(this, post.id, post.title)}>
                        Edit
                      </button>{' '}
                      
                      <button onClick={this.delete.bind(this, post.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
  )
);

const ExampleWithState = () => (
  <Provider {...{ postsStore }}>
    <Example />
  </Provider>
);

export default ExampleWithState;
```

### Example with subscriptions

```diff
import React, { Component } from 'react';

// create-react-app example
// yarn add apollo-client-preset graphql graphql-tag mobx mobx-apollo mobx-react
+// yarn add apollo-link apollo-link-ws apollo-utilities subscriptions-transport-ws

import gql from 'graphql-tag';
import graphql from 'mobx-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { extendObservable } from 'mobx';
+import { getMainDefinition } from 'apollo-utilities';
import { inject, observer, Provider } from 'mobx-react';
+import { split } from 'apollo-link';
+import { WebSocketLink } from 'apollo-link-ws';

// schema built with Graphcool
// type Post implements Node {
//   id: ID! @isUnique
//   title: String!
//   createdAt: DateTime!
//   updatedAt: DateTime!
// }

-// fragments, queries and mutations
+// fragments, queries, mutations and subscriptions
const postFragment = gql`
  fragment post on Post {
    id
    title
    createdAt
    updatedAt
  }
`;

const allPostsQuery = gql`
  {
    allPosts {
      ...post
    }
  }
  ${postFragment}
`;

const createPostMutation = gql`
  mutation createPost($title: String!) {
    createPost(title: $title) {
      ...post
    }
  }
  ${postFragment}
`;

const updatePostMutation = gql`
  mutation updatePost($id: ID!, $title: String!) {
    updatePost(id: $id, title: $title) {
      ...post
    }
  }
  ${postFragment}
`;

const deletePostMutation = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;

+const postSubscription = gql`
+  subscription {
+    Post {
+      mutation
+      previousValues {
+        id
+      }
+      node {
+        ...post
+      }
+    }
+  }
+  ${postFragment}
+`;

const uri = 'https://api.graph.cool/simple/v1/<project>';
+const wsUri = 'wss://subscriptions.graph.cool/v1/<project>';

const client = new ApolloClient({
-  link: new HttpLink({ uri }),
+  link: split(
+    ({ query }) => {
+      const { kind, operation } = getMainDefinition(query);
+      return kind === 'OperationDefinition' && operation === 'subscription';
+    },
+    new WebSocketLink({ uri: wsUri, options: { reconnect: true } }),
+    new HttpLink({ uri })
+  ),
  cache: new InMemoryCache()
});

// building a mobx store
const postsStore = new class {
  constructor() {
    extendObservable(this, {
      get allPosts() {
        return graphql({ client, query: allPostsQuery });
      },
      get error() {
        return (this.allPosts.error && this.allPosts.error.message) || null;
      },
      get loading() {
        return this.allPosts.loading;
      },
      get posts() {
        return (this.allPosts.data && this.allPosts.data.allPosts) || [];
      },
      get count() {
        return this.posts.length;
      }
    });

+    this.subscribe('allPosts', 'Post', postSubscription);
  }

+  subscribe = (prop, node, document) =>
+    this[prop].ref.subscribeToMore({
+      document,
+      updateQuery: (current, { subscriptionData }) => {
+        const prev = current[prop];
+        const next = subscriptionData.data[node];
+
+        if (next.mutation === 'CREATED')
+          return { [prop]: prev.concat([next.node]) };
+
+        if (next.mutation === 'UPDATED') {
+          const updated = prev.slice();
+          const index = updated.findIndex(({ id }) => id === next.node.id);
+          updated[index] = next.node;
+          return { [prop]: updated };
+        }
+
+        if (next.mutation === 'DELETED')
+          return {
+            [prop]: prev.filter(({ id }) => id !== next.previousValues.id)
+          };
+
+        return current;
+      }
+    });

  createPost = title =>
    client
      .mutate({
        mutation: createPostMutation,
        variables: { title },
-        refetchQueries: [{ query: allPostsQuery }]
      })
      .catch(error => console.error(error.message));

  updatePost = (id, title) =>
    client
      .mutate({
        mutation: updatePostMutation,
        variables: { id, title },
-        refetchQueries: [{ query: allPostsQuery }]
      })
      .catch(error => console.error(error.message));

  deletePost = id =>
    client
      .mutate({
        mutation: deletePostMutation,
        variables: { id },
-        refetchQueries: [{ query: allPostsQuery }]
      })
      .catch(error => console.error(error.message));
}();

// our main component
const Example = inject('postsStore')(
  observer(
    class extends Component {
      create = () => this.props.postsStore.createPost('Hello World!');

      update = (id, title) => {
        const newTitle = prompt('Enter title', title);

        if (newTitle && newTitle !== '')
          this.props.postsStore.updatePost(id, newTitle);
      };

      delete = id => this.props.postsStore.deletePost(id);

      render() {
        const { error, loading, count, posts } = this.props.postsStore;

        if (error) return <p>{error}</p>;
        
        if (loading) return <p>Loading ..</p>;
        
        if (count === 0)
          return (
            <div>
              <button onClick={this.create}>Say Hello</button>
              <p>No posts :(</p>
            </div>
          );

        return (
          <div>
            <button onClick={this.create}>Say Hello</button>

            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>Index</th>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Created at</th>
                  <th>Updated at</th>
                  <th>Actions</th>
                </tr>
              </thead>
              
              <tbody>
                {posts.map((post, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{new Date(post.createdAt).toLocaleString()}</td>
                    <td>{new Date(post.updatedAt).toLocaleString()}</td>
                    <td>
                      <button
                        onClick={this.update.bind(this, post.id, post.title)}>
                        Edit
                      </button>{' '}
                      
                      <button onClick={this.delete.bind(this, post.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
  )
);

const ExampleWithState = () => (
  <Provider {...{ postsStore }}>
    <Example />
  </Provider>
);

export default ExampleWithState;
```

## Recipes

* [Pagination](https://github.com/sonaye/mobx-apollo/issues/6#issuecomment-328302121).
* [Typescript Definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mobx-apollo),
  details
  [here](https://github.com/sonaye/mobx-apollo/issues/7#issuecomment-347224630).
