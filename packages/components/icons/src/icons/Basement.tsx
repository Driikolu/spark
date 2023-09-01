import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Basement = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Basement"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m11.84,4.54c.11-.06.24-.06.35,0l6.6,3.41c.19.1.26.32.16.51-.07.13-.2.2-.34.2-.06,0-.12-.01-.17-.04h0s0,5.32,0,5.32h.18c.21,0,.38.17.38.38s-.17.38-.38.38h-.18v4.42c0,.21-.17.38-.38.38H5.93c-.21,0-.38-.17-.38-.38v-4.42h-.18c-.21,0-.38-.17-.38-.38s.17-.38.38-.38h.18v-5.31c-.18.07-.39,0-.48-.17-.1-.19-.02-.42.16-.51l6.61-3.41Zm5.84,10.16H8v.44h1.48c.21,0,.38.17.38.38v.82h1.48c.21,0,.38.17.38.38v.82h1.48c.21,0,.38.17.38.38v.82h4.12v-4.04Zm-10.45,0h-.93v4.04h6.5v-.44h-1.48c-.21,0-.38-.17-.38-.38v-.82h-1.48c-.21,0-.38-.17-.38-.38v-.82h-1.48c-.21,0-.38-.17-.38-.38v-.82Zm5.73-5.3h-1.97v4.55h1.97v-4.55Zm-.95-4.09l-5.7,2.94v5.69h3.93v-4.93c0-.21.17-.38.38-.38h2.73c.21,0,.38.17.38.38v4.93h3.96v-5.71l-5.67-2.92Zm4.67,3.33c.21,0,.38.17.38.38v2.95c.16.04.29.18.29.36,0,.21-.17.38-.38.38h-2.49c-.21,0-.38-.17-.38-.38,0-.18.12-.32.29-.36v-2.95c0-.21.17-.38.38-.38h1.92Zm-7.41,0c.21,0,.38.17.38.38v2.95c.16.04.29.18.29.36,0,.21-.17.38-.38.38h-2.49c-.21,0-.38-.17-.38-.38,0-.18.12-.32.29-.36v-2.95c0-.21.17-.38.38-.38h1.92Zm7.04.76h-1.16v2.55h1.16v-2.55Zm-7.41,0h-1.16v2.55h1.16v-2.55Z"/>',
      }}
    />
  )
)

Basement.displayName = 'Basement'

export const tags = ['Basement', '']
