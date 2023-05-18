import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const CalendarFill = React.forwardRef(
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
          '<path d="M6.62687 12.8858C6.04985 12.8858 5.58209 13.3335 5.58209 13.8858 5.58209 14.4381 6.04985 14.8858 6.62687 14.8858H13.791C14.3681 14.8858 14.8358 14.4381 14.8358 13.8858 14.8358 13.3335 14.3681 12.8858 13.791 12.8858H6.62687ZM6.62687 15.8858C6.04985 15.8858 5.58209 16.3335 5.58209 16.8858 5.58209 17.4381 6.04985 17.8858 6.62687 17.8858H10.209C10.786 17.8858 11.2537 17.4381 11.2537 16.8858 11.2537 16.3335 10.786 15.8858 10.209 15.8858H6.62687Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.56716 3.6001C8.56716 3.04781 8.0994 2.6001 7.52239 2.6001C6.94537 2.6001 6.47761 3.04781 6.47761 3.6001V4.31438H5.73134C3.67058 4.31438 2 5.91337 2 7.88581V19.0287C2 20.9985 3.66248 22.6001 5.72597 22.6001H18.2733C20.3338 22.6001 22 21.0062 22 19.0335V7.88099C22 5.9061 20.3269 4.31438 18.2687 4.31438H17.5224V3.6001C17.5224 3.04781 17.0546 2.6001 16.4776 2.6001C15.9006 2.6001 15.4328 3.04781 15.4328 3.6001V4.31438H8.56716V3.6001ZM4.08955 11.4572H19.9104V19.0335C19.9104 19.9012 19.1803 20.6001 18.2733 20.6001H5.72597C4.82196 20.6001 4.08955 19.8992 4.08955 19.0287V11.4572Z"/>',
      }}
    />
  )
)

CalendarFill.displayName = 'CalendarFill'

export const tags = ['CalendarFill', '']
