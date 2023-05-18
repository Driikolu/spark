import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ProfileFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.13042 19.2668C3.20277 17.4438 2 14.8623 2 12C2 6.47748 6.47748 2 12 2C17.5225 2 22 6.47748 22 12C22 14.8623 20.7972 17.4439 18.8695 19.2668L18.8749 19.277L18.6766 19.4446C16.9061 21.0334 14.5659 22 12 22C9.43486 22 7.09519 21.034 5.32495 19.4459L5.125 19.277L5.13042 19.2668ZM12 12.4167C13.956 12.4167 15.5417 10.831 15.5417 8.875C15.5417 6.91899 13.956 5.33333 12 5.33333C10.044 5.33333 8.45833 6.91899 8.45833 8.875C8.45833 10.831 10.044 12.4167 12 12.4167ZM5.75 17.1102C7.41667 19.1935 10.0833 20.0269 12.4167 20.0269C14.75 20.0269 17.4167 18.3602 18.25 17.1102C17.4167 16.138 14.6667 14.1935 12 14.1935C9.33333 14.1935 6.72222 16.138 5.75 17.1102Z"/>',
      }}
    />
  )
)

ProfileFill.displayName = 'ProfileFill'

export const tags = ['ProfileFill', '']
