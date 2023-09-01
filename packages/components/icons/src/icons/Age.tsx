import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Age = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Age"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m12.23,4.51c.55.26.92.79.94,1.39.03.54-.29,1.01-.77,1.21v1.14s3.92,0,3.92,0c.18,0,.32.13.35.31v.07s0,4.13,0,4.13h1.92c.2,0,.37.13.41.31v.07s0,6,0,6c0,.21-.18.38-.41.38H5.41c-.23,0-.41-.17-.41-.38v-6c0-.21.18-.38.41-.38h1.92v-4.13c0-.18.13-.34.29-.37h.06s3.92,0,3.92,0v-1.14c-.48-.19-.81-.67-.78-1.21-.02-.31.17-.59.47-.69.17-.06.29-.2.34-.37.09-.24.33-.38.59-.33Zm2.14,11.99c-.33.55-.85.98-1.46,1.21-.34.12-.7.19-1.07.19-.4,0-.8-.08-1.17-.24-.56-.24-1.03-.64-1.34-1.15-.33.55-.84.97-1.45,1.2-.68.26-1.43.25-2.1,0v1.05s12.44,0,12.44,0v-1.17c-.09.04-.17.08-.26.12-1.34.5-2.86,0-3.59-1.2Zm3.85-3H5.78v3.37l.04.02c.54.29,1.2.33,1.78.11.76-.29,1.28-.96,1.35-1.74.01-.17.15-.3.32-.33h.06c.2,0,.37.14.39.33.02.19.06.38.12.56.37.91,1.35,1.45,2.35,1.29,1-.16,1.75-.97,1.79-1.95,0-.18.14-.32.32-.35h.07c.21,0,.38.15.39.35,0,.23.05.45.13.66.43,1.06,1.67,1.59,2.78,1.18.2-.08.38-.18.55-.31v-3.19Zm-2.33-4.5h-7.78v3.75h7.78v-3.75Zm-3.68-3.6c-.13.21-.33.38-.57.48h-.08c.04.28.22.54.44.54s.4-.25.4-.55c-.03-.17-.1-.33-.2-.46Z"/>',
      }}
    />
  )
)

Age.displayName = 'Age'

export const tags = ['Age', '']
