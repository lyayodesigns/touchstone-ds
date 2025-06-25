import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '7l8oyxeq', // Using the provided project ID directly
    dataset: process.env.SANITY_STUDIO_DATASET || 'production'
  },
  studioHost: process.env.SANITY_STUDIO_HOST || 'touchstone',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
