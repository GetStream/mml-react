import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const USERS = [
  {
    name: 'MrLahey | Service',
    shortName: 'ML',
  },
];

const CONVERSATION = [
  {
    user: 0,
    messages: [
      {
        text: `Hi Ricky. I am Mr. Lahey’s messaging assistant`,
      },
      {
        text: `So, what can I help you with?`,
      },
    ],
  },
];

const CHAT_GUTTER_X = 9;

const Thread = styled.div`
  position: relative;
  padding: 0 ${CHAT_GUTTER_X}px 0 46px;
`;

const Composer = styled.form`
  border-top: 1px solid ${(props) => props.theme.stroke};
`;

const Wrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  font-size: 15px; // $mml-font-size
  padding: 16px 0;
  background: ${(props) => props.theme.appCanvas};

  ${Thread},
  ${Composer} {
    ${(props) =>
      props.interactive
        ? ''
        : `
      pointer-events: none;
      user-select: none;
      opacity: 0.2;
    `}
  }
`;

const Conversation = styled.div``;

const Author = styled.div`
  color: ${(props) => props.theme.textMidEmphasis};
  font-size: 13px;
`;

const Messages = styled.div``;

const Message = styled.div`
  position: relative;
  flex: 1;
  display: block;
  margin: 2px 0;
  padding: 4px 12px;
  border: 1px solid ${(props) => props.theme.strokeLowEmphasis};
  background: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.textHighEmphasis};
`;

const Time = styled.div`
  margin-top: 4px;
  padding-left: 12px;
  font-size: 11px;
  color: ${(props) => props.theme.textMidEmphasis};
`;

const Avatar = styled.div`
  position: absolute;
  bottom: 0;
  left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background: #b2b1b5;
  font-weight: bold;
  font-size: 12px;
  color: white;
`;

const Attachment = styled.div`
  margin-left: auto;
  padding: 16px ${CHAT_GUTTER_X}px 32px;
`;

const ComposerInput = styled.input`
  &.mml-input {
    border: 0;
    font-size: 15px;
    box-sizing: border-box;
    background: transparent;
  }
`;

const ComposerActionbar = styled.div`
  display: flex;
  padding-right: ${CHAT_GUTTER_X}px;
`;

const ComposerBtn = styled.button`
  &.mml-btn {
    width: 32px;
    min-width: 32px;
    height: 32px;
    padding: 0;
    margin-left: 16px;
    border-radius: 100%;
  }

  .material-icons {
    font-size: 18px;
  }
`;

const ComposerSubmit = styled.button`
  &.mml-btn {
    width: auto;
    padding-top: 4px;
    padding-bottom: 4px;
    margin-left: auto;
    border-radius: 16px;
  }
`;

/**
 * Dummy chat component
 *
 * @param {object} props
 * @param {boolean} [props.interactive] When false everything but the Attachment is not clickable and faded out
 */
export const Chat = ({ interactive, children }) => {
  return (
    <Wrapper interactive={interactive}>
      <Conversation>
        {CONVERSATION.map((thread, idx) => {
          const user = USERS[thread.user] || USERS[0];
          return (
            <Thread key={`thread${idx}`} className="mml-container other">
              <Author>{user.name}</Author>
              <Messages className="mml-wrap">
                {thread.messages.map((msg, msgIdx) => (
                  <Message key={`msg${idx}${msgIdx}`}>{msg.text}</Message>
                ))}
              </Messages>
              <Time>{dayjs().format('H:m a')}</Time>
              <Avatar>{user.shortName}</Avatar>
            </Thread>
          );
        })}
        <Attachment className="me">{children}</Attachment>
      </Conversation>
      <Composer>
        <ComposerInput className="mml-input" placeholder="Say something" disabled />
        <ComposerActionbar>
          <ComposerBtn className="mml-btn" disabled>
            <i className="mml-icon material-icons">attach_file</i>
          </ComposerBtn>
          <ComposerBtn className="mml-btn" disabled>
            <i className="mml-icon material-icons">today</i>
          </ComposerBtn>
          <ComposerBtn className="mml-btn" disabled>
            <i className="mml-icon material-icons">place</i>
          </ComposerBtn>
          <ComposerSubmit className="mml-btn" disabled type="submit">
            Send
          </ComposerSubmit>
        </ComposerActionbar>
      </Composer>
    </Wrapper>
  );
};
