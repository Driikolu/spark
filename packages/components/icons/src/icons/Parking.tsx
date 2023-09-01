import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Parking = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Parking"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m11.19.32c.46-.42,1.17-.42,1.63,0l10.27,9.47c.29.27.52.6.68.96.16.36.24.76.24,1.15v9.23c0,.76-.3,1.49-.84,2.02-.54.54-1.26.84-2.02.84H2.86c-.76,0-1.49-.3-2.02-.84C.3,22.63,0,21.9,0,21.14v-9.23c0-.4.08-.79.24-1.15.16-.36.39-.69.68-.96h0S11.19.32,11.19.32ZM2.55,11.55h0s-.08.1-.11.16c-.03.06-.04.12-.04.19h0s0,9.25,0,9.25c0,.12.05.24.14.33.09.09.2.14.33.14h3.06v-7.66c0-.66.54-1.2,1.2-1.2h9.69c.32,0,.62.13.85.35.23.23.35.53.35.85v7.66h3.12c.12,0,.24-.05.33-.14s.14-.2.14-.33v-9.25c0-.06-.01-.13-.04-.19-.03-.06-.06-.11-.11-.15L12,2.83,2.55,11.55Zm13.07,10.05v-6.46h-7.29v6.46h7.29Zm1.2-9.37H7.12c-.66,0-1.2-.54-1.2-1.2s.54-1.2,1.2-1.2h9.69c.66,0,1.2.54,1.2,1.2s-.54,1.2-1.2,1.2Z"/>',
      }}
    />
  )
)

Parking.displayName = 'Parking'

export const tags = ['Parking', '']
