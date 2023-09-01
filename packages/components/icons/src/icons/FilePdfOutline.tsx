import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FilePdfOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="FilePdfOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m21.9,8.7L13.6.4c-.2-.3-.5-.4-.8-.4H4.5c-.7,0-1.5.3-2,.8-.5.6-.8,1.3-.8,2v18.3c0,.7.3,1.5.8,2,.5.6,1.3.9,2,.9h15c.7,0,1.5-.3,2-.8s.8-1.3.8-2v-11.7c0-.3-.1-.6-.4-.8Zm-1.9,12.5c0,.1,0,.3-.1.4-.1.1-.2.1-.3.1H4.6c-.1,0-.3,0-.3-.1-.2-.2-.3-.3-.3-.4V2.8c0-.1,0-.3.1-.4.1-.1.2-.1.3-.1h7.8l7.8,7.7v11.2Z"/><path d="m12.3,7.3c-.2-.3-.5-.5-1-.5-.4,0-.8.3-1,.5-.2.3-.3.6-.3,1,0,.8.3,1.7.7,2.6-.4,1.1-.8,2.2-1.3,3.2-.7.3-1.3.6-1.8.9-.3.2-.5.4-.7.6-.2.2-.4.5-.4.8,0,.7.6,1.2,1.2,1.2.7,0,1.1-.4,1.5-.9.4-.4.7-1,1.1-1.7.9-.4,2-.7,3-.9.7.5,1.4.9,2.2.9.4,0,.8-.1,1.2-.3.3-.2.7-.5.7-1s-.4-.8-.7-1-.7-.3-1.2-.3-1.2.1-1.9.3c-.6-.6-1.1-1.3-1.5-2,.3-.9.5-1.8.5-2.5,0-.3-.1-.6-.3-.9Zm-4.5,9.1c.1-.1.2-.2.3-.3-.1.1-.3.2-.3.3Zm7.7-2.7h.2c0,.1-.1.1-.2,0-.1.1-.1,0-.2,0,.1.1.2,0,.2,0Zm-3.2-.6c-.4.1-.8.2-1.3.4.2-.4.4-.9.5-1.3.3.4.6.6.8.9Z"/>',
      }}
    />
  )
)

FilePdfOutline.displayName = 'FilePdfOutline'

export const tags = ['FilePdfOutline', '']
