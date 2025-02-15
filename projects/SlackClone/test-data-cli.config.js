// DO NOT MODIFY THIS FILE DIRECTLY, SINCE IT DOES NOT GET USED.
// MAKE A COPY OF IT WITH NAME - dev.config.js, which will get used by default
module.exports = {
  apiKey: 'tqdpjrr7us6k',
  secret: '3tmg3r4gd49jbhpk87vssv7xbbnt89nnwr8qmf2v3byvqfd9xetzffnqxcpbamgm',
  // baseUrl: 'https://chat-us-east-staging.stream-io-api.com',

  channelType: 'messaging',

  /**
   * This user will be used to create/update stuff using server-side token.
   */
  serverSideUser: 'vishal',

  // ============================================================
  //
  //  CONFIG USED FOR `create-channels`  command
  //
  // ============================================================

  /**
   * This is the prefix that will be added to channel ids.
   * As long as you don't change this value, new channels won't be created on subsequent runs
   * of `create-channels` script - only the messages will be added to existing channels.
   */
  channelIdPrefix: 'sample-app',

  /**
   * Custom field for channels
   *
   * Custom properties to be added to channels. They will be updated in channel only on first run.
   */
  customProperties: {
    // you can add as many properties as you want
  },

  /**
   * Group channels will be created with these users (id) as members. Channel members won't be changed
   * on subsequent running of command `create-channels`
   *
   * Also following users will be used to send messages on channel.
   *
   * If the users don't exist, then set `createUsers` as true, so that the script will create/generate these
   * users first, before proceeding to channel creation.
   *
   * I would recommend using readable user-ids.
   * Could be either object or string
   */
  appUsers: [
    {
      id: 'vishal',
      name: 'Vishal Narkhede',
      image: 'https://ca.slack-edge.com/T02RM6X6B-UHGDQJ8A0-dae0b1606590-512',
    },
    {
      id: 'vir',
      name: 'Vir Desai',
      image: 'https://ca.slack-edge.com/T02RM6X6B-UMQHWU3PE-9b79299e7415-512',
    },
    {
      id: 'tommaso',
      name: 'Tommaso Barbugli',
      image: 'https://ca.slack-edge.com/T02RM6X6B-U02U7SJP4-0f65a5997877-512',
    },
    {
      id: 'neil',
      name: 'Neil',
      image: 'https://ca.slack-edge.com/T02RM6X6B-U01173D1D5J-0dead6eea6ea-512',
    },
    {
      id: 'nick',
      name: 'Nick Parson',
      image: 'https://ca.slack-edge.com/T02RM6X6B-U10BF2R9R-2e7377522518-512',
    },
    {
      id: 'thierry',
      name: 'Thierry Schellenbach',
      image: 'https://ca.slack-edge.com/T02RM6X6B-U02RM6X6D-g28a1278a98e-512',
    },
    {
      id: 'ben',
      name: 'Ben Golden',
      image: 'https://ca.slack-edge.com/T02RM6X6B-U01AXAF23MG-f57403a3cb0d-512',
    },
  ],

  /**
   * If true, users will be first created (if they don't exist in app).
   * Name will be same as userID, with first letter capitalized
   * Some random user avatar will be added for user.
   */
  createUsers: true,

  /** Total number of group channels to create */
  numberOfGroupChannel: 20,
  /** If true, script will also create one-to-one conversation between all users. */
  createOneToOneConversations: true,
  /**
   * Channel names will be some random combination of adjective and verb.
   * but if you want to have your own channel names then specify then here.
   * If `numberOfGroupChannel` is greater than length of `channelNames`, then for remainder of channels, name will
   * be auto generated.
   */
  channelNames: [
    /** stream_chat, amsterdam_office */
  ],

  numberOfMessagesPerChannel: 300,

  // ============================================================
  //
  //  CONFIG USED FOR `create-channels` and `add-messages` command
  //
  // ============================================================

  // So number of attachments will vary between 1 and MAX_NUMBER_OF_ATTACHMENTS_PER_MESSAGE
  maxNumberOfAttachmentsPerMessage: 6,
  // Frequency x => 1 in every x number of messages will contain the given entity.
  attachmentFrequency: 10,
  urlFrequency: 7,
  reactionFrequency: 4,
  threadReplyFrequency: 9,

  /** Truncates the channel, if it already exists, before adding messages. */
  truncateBeforeAddingNewMessages: true,

  // ALlowed reactions
  reactions: ['like', 'love', 'haha', 'wow', 'sad'],
  // Messages will contain following urls once in a while - as per configured `urlFrequency`
  urls: [
    'https://www.youtube.com/watch?v=ceGLEhahLKQ',
    'https://reactnative.dev/',
    'https://shorturl.at/hmyKM',
    'https://www.youtube.com/watch?v=3oGLuM_--Uo&t=13s',
    'https://shorturl.at/mBUY7',
    'https://github.com/GetStream/slack-clone-react-native/',
    'https://www.youtube.com/watch?v=tQ7T530Q7aU',
  ],

  // Don't change this. We do have support to add messages in various languages,
  // but it needs to be tested after latest changes.
  language: 'en',
};