import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const HomeappliancesType = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-title="HomeappliancesType"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" d="m19.08,8.91l-2.17,2.17-.75-.75,2.17-2.17c.21-.21.54-.21.75,0,.21.21.21.54,0,.75Zm-3.58,5.3c-.83.83-1.65.75-2.53.67-.66-.06-1.34-.13-1.98.21l-2.1-2.09c.34-.65.28-1.32.21-1.98-.08-.87-.16-1.69.67-2.53l1.73-1.73,1.08,1.08.8.8h0s.98.98.98.98l.98.98s0,0,0,0l.8.8,1.08,1.08-1.73,1.73Zm-9.8,4.87l-.79-.79,2.21-2.21c.1.11.23.25.39.4.15.16.29.29.41.39l-2.21,2.21Zm2.7-5.48l1.99,1.99c-.65.59-1.33,1.07-1.53,1.03-.01,0-.04-.02-.09-.05,0,0,0,0,0-.01l-1.33-1.33s0,0-.01,0c-.02-.04-.04-.06-.04-.07-.03-.21.44-.9,1.03-1.55Zm6.68-8.69c.21-.21.54-.21.75,0,.21.21.21.54,0,.75l-2.17,2.17-.75-.75,2.17-2.17Zm4.53,2.71c-.5-.5-1.32-.5-1.83,0l-2.17,2.17-1.42-1.42,2.17-2.17c.5-.5.5-1.32,0-1.83-.5-.5-1.32-.5-1.83,0l-2.17,2.17-.59-.59c-.14-.14-.4-.14-.54,0l-2,2c-1.08,1.09-.98,2.22-.89,3.14.06.65.11,1.21-.22,1.69-.67.67-1.75,1.9-1.47,2.62,0,.01.01.03.02.04l-2.57,2.57c-.15.15-.15.39,0,.54l1.33,1.33c.07.07.17.11.27.11s.2-.04.27-.11l2.57-2.57s.03.01.04.02c.08.03.16.04.25.04.73,0,1.77-.92,2.37-1.52.49-.33,1.05-.28,1.69-.22.91.09,2.05.2,3.14-.89l2-2c.07-.07.11-.17.11-.27s-.04-.2-.11-.27l-.59-.59,2.17-2.17c.5-.5.5-1.32,0-1.83Z"/>',
      }}
    />
  )
)

HomeappliancesType.displayName = 'HomeappliancesType'

export const tags = ['HomeappliancesType', '']
