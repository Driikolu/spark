import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AlarmOnFill = React.forwardRef(
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
          '<path d="M7.12567 2.6074C7.4567 3.05283 7.36111 3.68019 6.91216 4.00864C6.00104 4.6752 5.25622 5.55486 4.74131 6.57663C4.36241 7.32849 4.11631 8.14087 4.01249 8.97647C3.94424 9.52575 3.44013 9.91613 2.88652 9.84842C2.33291 9.78071 1.93945 9.28054 2.00769 8.73126C2.13945 7.67081 2.45196 6.63804 2.93459 5.68034C3.59046 4.37886 4.54222 3.25236 5.71338 2.39557C6.16233 2.06712 6.79463 2.16196 7.12567 2.6074Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0534 4.36173C15.1044 4.69422 16.0706 5.27428 16.8642 6.06523C18.1664 7.36309 18.8971 9.1224 18.8971 10.9559C18.8971 13.7376 19.3713 15.273 19.8604 16.1646C20.2522 16.8789 20.4423 17.7533 20.1184 18.5381C19.7582 19.4109 18.9126 19.8331 17.966 19.8331H15.0317L15.0305 19.8378C14.853 20.5142 14.4543 21.1131 13.8969 21.5406C13.3395 21.968 12.655 22.2 11.9505 22.2C11.246 22.2 10.5614 21.968 10.004 21.5406C9.44665 21.1131 9.04797 20.5142 8.87048 19.8378L8.86926 19.8331H5.93461C4.98925 19.8331 4.14314 19.4123 3.78334 18.5388C3.46016 17.7542 3.65159 16.8806 4.04267 16.1675C4.53096 15.2772 5.00452 13.7417 5.00452 10.9559C5.00452 9.1224 5.73525 7.36309 7.03743 6.06523C7.83095 5.27434 8.79709 4.69431 9.84798 4.36181C9.88885 3.24453 10.8146 2.35123 11.9507 2.35123C13.0867 2.35123 14.0125 3.24448 14.0534 4.36173Z"/><path d="M18.2866 2.39557C17.8377 2.06712 17.2054 2.16196 16.8743 2.6074C16.5433 3.05283 16.6389 3.68019 17.0879 4.00864C17.999 4.6752 18.7438 5.55486 19.2587 6.57663C19.6376 7.32849 19.8837 8.14087 19.9875 8.97647C20.0558 9.52575 20.5599 9.91613 21.1135 9.84842C21.6671 9.78071 22.0606 9.28054 21.9923 8.73126C21.8606 7.67081 21.5481 6.63804 21.0654 5.68034C20.4096 4.37886 19.4578 3.25236 18.2866 2.39557Z"/>',
      }}
    />
  )
)

AlarmOnFill.displayName = 'AlarmOnFill'

export const tags = ['AlarmOnFill', '']
