import React from 'react'
import ReactMarkdown from 'react-markdown'
import anchorme from 'anchorme'
import PropTypes from 'prop-types'

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

/**
 * MD renders a given text as markdown
 */
export function MD({ text, ...props }) {
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
  const mentionedUsers = []
  if (mentionedUsers && mentionedUsers.length) {
    for (let i = 0; i < mentionedUsers.length; i++) {
      const username = mentionedUsers[i].name || mentionedUsers[i].id
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

MD.propTypes = {
  /** The markdown text */
  text: PropTypes.string.isRequired
}
