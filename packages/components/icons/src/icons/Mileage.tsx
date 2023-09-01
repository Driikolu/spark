import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Mileage = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Mileage"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m12,3.5c4.69,0,8.5,3.81,8.5,8.5,0,1.24-.27,2.41-.74,3.47,0,.01,0,.02,0,.03,0,.13-.07.24-.17.31-1.4,2.78-4.28,4.68-7.6,4.69-4.69,0-8.5-3.81-8.5-8.5S7.31,3.5,12,3.5Zm6.65,12.39H5.35c1.34,2.28,3.81,3.81,6.65,3.81s5.31-1.53,6.65-3.81Zm-6.65-11.59c-4.25,0-7.7,3.45-7.7,7.7,0,1.11.23,2.16.66,3.11h6.45s2.24-2.97,2.24-2.97c.13-.16.36-.2.53-.07.16.13.19.38.07.55l-1.88,2.49h6.68c.42-.95.66-2.01.66-3.11,0-4.25-3.45-7.7-7.7-7.7Zm-4.25,5c0,.21-.17.39-.39.39-.19,0-.35-.14-.38-.32v-.07s0-1.55,0-1.55c0-.21.17-.39.39-.39.19,0,.35.14.38.32v.07s0,.39,0,.39h3.86v-.39c0-.21.17-.39.39-.39.19,0,.35.14.38.32v.07s0,.39,0,.39h3.86v-.39c0-.21.17-.39.39-.39.19,0,.35.14.38.32v.07s0,1.55,0,1.55c0,.21-.17.39-.39.39-.19,0-.35-.14-.38-.32v-.07s0-.39,0-.39h-3.86v.39c0,.21-.17.39-.39.39-.19,0-.35-.14-.38-.32v-.07s0-.39,0-.39h-3.86v.39Z"/>',
      }}
    />
  )
)

Mileage.displayName = 'Mileage'

export const tags = ['Mileage', '']
