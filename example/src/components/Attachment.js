import React from 'react'
import { MML } from '../../..'

export const isMMLAttachment = a => {
  return a.type === 'mml'
}

export const renderMML = props => {
  const { actionHandler, attachment } = props
  if (!attachment.mml) return null
  return (
    <div className="str-chat__attachment-mml " key={`key-mml-${attachment.id}`}>
      <MML source={attachment.mml} onSubmit={actionHandler} />
    </div>
  )
}

const Attachment = ({ attachments, ...props }) => {
  return (
    <>
      {attachments.map(attachment => {
        if (attachment.type === 'mml')
          return renderMML({ ...props, attachment })

        return null
      })}
    </>
  )
}

export default Attachment
