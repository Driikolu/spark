import { tw } from '@spark-ui/internal-utils'

export const dashedVariants = [
  {
    intent: 'main',
    design: 'dashed',
    class: tw([
      'enabled:hover:bg-main/dim-5',
      'enabled:active:bg-main/dim-5',
      'focus-visible:bg-main/dim-5',
      'text-main',
    ]),
  },
  {
    intent: 'support',
    design: 'dashed',
    class: tw([
      'enabled:hover:bg-support/dim-5',
      'enabled:active:bg-support/dim-5',
      'focus-visible:bg-support/dim-5',
      'text-support',
    ]),
  },
  {
    intent: 'basic',
    design: 'dashed',
    class: tw([
      'enabled:hover:bg-basic/dim-5',
      'enabled:active:bg-basic/dim-5',
      'focus-visible:bg-basic/dim-5',
      'text-basic',
    ]),
  },
  {
    intent: 'accent',
    design: 'dashed',
    class: tw([
      'enabled:hover:bg-accent/dim-5',
      'enabled:active:bg-accent/dim-5',
      'focus-visible:bg-accent/dim-5',
      'text-accent',
    ]),
  },
  {
    intent: 'success',
    design: 'dashed',
    class: tw([
      'enabled:hover:bg-success/dim-5',
      'enabled:active:bg-success/dim-5',
      'focus-visible:bg-success/dim-5',
      'text-success',
    ]),
  },
  {
    intent: 'alert',
    design: 'dashed',
    class: tw([
      'enabled:hover:bg-alert/dim-5',
      'enabled:active:bg-alert/dim-5',
      'focus-visible:bg-alert/dim-5',
      'text-alert',
    ]),
  },
  {
    intent: 'danger',
    design: 'dashed',
    class: tw([
      'enabled:hover:bg-error/dim-5',
      'enabled:active:bg-error/dim-5',
      'focus-visible:bg-error/dim-5',
      'text-error',
    ]),
  },
  {
    intent: 'info',
    design: 'dashed',
    class: tw([
      'enabled:hover:bg-info/dim-5',
      'enabled:active:bg-info/dim-5',
      'focus-visible:bg-info/dim-5',
      'text-info',
    ]),
  },
  {
    intent: 'neutral',
    design: 'dashed',
    class: tw([
      'enabled:hover:bg-neutral/dim-5',
      'enabled:active:bg-neutral/dim-5',
      'focus-visible:bg-neutral/dim-5',
      'text-neutral',
    ]),
  },
  {
    intent: 'surface',
    design: 'dashed',
    class: tw([
      'enabled:hover:bg-surface/dim-5',
      'enabled:active:bg-surface/dim-5',
      'focus-visible:bg-surface/dim-5',
      'text-surface',
    ]),
  },
] as const
