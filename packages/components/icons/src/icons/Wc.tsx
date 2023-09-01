import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Wc = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Wc"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m16.11,10.9c-.02.24-.21.42-.45.42h-.23c.14-.44.22-.91.22-1.4,0-2.27-1.64-4.12-3.65-4.12s-3.65,1.85-3.65,4.12c0,.49.08.96.22,1.4h-.23c-.23,0-.43-.18-.45-.45l-.66-4.58c-.02-.27.06-.53.24-.73.18-.2.42-.31.69-.31h7.69c.26,0,.51.11.69.31.18.2.26.46.24.71l-.66,4.63Zm-5.97,1.61c-.68-.64-1.07-1.57-1.07-2.59,0-1.86,1.31-3.37,2.93-3.37s2.93,1.51,2.93,3.37c0,1.01-.39,1.94-1.07,2.59h-3.71Zm5.43,1.03c0,.13-.08.23-.2.26-.02,0-.05-.01-.07-.01h-6.61s-.05,0-.07.01c-.11-.03-.2-.13-.2-.26,0-.15.12-.28.27-.28h6.61c.15,0,.27.12.27.28Zm-2.47,3.44c-.12.05-.21.17-.22.31-.01.14.04.27.15.35.35.26.58.65.66,1.13h-3.39c.08-.48.3-.87.66-1.13.11-.08.17-.21.15-.35-.01-.14-.1-.25-.22-.31-.99-.42-1.67-1.34-1.81-2.41h5.83c-.14,1.07-.82,1.99-1.81,2.41Zm3.96-11.91c-.31-.35-.76-.55-1.22-.55h-7.69c-.46,0-.91.2-1.22.55-.31.35-.47.83-.43,1.33l.66,4.58c.05.63.56,1.11,1.17,1.11h.55c.08.15.17.3.27.44h-.46c-.55,0-.99.46-.99,1.03,0,.44.27.81.65.96.1,1.22.76,2.3,1.77,2.92-.37.45-.57,1.04-.57,1.72,0,.21.16.38.36.38h4.17c.2,0,.36-.17.36-.38,0-.68-.2-1.27-.57-1.72,1.01-.62,1.66-1.7,1.77-2.92.38-.14.65-.52.65-.96,0-.57-.45-1.03-.99-1.03h-.46c.1-.14.19-.28.27-.44h.55c.61,0,1.12-.48,1.17-1.09l.66-4.63c.04-.47-.12-.95-.43-1.3Z"/>',
      }}
    />
  )
)

Wc.displayName = 'Wc'

export const tags = ['Wc', '']
