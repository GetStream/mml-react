/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { useConfig } from 'docz';
import { LiveProvider, LiveError, LivePreview, LiveEditor } from 'react-live';
import { Resizable } from 're-resizable';
import copy from 'copy-text-to-clipboard';

import { Wrapper } from 'gatsby-theme-docz/src/components/Playground/Wrapper';
import { usePrismTheme } from 'gatsby-theme-docz/src/utils/theme';
import * as styles from 'gatsby-theme-docz/src/components/Playground/styles';
import * as Icons from 'gatsby-theme-docz/src/components/Icons';

import { MML } from '../../../../../src/mml';
import { Chat } from './Chat';

const getResizableProps = (width, setWidth) => ({
  minWidth: 260,
  maxWidth: '100%',
  size: {
    width: width,
    height: 'auto',
  },
  style: {
    margin: 0,
    marginRight: 'auto',
  },
  enable: {
    top: false,
    right: true,
    bottom: false,
    left: false,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false,
  },
  onResizeStop: (e, direction, ref) => {
    setWidth(ref.style.width);
  },
});

const transformCode = (code) => {
  if (code.startsWith('()') || code.startsWith('class')) return code;

  // when not using <MML> wrapper in the playground ensure we have the same HTML
  // structure as MML container, this happens in examples of Utility coomponents
  if (!code.startsWith('<MML')) {
    return `<React.Fragment><div className="mml-container"><form className="mml-wrap">${code}</form></div></React.Fragment>`;
  }
  return `<React.Fragment>${code}</React.Fragment>`;
};

const transformMmlCode = (code) => {
  return '<React.Fragment><MML source={`' + code + '`} /></React.Fragment>';
};

export const Playground = ({ code, scope, language, useScoping = false, ...props }) => {
  const {
    themeConfig: { showPlaygroundEditor, showLiveError, showLivePreview },
  } = useConfig();
  let codeTransformer = transformCode;

  // always add MML component in scope so we do not need to import it everytime
  // in the mdx example files
  scope.MML = MML;

  // support the playground to just contain a plain mml string
  if (code.trim().startsWith('<mml')) {
    language = 'xml';
    codeTransformer = transformMmlCode;
  }

  // Makes sure scope is only given on mount to avoid infinite re-render on hot reloads
  const [scopeOnMount] = useState(scope);
  const theme = usePrismTheme();
  const [showingCode, setShowingCode] = useState(showPlaygroundEditor);
  const [width, setWidth] = useState('100%');
  const resizableProps = getResizableProps(width, setWidth);

  const copyCode = () => copy(code);
  const toggleCode = () => setShowingCode((s) => !s);

  return (
    <Resizable {...resizableProps} data-testid="playground">
      <LiveProvider code={code} scope={scopeOnMount} transformCode={codeTransformer} language={language} theme={theme}>
        <div sx={styles.previewWrapper}>
          <Wrapper
            style={{ background: '#CED4DE' }}
            content="preview"
            useScoping={useScoping}
            showingCode={showingCode}
          >
            {showLivePreview && (
              <Chat interactive={false}>
                <LivePreview data-testid="live-preview" />
              </Chat>
            )}
          </Wrapper>
          <div sx={styles.buttons}>
            <button sx={styles.button} onClick={copyCode}>
              <Icons.Clipboard size={12} />
            </button>
            <button sx={styles.button} onClick={toggleCode}>
              <Icons.Code size={12} />
            </button>
          </div>
        </div>
        {showingCode && (
          <Wrapper content="editor" useScoping={useScoping} showingCode={showingCode}>
            <div sx={styles.editor(theme)}>
              <LiveEditor data-testid="live-editor" />
            </div>
          </Wrapper>
        )}
        {showLiveError && <LiveError sx={styles.error} data-testid="live-error" />}
      </LiveProvider>
    </Resizable>
  );
};
