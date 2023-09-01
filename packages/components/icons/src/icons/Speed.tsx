import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Speed = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Speed"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m13.73,4.5c1.24,0,2.25,1.01,2.25,2.25,0,.96-.6,1.78-1.45,2.1l-1.29,4.65h2.14c.99,0,1.81.77,1.87,1.75v.12s0,.38,0,.38h.28c1.05,0,1.91.78,1.97,1.76v.12s0,1.5,0,1.5c0,.18-.14.34-.32.37h-.07s-14.21,0-14.21,0c-.19,0-.35-.13-.39-.31v-.07s0-1.5,0-1.5c0-1,.82-1.81,1.85-1.87h.12s.28,0,.28,0v-.38c0-.99.77-1.81,1.75-1.87h.12s1.96,0,1.96,0l1.43-5.15s.02-.06.04-.09c-.36-.4-.58-.93-.58-1.5,0-1.24,1.01-2.25,2.25-2.25Zm3.8,12H6.47c-.62,0-1.12.45-1.18,1.02v.1s0,1.12,0,1.12h13.42v-1.12c0-.55-.42-1.01-.97-1.11h-.1s-.11-.02-.11-.02Zm-2.15-2.25h-6.75c-.58,0-1.07.45-1.12,1.02v.11s0,.38,0,.38h9v-.38c0-.55-.39-1-.91-1.1l-.11-.02h-.11Zm-2.69-5.51l-1.32,4.76h1.1l1.25-4.5h-.11c-.33-.02-.64-.11-.91-.26Zm1.04-3.49c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5c.16,0,.31-.02.45-.07.05-.02.11-.06.17-.1.03-.02.06-.03.09-.02.47-.25.78-.75.78-1.32,0-.83-.67-1.5-1.5-1.5Z"/>',
      }}
    />
  )
)

Speed.displayName = 'Speed'

export const tags = ['Speed', '']
