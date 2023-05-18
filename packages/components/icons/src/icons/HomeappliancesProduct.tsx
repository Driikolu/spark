import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const HomeappliancesProduct = React.forwardRef(
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
          '<mask id="mask0_1508_5042" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="6" y="5" width="13" height="15"><path d="M6 5.19995H19V19.2H6V5.19995Z"/></mask><g mask="url(#mask0_1508_5042)"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.938 18.4544H7.06219C6.89778 18.4544 6.76471 18.3246 6.76471 18.1643V8.73779H18.2354V18.1643C18.2354 18.3246 18.1016 18.4544 17.938 18.4544ZM7.06219 5.94554H17.938C18.1016 5.94554 18.2354 6.07528 18.2354 6.23483V7.9922H6.76471V6.23483C6.76471 6.07528 6.89778 5.94554 7.06219 5.94554ZM17.938 5.19995H7.06219C6.47642 5.19995 6 5.66446 6 6.23483V18.1643C6 18.7354 6.47642 19.2 7.06219 19.2H17.938C18.5237 19.2 19.0002 18.7354 19.0002 18.1643V6.23483C19.0002 5.66446 18.5237 5.19995 17.938 5.19995Z"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0004 17.4304C11.2191 17.4304 9.76945 15.9814 9.76945 14.2 9.76945 12.4185 11.2191 10.9695 13.0004 10.9695 14.7817 10.9695 16.2305 12.4185 16.2305 14.2 16.2305 15.9814 14.7817 17.4304 13.0004 17.4304ZM13.0004 10.2C10.7944 10.2 9 11.9945 9 14.2 9 16.4054 10.7944 18.2 13.0004 18.2 15.2056 18.2 17 16.4054 17 14.2 17 11.9945 15.2056 10.2 13.0004 10.2ZM7.40905 7.19995H9.59095C9.81674 7.19995 10 6.97595 10 6.69995 10 6.42395 9.81674 6.19995 9.59095 6.19995H7.40905C7.18326 6.19995 7 6.42395 7 6.69995 7 6.97595 7.18326 7.19995 7.40905 7.19995ZM17.5 8.19995C17.7756 8.19995 18 7.97554 18 7.69995 18 7.42338 17.7756 7.19995 17.5 7.19995 17.2234 7.19995 17 7.42338 17 7.69995 17 7.97554 17.2234 8.19995 17.5 8.19995ZM15.5 8.19995C15.7756 8.19995 16 7.97554 16 7.69995 16 7.42338 15.7756 7.19995 15.5 7.19995 15.2234 7.19995 15 7.42338 15 7.69995 15 7.97554 15.2234 8.19995 15.5 8.19995Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5004 15.4953C11.5102 15.4953 10.7047 14.6899 10.7047 13.7C10.7047 12.71 11.5102 11.9046 12.5004 11.9046C13.4905 11.9046 14.2953 12.71 14.2953 13.7C14.2953 14.6899 13.4905 15.4953 12.5004 15.4953ZM12.5004 11.2C11.1219 11.2 10 12.3217 10 13.7C10 15.0782 11.1219 16.2 12.5004 16.2C13.8788 16.2 15 15.0782 15 13.7C15 12.3217 13.8788 11.2 12.5004 11.2Z"/>',
      }}
    />
  )
)

HomeappliancesProduct.displayName = 'HomeappliancesProduct'

export const tags = ['HomeappliancesProduct', '']
