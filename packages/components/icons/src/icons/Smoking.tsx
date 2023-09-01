import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Smoking = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Smoking"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m19.13,10.95l.04.08.28.73c.15.4-.02.83-.39,1.02l-.08.04-12.09,4.63c-.39.15-.83-.02-1.01-.39l-.04-.08-.28-.73c-.15-.4.02-.83.39-1.02l.08-.04,12.09-4.63c.39-.15.83.02,1.01.39Zm-12.48,4.86l-.35.14h0s0,.02,0,.02l.28.73h0s.01.01.01.01l.35-.14-.29-.76Zm8.01-3.06l-7.26,2.78.29.76,7.26-2.78-.29-.76Zm3.75-1.44h0s-2.99,1.15-2.99,1.15l.29.76,2.99-1.15s0,0,0,0h0s-.28-.74-.28-.74h0s0-.01,0-.01Zm-13.1-.45c.18-.05.37.1.41.3.04.18-.07.36-.22.43l-.05.02c-.12.03-.21.13-.25.26-.03.09,0,.2.09.32l.05.06c.39.42.55,1.01.58,1.62v.15s0,.11,0,.11c0,.16-.09.29-.22.35l-.06.02h-.06s-.01,0-.01,0c-.18,0-.31-.14-.34-.33v-.06s0-.03,0-.03c0-.47-.1-.99-.37-1.29-.35-.37-.42-.79-.32-1.16.12-.4.41-.7.78-.78Zm.9-4.24c.14-.15.36-.15.5,0,.12.13.14.34.04.49l-.04.05-.11.05s.06-.01.06,0h0s-.02.04-.02.04c-.03.04-.07.09-.1.15l-.05.08c-.13.24-.21.49-.21.74,0,.31.14.59.37.8.61.62.91,1.36.83,2.09-.05.56-.34,1.06-.79,1.36-.17.1-.37.04-.47-.13-.1-.18-.05-.42.12-.53.26-.18.42-.46.45-.78.05-.48-.17-1-.61-1.45-.38-.39-.58-.84-.59-1.35,0-.68.3-1.26.63-1.62Z"/>',
      }}
    />
  )
)

Smoking.displayName = 'Smoking'

export const tags = ['Smoking', '']
