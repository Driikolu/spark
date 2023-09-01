import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const EducationalLevel = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="EducationalLevel"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m11.94,6.02l.06.03,7.33,4.72.06.04c.13.13.15.35.04.5l-.05.05-.63.59v.03s0,3,0,3c0,.21-.17.38-.38.38-.18,0-.34-.13-.37-.31v-.07s0-2.33,0-2.33l-1.5,1.41v2.38h0c0,.96-1.86,1.5-4.28,1.53h-.22c-2.45,0-4.39-.51-4.5-1.44v-.08s0-2.3,0-2.3l-.03-.02-2.86-2.78-.05-.05c-.11-.15-.09-.36.04-.49l.05-.04,6.96-4.72.06-.03c.08-.04.18-.04.26,0Zm.06,9.69h-.19c-1.95.03-3.56.49-3.56.76s1.72.76,3.75.76,3.75-.48,3.75-.76h0s0,0,0,0c-.01-.27-1.62-.73-3.56-.76h-.19Zm-3.71-2.49l-.04.03v2.31c.75-.38,2.01-.59,3.47-.61h.28s.2,0,.2,0c1.5.02,2.78.23,3.55.61v-2.32s-.04-.03-.04-.03c-2.47-1.62-4.92-1.62-7.42,0Zm3.53-6.41l-6.38,4.33,2.06,2.01v-.12s0-.03,0-.03v.03s0-.05,0-.05v-.03s.01-.03.01-.03c0-.01,0-.02.01-.03v-.03s.02-.02.03-.03c0-.01.01-.02.02-.03,0,0,.01-.02.02-.03,0,0,.01-.01.02-.02,0,0,.02-.02.03-.02,0,0,.01,0,.02-.01,2.89-1.97,5.81-1.97,8.67,0,.08.06.14.14.16.24v.07s0,.03,0,.03l2.05-1.92-6.73-4.33Z"/>',
      }}
    />
  )
)

EducationalLevel.displayName = 'EducationalLevel'

export const tags = ['EducationalLevel', '']
