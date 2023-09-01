import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SeaView = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="SeaView"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m19.06,4.5h.07c.2.04.36.22.36.43v7.14s0,.01,0,.02,0,.01,0,.02v6.95c0,.11-.04.22-.12.3-.08.08-.19.13-.3.13H4.94c-.24,0-.43-.18-.43-.42v-6.94s-.01-.02-.01-.03v-.03s0-7.12,0-7.12c0-.11.05-.22.13-.3.08-.08.19-.13.3-.13h2.8s.03,0,.03,0h11.3ZM6.1,12.52h-.74v6.12s1.26,0,1.26,0c.03-1.32-.07-5.08-.53-6.11Zm8.9,1.43c-.45,0-.65.07-.89.14-.26.08-.56.18-1.12.18s-.85-.09-1.11-.18c-.24-.07-.45-.14-.89-.14s-.65.07-.89.14c-.26.08-.56.18-1.11.18s-.85-.09-1.11-.18c-.18-.06-.34-.11-.6-.13.21,1.69.21,3.81.2,4.67h9.03c0-.83,0-2.75.17-4.38-.35-.03-.58-.1-.79-.16-.24-.07-.45-.14-.89-.14Zm3.63-1.43h-.74c-.45,1.03-.56,4.78-.53,6.11h1.27s0-6.11,0-6.11Zm-5.77,4.17c.21,0,.37.17.37.37s-.17.37-.37.37c-.16,0-.22.02-.32.05l-.05.02c-.11.03-.25.07-.49.07-.27,0-.42-.05-.54-.09-.09-.03-.16-.05-.32-.05-.21,0-.37-.17-.37-.37s.17-.37.37-.37c.27,0,.42.05.54.08.09.03.16.05.32.05s.22-.02.32-.05c.12-.04.27-.08.54-.08Zm-2.35-1.35c.21,0,.37.17.37.37s-.17.37-.37.37c-.16,0-.22.02-.32.05-.12.04-.27.09-.54.09s-.42-.05-.54-.09c-.09-.03-.16-.05-.32-.05-.21,0-.37-.17-.37-.37s.17-.37.37-.37c.27,0,.42.05.54.08.09.03.16.05.32.05s.22-.02.32-.05c.12-.04.27-.08.54-.08Zm4.71,0c.21,0,.37.17.37.37s-.17.37-.37.37c-.16,0-.22.02-.32.05-.12.04-.27.09-.54.09s-.42-.05-.54-.09c-.09-.03-.16-.05-.32-.05-.21,0-.37-.17-.37-.37s.17-.37.37-.37c.27,0,.42.05.54.08l.05.02c.07.02.14.03.26.03.16,0,.22-.02.32-.05.12-.04.27-.08.54-.08Zm-3.21-5.65c-1.4,0-2.53,1.14-2.53,2.53,0,.42.11.83.3,1.19.04-.01.07-.02.11-.03.26-.08.56-.17,1.11-.17s.85.09,1.11.17c.24.08.45.14.89.14s.65-.07.89-.14c.12-.04.26-.08.43-.11,0-.01,0-.03,0-.04.14-.32.21-.66.21-1,0-1.4-1.14-2.53-2.53-2.53Zm3.68-4.33h-7.36c.4,2.92-.47,5.8-1.43,6.83.11.27.2.62.27,1.02.44.02.71.1.93.17.24.08.45.14.89.14-.17-.41-.27-.85-.27-1.3,0-1.81,1.47-3.28,3.28-3.28s3.28,1.47,3.28,3.28c0,.34-.07.67-.17.98.49.01.77.09,1.02.17.19.06.37.11.66.13.08-.52.19-.98.32-1.32-.95-1.03-1.83-3.91-1.43-6.83Zm-8.23,0h-2.08s0,6.29,0,6.29h.84c.68-.58,1.7-3.27,1.24-6.29Zm11.18,0h-2.08c-.47,3.02.56,5.72,1.24,6.3h.84v-6.3Z"/>',
      }}
    />
  )
)

SeaView.displayName = 'SeaView'

export const tags = ['SeaView', '']
