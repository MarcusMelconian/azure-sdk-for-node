/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Specifies an OAuth 2.0 permission scope or an app role that an application
 * requires. The resourceAccess property of the RequiredResourceAccess type is
 * a collection of ResourceAccess.
 *
 */
class ResourceAccess {
  /**
   * Create a ResourceAccess.
   * @member {string} id The unique identifier for one of the OAuth2Permission
   * or AppRole instances that the resource application exposes.
   * @member {string} [type] Specifies whether the id property references an
   * OAuth2Permission or an AppRole. Possible values are "scope" or "role".
   */
  constructor() {
  }

  /**
   * Defines the metadata of ResourceAccess
   *
   * @returns {object} metadata of ResourceAccess
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceAccess',
      type: {
        name: 'Composite',
        className: 'ResourceAccess',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ResourceAccess;