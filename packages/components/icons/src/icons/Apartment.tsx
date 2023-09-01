import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Apartment = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Apartment"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m5.25,11.32h4.96c.69,0,1.25-.56,1.25-1.25s-.56-1.25-1.25-1.25h-4.96c-.69,0-1.25.56-1.25,1.25s.56,1.25,1.25,1.25Zm0-3.85h4.96c.69,0,1.25-.56,1.25-1.25s-.56-1.25-1.25-1.25h-4.96c-.69,0-1.25.56-1.25,1.25s.56,1.25,1.25,1.25Zm6.21,6.46c0-.69-.56-1.25-1.25-1.25h-4.96c-.69,0-1.25.56-1.25,1.25s.56,1.25,1.25,1.25h4.96c.69,0,1.25-.56,1.25-1.25Z"/><path d="m22.76,9.92h-7.01V1.25c0-.69-.56-1.25-1.25-1.25H1.25C.56,0,0,.56,0,1.25v21.5c0,.69.56,1.25,1.25,1.25h13.24c.69,0,1.25-.56,1.25-1.25v-10.32h5.76v10.32c0,.69.56,1.25,1.25,1.25s1.25-.56,1.25-1.25v-11.57c0-.69-.56-1.25-1.25-1.25h.01Zm-14.89,8.27c-.69,0-1.25.56-1.25,1.25v2.05H2.51V2.51h10.72v19h-4.11v-2.05c0-.69-.56-1.25-1.25-1.25h0Z"/>',
      }}
    />
  )
)

Apartment.displayName = 'Apartment'

export const tags = ['Apartment', '']
