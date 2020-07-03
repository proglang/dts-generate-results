const Asana = require('asana');
const util = require('util');

// Using a PAT for basic authentication. This is reasonable to get
// started with, but Oauth is more secure and provides more features.

var client = Asana.Client.create().useAccessToken(process.env.ASANA_PAT);

client.users.me()
  .then(user => {
    const userId = user.id;
    // The user's "default" workspace is the first one in the list, though
    // any user can have multiple workspaces so you can't always assume this
    // is the one you want to work with.
    const workspaceId = user.workspaces[0].id;
    return client.tasks.findAll({
      assignee: userId,
      workspace: workspaceId,
      completed_since: 'now',
      opt_fields: 'id,name,assignee_status,completed'
    });
  })
  .then(response => {
    // There may be more pages of data, we could stream or return a promise
    // to request those here - for now, let's just return the first page
    // of items.
    return response.data;
  })
  .filter(task => {
    return task.assignee_status === 'today' ||
      task.assignee_status === 'new';
  })
  .then(list => {
    console.log(util.inspect(list, {
      colors: true,
      depth: null
    }));
  })
  .catch(e => {
    console.log(e);
  });
