import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const IdentityOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="IdentityOutline"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="m13.9,13.83h3.93c.45,0,.8-.35.8-.8s-.36-.8-.8-.8h-3.93c-.45,0-.8.36-.8.8s.36.8.8.8Zm-5.06-1.11c.42,0,.8-.15,1.1-.46.3-.31.46-.68.46-1.11s-.15-.8-.46-1.11c-.3-.31-.67-.46-1.1-.46s-.8.15-1.1.46c-.3.31-.46.68-.46,1.11s.15.8.46,1.11c.3.31.67.46,1.1.46Zm5.06-1.58h3.93c.45,0,.8-.35.8-.8s-.36-.8-.8-.8h-3.93c-.45,0-.8.36-.8.8s.36.8.8.8Z"/><path d="m21.46,5.05c-.36-.36-.8-.55-1.32-.55H3.86c-.51,0-.95.19-1.32.55-.36.36-.54.81-.54,1.32v11.26c0,.52.19.96.54,1.32.36.36.8.55,1.32.55h16.28c.51,0,.95-.19,1.32-.55.37-.36.54-.81.54-1.32V6.38c0-.52-.19-.96-.54-1.32h0ZM3.77,6.38c0-.06.02-.07.02-.08,0,0,.02-.02.07-.02h16.28s.07.02.07.02c0,0,.02.02.02.08v11.26c0,.06-.02.07-.02.08,0,0-.02.02-.07.02H3.86s-.07-.02-.07-.02c0,0-.02-.02-.02-.08V6.38Z"/><path d="m11.96,14.99c0-.31-.08-.61-.24-.87-.16-.26-.39-.45-.67-.57-.44-.18-.83-.3-1.18-.36-.34-.06-.68-.1-1.02-.1-.36,0-.72.03-1.09.1-.37.07-.76.19-1.16.35-.28.13-.51.31-.68.57-.17.26-.26.55-.26.87v.5h6.32v-.5h0Z"/>',
      }}
    />
  )
)

IdentityOutline.displayName = 'IdentityOutline'

export const tags = ['IdentityOutline', '']
