import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const GardeningType = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="GardeningType"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m13.57,3.59c.49.2.82.68.81,1.22,0,.14.05.27.14.36.09.09.23.14.36.13.54-.04,1.04.26,1.26.76s.1,1.08-.3,1.46c-.1.09-.15.22-.15.35,0,.14.07.26.17.35.4.36.54.93.34,1.44-.18.47-.61.78-1.1.82h-.11c-.13,0-.27.05-.36.15-.1.09-.14.23-.13.36.04.54-.26,1.05-.75,1.27-.41.19-.88.13-1.24-.13.27,1,.38,2.04.33,3.08.06,1.23-.1,2.46-.48,3.63,1.35.03,2.68.33,3.92.89.19.11.27.35.17.55-.07.13-.21.22-.36.22-.05,0-.09-.02-.14-.04-1.27-.57-2.65-.84-4.03-.81-1.26-.03-2.52.19-3.7.63-.13.07-.3.06-.42-.03-.12-.09-.18-.24-.16-.39.02-.15.13-.28.28-.32,1.15-.44,2.37-.67,3.6-.69,0-.03.01-.05.03-.08.38-1.14.55-2.34.49-3.55.05-1.1-.08-2.21-.4-3.26l-.03.03c-.24.28-.58.44-.95.44-.16,0-.32-.03-.47-.09-.5-.2-.82-.7-.79-1.24,0-.13-.05-.26-.14-.36-.1-.09-.23-.14-.36-.13-.54.04-1.04-.27-1.25-.77-.22-.5-.1-1.08.29-1.45.1-.1.15-.23.15-.36,0-.13-.07-.26-.17-.35-.41-.36-.55-.94-.35-1.44.21-.5.69-.83,1.23-.81.13,0,.27-.04.36-.15.09-.1.14-.23.13-.36-.04-.54.26-1.04.74-1.26.48-.22,1.05-.11,1.42.27.1.09.22.14.36.15.13,0,.25-.06.34-.15.35-.4.91-.54,1.41-.34Zm-.81.87c-.24.27-.57.43-.93.44-.36,0-.7-.14-.95-.4-.13-.15-.35-.2-.53-.11-.18.08-.3.27-.28.47.02.36-.1.72-.35.98-.25.26-.6.4-.95.4-.2,0-.38.12-.45.31-.07.19-.02.4.14.53.27.24.42.59.42.95s-.15.71-.42.95c-.15.14-.19.36-.1.54.07.2.27.32.48.29h.12c.34,0,.67.14.9.38.24.25.37.58.36.93,0,.21.11.39.3.47.19.07.4.02.52-.14.24-.28.6-.45.97-.44.36,0,.7.15.95.4.13.15.35.2.53.11.19-.08.3-.27.28-.48-.02-.36.1-.72.35-.98.22-.23.52-.37.83-.39h.12c.19-.01.37-.13.45-.31.07-.19.02-.4-.14-.53-.27-.24-.43-.58-.44-.94,0-.36.14-.72.4-.97.13-.14.17-.35.09-.53-.08-.18-.26-.29-.45-.28-.35.02-.7-.11-.96-.35-.28-.24-.44-.61-.44-.98,0-.2-.11-.39-.3-.46-.19-.07-.4-.02-.52.14Zm.15,1.02c.99.42,1.63,1.4,1.62,2.48,0,1.48-1.18,2.67-2.64,2.67-1.07,0-2.03-.65-2.44-1.65-.41-1-.18-2.15.58-2.92.76-.77,1.89-.99,2.88-.58Zm-1.01.61c-1.02,0-1.84.84-1.84,1.87s.82,1.87,1.84,1.87,1.84-.84,1.84-1.87c0-.5-.19-.97-.54-1.32-.35-.35-.81-.55-1.3-.55Z"/>',
      }}
    />
  )
)

GardeningType.displayName = 'GardeningType'

export const tags = ['GardeningType', '']
