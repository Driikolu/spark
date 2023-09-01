import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Sector = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Sector"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m11.79,12.79c.11,0,.21.04.28.11l5.31,5.1c.09.08.13.19.12.31,0,.12-.05.23-.15.3-1.5,1.23-3.39,1.9-5.33,1.9-4.21-.02-7.77-3.09-8.42-7.25-.02-.12.02-.24.1-.32.08-.09.19-.15.31-.14h7.78Zm-.16.81h-7.13c.78,3.54,3.91,6.08,7.54,6.1,1.6,0,3.16-.5,4.46-1.43l-4.86-4.68Zm.95-10.06c3.2.22,6.01,2.22,7.26,5.18,1.25,2.96.72,6.36-1.36,8.81-.07.08-.17.13-.28.14h0c-.1,0-.2-.03-.27-.1l-5.64-5.11c-.08-.08-.13-.19-.13-.3V3.93c0-.11.05-.21.13-.29.08-.08.19-.12.3-.1Zm.38.8v7.65l5.19,4.69c1.69-2.19,2.08-5.13,1-7.68-1.07-2.55-3.44-4.33-6.19-4.66Zm-1.35-.72c.08.08.13.19.13.3v8.08c0,.22-.18.4-.4.4H3.9c-.22,0-.4-.18-.4-.4.02-4.41,3.4-8.08,7.8-8.48.11-.01.22.03.31.1Zm-.68.72c-3.64.54-6.41,3.57-6.61,7.25h6.61v-7.25Z"/>',
      }}
    />
  )
)

Sector.displayName = 'Sector'

export const tags = ['Sector', '']
