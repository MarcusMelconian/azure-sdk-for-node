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

const models = require('./index');

/**
 * Schema of the Data property of an EventGridEvent for a
 * Microsoft.ContainerRegistry.ChartDeleted event.
 *
 * @extends models['ContainerRegistryArtifactEventData']
 */
class ContainerRegistryChartDeletedEventData extends models['ContainerRegistryArtifactEventData'] {
  /**
   * Create a ContainerRegistryChartDeletedEventData.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContainerRegistryChartDeletedEventData
   *
   * @returns {object} metadata of ContainerRegistryChartDeletedEventData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContainerRegistryChartDeletedEventData',
      type: {
        name: 'Composite',
        className: 'ContainerRegistryChartDeletedEventData',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: false,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          action: {
            required: false,
            serializedName: 'action',
            type: {
              name: 'String'
            }
          },
          target: {
            required: false,
            serializedName: 'target',
            type: {
              name: 'Composite',
              className: 'ContainerRegistryArtifactEventTarget'
            }
          }
        }
      }
    };
  }
}

module.exports = ContainerRegistryChartDeletedEventData;