import {
  MessageSimple,
  MessageTeam,
  MessageCommerce,
  MessageLivestream
} from 'stream-chat-react'
const StreamChat = require('stream-chat').StreamChat

export const client = new StreamChat('qk4nn7rpcn75')

client.setUser(
  {
    id: 'John'
  },
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiSm9obiIsImlhdCI6MTU0ODI5ODUxN30.hyonbQnOLuFsr15mdmc_JF4sBOm2SURK4eBvTOx3ZIg'
)

export const channel = client.channel('team', 'docs', {
  image:
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg',
  name: 'Talk about the documentation'
})

export const channelContext = {
  client,
  channel,
  updateMessage: () => {},
  removeMessage: () => {},
  sendMessage: () => {},
  retrySendMessage: () => {},
  resetNotification: () => {},
  loadMore: () => {},
  openThread: () => {},
  closeThread: () => {},
  loadMoreThread: () => {},
  onMentionsClick: () => {},
  onMentionsHover: () => {}
}

const filters = { type: 'team', example: 1 }
const sort = { last_message_at: -1 }

export const channels = client.queryChannels(filters, sort, {
  subscribe: true
})

export const message = {
  attachments: [],
  command: '',
  created_at: new Date('2019-01-25T21:26:06.346Z'),
  own_reactions: [
    {
      created_at: '2019-01-25T16:24:00.173967Z',
      id: 142,
      message_id: 'd46540e6-fb54-42bf-9de1-654c866cf587',
      type: 'love',
      user: {
        created_at: '2019-01-22T16:35:18.417456Z',
        id: 'thierry',
        last_active: '2019-01-25T09:23:47.108127-07:00',
        online: true,
        role: 'user',
        updated_at: '2019-01-25T16:23:47.052538Z'
      }
    },
    {
      created_at: '2019-01-25T16:23:58.939438Z',
      id: 141,
      message_id: 'd46540e6-fb54-42bf-9de1-654c866cf587',
      type: 'like',
      user: {
        created_at: '2019-01-22T16:35:18.417456Z',
        id: 'thierry',
        last_active: '2019-01-25T09:23:47.108127-07:00',
        online: true,
        role: 'user',
        updated_at: '2019-01-25T16:23:47.052538Z'
      }
    }
  ],
  reaction_counts: {
    like: 1,
    love: 1
  },
  reactions: [
    {
      created_at: '2019-01-25T16:24:00.173967Z',
      id: 142,
      message_id: 'd46540e6-fb54-42bf-9de1-654c866cf587',
      type: 'love',
      user: {
        created_at: '2019-01-22T16:35:18.417456Z',
        id: 'thierry',
        last_active: '2019-01-25T09:23:47.108127-07:00',
        online: true,
        role: 'user',
        updated_at: '2019-01-25T16:23:47.052538Z'
      }
    },
    {
      created_at: '2019-01-25T16:23:58.939438Z',
      id: 141,
      message_id: 'd46540e6-fb54-42bf-9de1-654c866cf587',
      type: 'like',
      user: {
        created_at: '2019-01-22T16:35:18.417456Z',
        id: 'thierry',
        last_active: '2019-01-25T09:23:47.108127-07:00',
        online: true,
        role: 'user',
        updated_at: '2019-01-25T16:23:47.052538Z'
      }
    }
  ],
  reply_count: 0,
  text: 'This message uses MML',
  id: 'thierry-e298f569-8745-407f-a02b-f75c0206612f',
  type: 'regular',
  updated_at: '2019-01-25T16:24:00.181Z',
  user: {
    created_at: '2019-01-22T16:35:18.417456Z',
    id: 'thierry',
    last_active: '2019-01-25T09:23:47.108127-07:00',
    online: true,
    role: 'user',
    updated_at: '2019-01-25T16:23:47.052538Z'
  },
  status: 'received'
}

export const thread = {
  attachments: [
    {
      image_url:
        'https://images.unsplash.com/photo-1548345233-4557b8809829?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
      og_scrape_url: 'https://unsplash.com/photos/f3hDGOHptrM',
      text: 'Download this photo by Sandra Seitamaa (@seitamaaphotography)',
      thumb_url:
        'https://images.unsplash.com/photo-1548345233-4557b8809829?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
      title:
        'Plant, tree, nature and river HD photo by Sandra Seitamaa (@seitamaaphotography) on Unsplash',
      title_link: 'https://unsplash.com/photos/f3hDGOHptrM',
      type: 'image'
    }
  ],
  command: '',
  created_at: '2019-01-25T21:25:45.306Z',
  html:
    '<p>this place looks amazing: <a href="https://unsplash.com/photos/f3hDGOHptrM" rel="nofollow">https://unsplash.com/photos/f3hDGOHptrM</a></p>\n',
  own_reactions: [],
  reaction_counts: null,
  reactions: [],
  reply_count: 2,
  text: 'this place looks amazing: https://unsplash.com/photos/f3hDGOHptrM',
  id: 'thierry-ec4eac2b-1278-4f49-8b20-2ebcd76dace5',
  type: 'regular',
  updated_at: '2019-01-25T21:25:45.306Z',
  user: {
    created_at: '2019-01-22T16:35:18.417456Z',
    id: 'thierry',
    online: true,
    role: 'user',
    updated_at: '2019-01-25T21:27:39.606466Z'
  },
  __html:
    '<p>this place looks amazing: <a href="https://unsplash.com/photos/f3hDGOHptrM" rel="nofollow">https://unsplash.com/photos/f3hDGOHptrM</a></p>\n',
  status: 'received'
}

export const threadMessages = [
  {
    attachments: [],
    command: '',
    created_at: new Date('2019-01-25T21:26:06.346Z'),
    html: '<p>whow, where is that?</p>\n',
    own_reactions: [],
    parent_id: '6312fb0b-0c94-4107-a036-376ac5ab650b',
    reaction_counts: null,
    reactions: [],
    reply_count: 0,
    text: 'whow, where is that?',
    id: 'thierry-97a02ade-3a38-4400-9377-001c10fc2663',
    type: 'reply',
    updated_at: '2019-01-25T21:26:06.346Z',
    user: {
      created_at: '2019-01-22T16:35:18.417456Z',
      id: 'thierry',
      invisible: false,
      last_active: '0001-01-01T00:00:00Z',
      mutes: [],
      online: false,
      role: 'user',
      updated_at: '2019-01-25T21:27:39.606466Z'
    },
    __html: '<p>whow, where is that?</p>\n',
    status: 'received'
  },
  {
    attachments: [],
    command: '',
    created_at: new Date('2018-01-25T21:26:11.863Z'),
    html: '<p>it’s soo green, amazing</p>\n',
    own_reactions: [],
    parent_id: '6312fb0b-0c94-4107-a036-376ac5ab650b',
    reaction_counts: null,
    reactions: [],
    reply_count: 0,
    text: "it's soo green, amazing",
    id: 'thierry-264fdc4d-03c5-4f93-b97c-cfe5612968aa',
    type: 'reply',
    updated_at: '2019-01-25T21:26:11.863Z',
    user: {
      created_at: '2019-01-22T16:35:18.417456Z',
      id: 'john',
      invisible: false,
      last_active: '0001-01-01T00:00:00Z',
      mutes: [],
      online: false,
      role: 'user',
      updated_at: '2019-01-25T21:27:39.606466Z'
    },
    __html: '<p>it’s soo green, amazing</p>\n',
    status: 'received'
  }
]

export const messages = [
  {
    attachments: [],
    command: '',
    created_at: new Date('2019-01-25T21:26:06.346Z'),
    html: '<p>whow, where is that?</p>\n',
    own_reactions: [],
    parent_id: '6312fb0b-0c94-4107-a036-376ac5ab650b',
    reaction_counts: null,
    reactions: [],
    reply_count: 0,
    text: 'whow, where is that?',
    id: 'thierry-97a02ade-3a38-4400-9377-001c10fc2663',
    type: 'reply',
    updated_at: '2019-01-25T21:26:06.346Z',
    user: {
      created_at: '2019-01-22T16:35:18.417456Z',
      id: 'thierry',
      invisible: false,
      last_active: '0001-01-01T00:00:00Z',
      mutes: [],
      online: false,
      role: 'user',
      updated_at: '2019-01-25T21:27:39.606466Z'
    },
    __html: '<p>whow, where is that?</p>\n',
    status: 'received'
  },
  {
    attachments: [],
    command: '',
    created_at: new Date('2019-01-25T21:26:11.863Z'),
    html: '<p>it’s soo green, amazing</p>\n',
    own_reactions: [],
    parent_id: '6312fb0b-0c94-4107-a036-376ac5ab650b',
    reaction_counts: null,
    reactions: [],
    reply_count: 0,
    text: "it's soo green, amazing",
    id: 'thierry-264fdc4d-03c5-4f93-b97c-cfe5612968aa',
    type: 'reply',
    updated_at: '2019-01-25T21:26:11.863Z',
    user: {
      created_at: '2019-01-22T16:35:18.417456Z',
      id: 'thierry',
      invisible: false,
      last_active: '0001-01-01T00:00:00Z',
      mutes: [],
      online: false,
      role: 'user',
      updated_at: '2019-01-25T21:27:39.606466Z'
    },
    __html: '<p>it’s soo green, amazing</p>\n',
    status: 'received'
  }
]

export const users = [
  {
    created_at: '2019-01-28T16:03:25.619982Z',
    id: 'thierry',
    last_active: '2019-01-28T15:07:32.314676-07:00',
    online: true,
    role: 'user',
    updated_at: '2019-01-28T22:07:32.297119Z'
  }
]

export const MessageMock = {
  handleFlag: console.log,
  handleMute: console.log,
  handleEdit: console.log,
  handleDelete: console.log,
  canDeleteMessage: () => true,
  canEditMessage: () => true,
  getMessageActions: () => []
}

export const THEMES = [
  { name: 'no style', value: '', Msg: MessageSimple },
  { name: 'messaging light', value: 'messaging light', Msg: MessageSimple },
  { name: 'messaging dark', value: 'messaging dark', Msg: MessageSimple },
  { name: 'team light', value: 'team light', Msg: MessageTeam },
  { name: 'team dark', value: 'team dark', Msg: MessageTeam },
  { name: 'commerce light', value: 'commerce light', Msg: MessageCommerce },
  { name: 'commerce dark', value: 'commerce dark', Msg: MessageCommerce },
  {
    name: 'livestream light',
    value: 'livestream light',
    Msg: MessageLivestream
  },
  { name: 'livestream dark', value: 'livestream dark', Msg: MessageLivestream }
]

export const THEMES_MAP = THEMES.reduce(function(map, current, i) {
  map[current.value] = current
  return map
}, {})
