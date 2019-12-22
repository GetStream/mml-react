import React, { useContext } from 'react'
import { MMLContext } from '../'
import ReactMarkdown from 'react-markdown'
import anchorme from 'anchorme'

function truncate(str, length, ending) {
  if (length == null) {
    length = 100
  }
  if (ending == null) {
    ending = '...'
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending
  } else {
    return str
  }
}

export function MD({ text, attributes, ...props }) {
  const allowed = [
    'html',
    'root',
    'text',
    'break',
    'heading',
    'paragraph',
    'emphasis',
    'strong',
    'link',
    'list',
    'listItem',
    'code',
    'inlineCode',
    'blockquote'
  ]

  const urls = anchorme(text, {
    list: true
  })
  for (const urlInfo of urls) {
    const displayLink = truncate(
      urlInfo.encoded.replace(/^(www\.)/, ''),
      20,
      '...'
    )
    const mkdown = `[${displayLink}](${urlInfo.protocol}${urlInfo.encoded})`
    text = text.replace(urlInfo.raw, mkdown)
  }
  let newText = text
  const mentioned_users = []
  // TODO: support user mentions

  if (mentioned_users && mentioned_users.length) {
    for (let i = 0; i < mentioned_users.length; i++) {
      const username = mentioned_users[i].name || mentioned_users[i].id
      const mkdown = `**@${username}**`
      const re = new RegExp(`@${username}`, 'g')
      newText = newText.replace(re, mkdown)
    }
  }

  return (
    <ReactMarkdown
      allowedTypes={allowed}
      source={text}
      linkTarget="_blank"
      plugins={[]}
      escapeHtml={true}
      skipHtml={false}
    />
  )
}
