'use strict';

const Provider = require('rbac-a').Provider;

class CustomProvider extends Provider {

  /**
  Return all the roles available for the given user. The return value
  must be an object, recursively defining the associated roles for the
  specified user. Return an empty object if user has no roles.

  Ex: {
        "role1": {
          "role1.1": null,
          "role1.2": { ... },
          ...
        },
        "secondary": ...,
        ...
      }

  The method mey return a promise resolving with the
  expected return value.

  @param use {mixed}
  @return {Object<string,number>}
  */
  getRoles(user) {
    return {};   // TODO : implement stub
  }

  /**
  Return all permissions for the specified role. The return value
  must be an array. Return an empty array if role is missing or
  no permission for the specified role.

  Ex: ['permission1', 'permission2', ... ]

  The method mey return a promise resolving with the
  expected return value.

  @param role {mixed}
  @return {Array<string>}
  */
  getPermissions(role) {
    return [];   // TODO : implement stub
  }

  /**
  Return all attributes for the specified role. The return value must
  be an array. Return an empty array if role is missing or if no
  attributes for the specified role.

  Ex: ['attribute1', 'attribute2', ... ]

  The method mey return a promise resolving with the
  expected return value.

  @param role {mixed}
  @return {Array<string>}
  */
  getAttributes(role) {
    return [];   // TODO : implement stub
  }

}
