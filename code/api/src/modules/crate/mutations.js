// Part of schema that modifies Crate data
// CRUD functionality without 'read'?

// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import CrateType from './types'
import { create, remove, update } from './resolvers'

// Defined mutations: create, update, destroy
// Crate create
export const crateCreate = {
  type: CrateType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: create
}

// Crate update
export const crateUpdate = {
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: update
}

// Crate remove
export const crateRemove = {
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
