import React from 'react';
import ReactMarkdown from 'react-markdown';

import * as linkify from 'linkifyjs';
import PropTypes from 'prop-types';

const truncate = (input, length, end = '...') => {
  if (input.length > length) {
    return `${input.substring(0, length - end.length)}${end}`;
  }
  return input;
};

const allowedMarkups = [
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
  'blockquote',
];

const matchMarkdownLinks = (message) => {
  const regexMdLinks = /\[([^[]+)\](\(.*\))/gm;
  const matches = message.match(regexMdLinks);
  const singleMatch = /\[([^[]+)\]\((.*)\)/;

  const links = matches
    ? matches.map((match) => {
        const i = singleMatch.exec(match);
        return i && i[2];
      })
    : [];
  return links;
};

/**
 * MD renders a given text as markdown
 */
export function MD({ text, ...props }) {
  if (!text) return null;

  let newText = text;
  const markdownLinks = matchMarkdownLinks(newText);
  // extract all valid links/emails within text and replace it with proper markup
  linkify.find(newText).forEach(({ type, href, value }) => {
    // check if message is already  markdown
    const noParsingNeeded = markdownLinks && markdownLinks.filter((text) => text && text.indexOf(href) !== -1);
    if (noParsingNeeded.length > 0) return;

    const displayLink = type === 'email' ? value : truncate(value.replace(/(http(s?):\/\/)?(www\.)?/, ''), 20);
    newText = newText.replace(value, `[${displayLink}](${encodeURI(href)})`);
  });

  return (
    <div className="mml-md">
      <ReactMarkdown
        allowedTypes={allowedMarkups}
        source={newText}
        linkTarget="_blank"
        plugins={[]}
        escapeHtml={true}
        skipHtml={false}
        unwrapDisallowed={true}
        transformLinkUri={(uri) => (uri.startsWith('app://') ? uri : ReactMarkdown.uriTransformer(uri))}
      />
    </div>
  );
}

MD.propTypes = {
  /** The markdown text */
  text: PropTypes.string.isRequired,
};
