import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const NeutralOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="NeutralOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m15.05,10.85c.74,0,1.35-.6,1.35-1.35s-.6-1.35-1.35-1.35-1.35.6-1.35,1.35.6,1.35,1.35,1.35Zm1.8,3.61H7.15c-.55,0-1,.45-1,1s.45,1,1,1h9.69c.55,0,1-.45,1-1s-.45-1-1-1h0Z"/><path fill-rule="evenodd" d="m12,2C6.47,2,2,6.47,2,12s4.47,10,10,10,10-4.48,10-10S17.52,2,12,2Zm0,18c-4.42,0-8-3.58-8-8S7.58,4,12,4s8,3.58,8,8-3.58,8-8,8Z"/><path fill-rule="evenodd" d="m8.95,10.85c.74,0,1.35-.6,1.35-1.35s-.6-1.35-1.35-1.35-1.35.6-1.35,1.35.6,1.35,1.35,1.35Z"/>',
      }}
    />
  )
)

NeutralOutline.displayName = 'NeutralOutline'

export const tags = ['NeutralOutline', '']
