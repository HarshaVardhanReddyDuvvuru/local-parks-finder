// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ParkList> = (args) => {
//   return <ParkList {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ParkList from './ParkList'

export const generated = () => {
  return <ParkList />
}

export default {
  title: 'Components/ParkList',
  component: ParkList,
} as ComponentMeta<typeof ParkList>
