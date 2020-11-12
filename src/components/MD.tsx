import React, { FC, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';

import * as linkify from 'linkifyjs';

export const truncate = (input: string, length: number, end = '...') => {
  if (input.length > length) return `${input.substring(0, length - end.length)}${end}`;
  return input;
};

const matchMarkdownLinks = (message: string) => {
  const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm;
  const matches = message.match(regexMdLinks);
  const singleMatch = /\[([^\[]+)\]\((.*)\)/;

  const links = matches
    ? matches.map((match) => {
        const i = singleMatch.exec(match);
        return i && i[2];
      })
    : [];
  return links;
};

// TODO: update to v5 and remove
const MDLinkRender: FC<{ href: string; children: ReactNode }> = (props) => {
  // if (!props.href || !props.href.startsWith('http')) return props.children;
  return (
    <a href={props.href} target="_blank" rel="nofollow noreferrer noopener">
      {props.children}
    </a>
  );
};

const allowedMarkups: ReactMarkdown.NodeType[] = [
  'html',
  'root',
  'text',
  'break',
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

export type MDProps = {
  /** The markdown text */
  text: string;
};

/**
 * MD renders a given text as markdown
 */
export const MD: FC<MDProps> = ({ text }) => {
  if (!text) return null;

  let newText = text;
  let markdownLinks = matchMarkdownLinks(newText);
  // extract all valid links/emails within text and replace it with proper markup
  linkify.find(newText).forEach(({ type, href, value }) => {
    // check if message is already  markdown
    const noParsingNeeded = markdownLinks && markdownLinks.filter((text) => text?.indexOf(href) !== -1);
    if (noParsingNeeded.length > 0) return;

    const displayLink = type === 'email' ? value : truncate(value.replace(/(http(s?):\/\/)?(www\.)?/, ''), 20);
    newText = newText.replace(value, `[${displayLink}](${encodeURI(href)})`);
  });

  return (
    <div className="mml-md">
      <ReactMarkdown
        allowedTypes={allowedMarkups}
        renderers={{ link: MDLinkRender }}
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
};
