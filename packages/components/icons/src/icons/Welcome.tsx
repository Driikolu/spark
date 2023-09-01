import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Welcome = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Welcome"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="M17.76 19.23H6.24v-.4c0-.36.28-.65.63-.65h10.26c.35 0 .63.29.63.65v.4Zm-9.46-1.82h7.4v-.54h-7.4v.54Zm-.74-2.65c0-2.54 1.99-4.61 4.44-4.61s4.44 2.07 4.44 4.61v1.34H7.56v-1.34Zm4.44-6.99c.38 0 .71.24.85.58h-1.7c.14-.34.47-.58.85-.58Zm5.13 9.64h-.69v-.54h.37c.2 0 .37-.17.37-.38v-1.73c0-2.84-2.13-5.16-4.81-5.36v-.29h.93c.21 0 .37-.17.37-.38 0-.95-.75-1.73-1.67-1.73s-1.67.78-1.67 1.73c0 .21.17.38.37.38h.93v.29c-2.69.2-4.81 2.52-4.81 5.36v1.73c0 .21.17.38.37.38h.37v.54h-.69c-.76 0-1.37.64-1.37 1.42v.79c0 .21.17.38.37.38h12.26c.2 0 .37-.17.37-.38v-.79c0-.78-.61-1.42-1.37-1.42ZM12 6c.28 0 .5-.17.5-.37v-1.26c0-.2-.22-.37-.5-.37s-.5.17-.5.37v1.26c0 .2.22.37.5.37Zm1.95 1c.12 0 .23-.04.32-.13l1.09-1.09c.18-.18.18-.46 0-.64-.18-.18-.46-.18-.64 0l-1.09 1.09c-.18.18-.18.46 0 .64.09.09.2.13.32.13Zm-4.23-.13c.09.09.2.13.32.13s.23-.04.32-.13c.18-.18.18-.46 0-.64l-1.09-1.09c-.18-.18-.46-.18-.64 0-.18.18-.18.46 0 .64l1.09 1.09Z"/>',
      }}
    />
  )
)

Welcome.displayName = 'Welcome'

export const tags = ['Welcome', '']
