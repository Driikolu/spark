import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Moulding = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="Moulding"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m18.3,9.54c-.08,0-.16-.03-.24-.1-.16-.14-.41-.12-.56.04-.02.02-.03.05-.05.08-.04.06-.07.13-.07.2v2.23s-1.1.62-1.1.62c0,0,0,0,0,0l-5.97,3.4-.69.39v-1.2c.7.06,1.27-.46,1.29-1.21v-.79s7.79-4.45,7.79-4.45v.32c-.01.29-.16.47-.41.47Zm-2.13,4.6l-5.86,3.34-2.01,1.15s-.05-.09-.07-.14c0-.02-.02-.03-.02-.04-.03-.08-.05-.17-.06-.29-.02-.3.07-.59.25-.78.04-.05.09-.08.14-.11,0,0,0,0,.01,0,.04-.02.09-.04.13-.04.01,0,.03,0,.04,0,.04,0,.07,0,.11.01.02,0,.05.03.07.04.02.01.03.02.05.03.08.08.18.14.29.14.07,0,.14-.02.2-.05l6.62-3.77c.02.18.06.35.12.51Zm-10.88,2.69l.03-6.38,4.82,2.75v.77c-.01.29-.17.47-.41.47-.08,0-.16-.03-.24-.1-.12-.1-.28-.12-.42-.06-.14.06-.23.2-.23.35v1.83c-.1,0-.2,0-.3.02,0,0-.02,0-.02,0-.11.02-.21.06-.31.11-.03.01-.05.02-.07.04-.11.06-.21.13-.3.23-.08.08-.15.18-.21.28-.02.03-.03.07-.05.11-.04.07-.07.14-.1.21-.02.04-.02.09-.04.14-.02.07-.04.14-.05.21,0,.05,0,.1-.01.15,0,.05-.01.1-.01.16l-2.07-1.28ZM13.5,5.33l4.83,2.75-7.8,4.46-4.64-2.65-.18-.1,7.8-4.46Zm6,2.75s0,0,0,0c0-.06-.02-.12-.05-.17,0-.01-.02-.03-.03-.04-.03-.04-.06-.07-.1-.09,0,0-.01-.02-.02-.02l-5.6-3.2c-.12-.07-.28-.07-.4,0l-8.57,4.9h0s0,0,0,0h0s-.05.05-.08.08c-.02.02-.05.04-.06.06-.02.04-.03.09-.04.14,0,.02-.02.04-.02.05l-.03,7.26c0,.13.07.25.18.32l3.35,2.08c.06.04.14.06.21.06.07,0,.14-.02.2-.05l2.27-1.3s0,0,0,0l6.17-3.52c.09-.05.16-.14.18-.24.03-.1,0-.21-.05-.29-.12-.19-.19-.44-.19-.7,0-.07.02-.14.02-.21l1.13-.65c.12-.07.19-.19.19-.33v-1.92s.08.02.12.02c.68,0,1.17-.5,1.19-1.22v-1.01s0,0,0,0h0Z"/>',
      }}
    />
  )
)

Moulding.displayName = 'Moulding'

export const tags = ['Moulding', '']
