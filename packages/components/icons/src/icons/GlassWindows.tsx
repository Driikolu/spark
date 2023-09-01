import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const GlassWindows = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="GlassWindows"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m19.12,5c.21,0,.38.17.38.38v13.25c0,.21-.17.38-.38.38H4.88c-.21,0-.38-.17-.38-.38V5.38c0-.21.17-.38.38-.38h14.25Zm-.38.75H5.25v12.5h13.5V5.75Zm-.75.42c.21,0,.38.17.38.38v10.91c0,.21-.17.38-.38.38H5.99c-.21,0-.38-.17-.38-.38V6.54c0-.21.17-.38.38-.38h12.01Zm-6.98.75h-4.65v10.16h4.65V6.92Zm1.2,0h-.45v10.16h.45V6.92Zm5.4,0h-4.65v10.16h4.65V6.92Zm-7.8,1.45c.15-.15.38-.15.53,0,.15.15.15.38,0,.53l-2.54,2.54c-.07.07-.17.11-.26.11s-.19-.04-.27-.11c-.15-.15-.15-.38,0-.53l2.54-2.54Zm6.6,0c.15-.15.38-.15.53,0,.15.15.15.38,0,.53l-2.54,2.54c-.07.07-.17.11-.26.11s-.19-.04-.27-.11c-.15-.15-.15-.38,0-.53l2.54-2.54Zm-7.94-.25c.15-.15.38-.15.53,0,.15.15.15.38,0,.53l-1.45,1.46c-.07.07-.17.11-.27.11s-.19-.04-.26-.11c-.15-.15-.15-.38,0-.53l1.45-1.46Zm6.6,0c.15-.15.38-.15.53,0,.15.15.15.38,0,.53l-1.45,1.46c-.07.07-.17.11-.26.11s-.19-.04-.27-.11c-.15-.15-.15-.38,0-.53l1.45-1.46Z"/>',
      }}
    />
  )
)

GlassWindows.displayName = 'GlassWindows'

export const tags = ['GlassWindows', '']
