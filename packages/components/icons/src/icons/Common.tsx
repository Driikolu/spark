import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Common = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Common"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m18.89,5.08c.16-.13.4-.1.53.07.13.17.1.4-.07.53l-6.26,4.89h6.03c.21,0,.38.17.38.38s-.17.38-.38.38h-6.73v6.93h.25s.05.01.08.02c.03,0,.05-.02.08-.02h4.47v-5.88c0-.21.17-.38.38-.38h1.47c.21,0,.38.17.38.38s-.17.38-.38.38h-1.1v5.5h1.1c.21,0,.38.17.38.38s-.17.38-.38.38h-6.32s-.05-.01-.08-.02c-.03,0-.05.02-.08.02h-7.77c-.21,0-.37-.17-.37-.38s.17-.38.37-.38h1.1v-5.5h-1.1c-.21,0-.37-.17-.37-.38s.17-.38.37-.38h1.47c.21,0,.37.17.37.38v5.88h4.88v-6.93h-6.73c-.21,0-.37-.17-.37-.38s.17-.38.37-.38h6.03l-6.26-4.89c-.16-.13-.19-.36-.07-.53.13-.16.36-.19.53-.07l3.21,2.51v-.55c0-.21.17-.38.37-.38h2.3c.21,0,.38.17.38.38v2.93l.63.49,6.89-5.38Zm-8.55,6.91c.21,0,.37.17.37.38v3.61c.19.02.34.17.34.37,0,.21-.17.38-.38.38h-2.99c-.21,0-.37-.17-.37-.38,0-.2.15-.35.34-.37v-3.61c0-.21.17-.38.37-.38h2.3Zm5.69,0c.21,0,.38.17.38.38v3.61c.19.02.34.17.34.37,0,.21-.17.38-.38.38h-2.99c-.21,0-.38-.17-.38-.38,0-.2.15-.35.34-.37v-3.61c0-.21.17-.38.38-.38h2.3Zm-6.07.76h-1.55v3.23h1.55v-3.23Zm5.69,0h-1.55v3.23h1.55v-3.23Zm-5.05-5.32h-1.55v.75l1.55,1.21v-1.97Z"/>',
      }}
    />
  )
)

Common.displayName = 'Common'

export const tags = ['Common', '']
