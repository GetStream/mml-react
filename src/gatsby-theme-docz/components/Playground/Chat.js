import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';

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

const Wrapper = styled.div`
  width: 320px;
  // height: 515px;
  margin: 0 auto;
  font-size: 15px; // $mml-font-size
  padding: 16px 0;
  background: ${(props) => props.theme.appCanvas};
`;

const Conversation = styled.div``;

const Thread = styled.div`
  position: relative;
  padding-left: 46px;
`;

const Author = styled.div`
  color: ${(props) => props.theme.textMidEmphasis};
  font-size: 13px;
`;

const Messages = styled.div``;

const Message = styled.div``;

const Time = styled.div`
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
  padding: 16px 9px 32px;
`;

const Composer = styled.form`
  border-top: 1px solid ${(props) => props.theme.stroke};
`;

const ComposerInput = styled.input`
  &.mml-input {
    border: 0;
    font-size: 15px;
  }
`;

const ComposerActionbar = styled.div`
  display: flex;
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

export const Chat = ({ children }) => {
  return (
    <Wrapper>
      <Conversation>
        {CONVERSATION.map((thread, idx) => {
          const user = USERS[thread.user] || USERS[0];
          return (
            <Thread key={`thread${idx}`}>
              <Author>{user.name}</Author>
              <Messages>
                {thread.messages.map((msg, msgIdx) => (
                  <Message key={`msg${idx}${msgIdx}`} className="mml-text">
                    {msg.text}
                  </Message>
                ))}
                <Time>{format(new Date(), 'h:m a')}</Time>
              </Messages>
              <Avatar>{user.shortName}</Avatar>
            </Thread>
          );
        })}
        <Attachment>{children}</Attachment>
      </Conversation>
      <Composer>
        <ComposerInput className="mml-input" placeholder="Say something" />
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
