import '../src/tailwind.css'
import './sb-theming.css'
import { ToC } from '@docs/helpers/ToC'

import { DocsContainer } from '@storybook/blocks'
import { withThemeByDataAttribute } from '@storybook/addon-styling'
import { Icon } from '@spark-ui/icon'
import { ShareExpand } from '@spark-ui/icons/dist/icons/ShareExpand'

const ExampleContainer = ({ children, ...props }) => {
  return (
    <DocsContainer {...props}>
      <div id="spark-doc-container">{children}</div>
      <ToC />
    </DocsContainer>
  )
}

export const parameters = {
  docs: {
    container: ExampleContainer,
  },
  options: {
    storySort: {
      order: [
        'Getting Started',
        'Using Spark',
        'Components',
        'Utils',
        'Hooks',
        'Contributing',
        '*',
      ],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
  (Story, args) => (
    <div className="relative w-full">
      <div className="absolute -right-lg -top-xl">
        <a href={`/iframe.html?&id=${args.id}`} target="_blank">
          <Icon size="sm" label="expand">
            <ShareExpand />
          </Icon>
        </a>
      </div>
      <Story />
    </div>
  ),
]
