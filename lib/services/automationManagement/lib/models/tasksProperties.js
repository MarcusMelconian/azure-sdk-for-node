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
 * Task properties of the software update configuration.
 *
 */
class TasksProperties {
  /**
   * Create a TasksProperties.
   * @member {object} [preTask] Pre task object.
   * @member {object} [preTask.parameters] Gets or sets the parameters of the
   * task.
   * @member {string} [preTask.source] Gets or sets the name of the runbook.
   * @member {object} [postTask] Post task object.
   * @member {object} [postTask.parameters] Gets or sets the parameters of the
   * task.
   * @member {string} [postTask.source] Gets or sets the name of the runbook.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TasksProperties
   *
   * @returns {object} metadata of TasksProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'tasksProperties',
      type: {
        name: 'Composite',
        className: 'TasksProperties',
        modelProperties: {
          preTask: {
            required: false,
            serializedName: 'preTask',
            type: {
              name: 'Composite',
              className: 'TaskProperties'
            }
          },
          postTask: {
            required: false,
            serializedName: 'postTask',
            type: {
              name: 'Composite',
              className: 'TaskProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = TasksProperties;