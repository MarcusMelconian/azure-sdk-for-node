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
 * @summary ExpressRoutePorts Location List Result
 * Response for ListExpressRoutePortsLocations API service call.
 */
class ExpressRoutePortsLocationListResult extends Array {
  /**
   * Create a ExpressRoutePortsLocationListResult.
   * @property {string} [nextLink] The URL to get the next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ExpressRoutePortsLocationListResult
   *
   * @returns {object} metadata of ExpressRoutePortsLocationListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExpressRoutePortsLocationListResult',
      type: {
        name: 'Composite',
        className: 'ExpressRoutePortsLocationListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExpressRoutePortsLocationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ExpressRoutePortsLocation'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExpressRoutePortsLocationListResult;