#!/usr/bin/env node

const flaggedRespawn = require('flagged-respawn');

// get a list of all possible v8 flags for the running version of node
const v8flags = require('v8flags').fetch();

flaggedRespawn(v8flags, process.argv, function (ready, child) {
  if (ready) {
    console.log('Running!');
    // your cli code here
  } else {
    console.log('Special flags found, respawning.');
  }
  if (process.pid !== child.pid) {
    console.log('Respawned to PID:', child.pid);
  }
});

