import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Pinterest = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Pinterest"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m2,12c0,4.09,2.46,7.61,5.99,9.16-.03-.7,0-1.54.17-2.3.19-.81,1.29-5.45,1.29-5.45,0,0-.32-.64-.32-1.58,0-1.48.86-2.59,1.93-2.59.91,0,1.35.68,1.35,1.5,0,.91-.58,2.28-.88,3.55-.25,1.06.53,1.93,1.58,1.93,1.89,0,3.17-2.43,3.17-5.32,0-2.19-1.48-3.83-4.16-3.83-3.03,0-4.92,2.26-4.92,4.79,0,.87.26,1.49.66,1.96.18.22.21.31.14.56-.05.18-.16.63-.2.8-.07.25-.27.34-.5.25-1.4-.57-2.05-2.1-2.05-3.82,0-2.84,2.4-6.25,7.15-6.25,3.82,0,6.33,2.76,6.33,5.73,0,3.92-2.18,6.85-5.4,6.85-1.08,0-2.1-.58-2.44-1.25,0,0-.58,2.3-.7,2.75-.21.77-.63,1.54-1.01,2.14.9.27,1.85.41,2.83.41,5.52,0,10-4.48,10-10S17.52,2,12,2,2,6.48,2,12Z"/>',
      }}
    />
  )
)

Pinterest.displayName = 'Pinterest'

export const tags = ['Pinterest', '']
