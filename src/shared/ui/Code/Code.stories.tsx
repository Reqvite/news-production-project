import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Normal: Story = {
    args: {
        text: 'export default {\n'
        + '    title: \'shared/Code\',\n'
        + '    component: Code,\n'
        + '    },\n'
        + '}export default meta;\n'
        + '\n'
        + 'type Story = StoryObj<typeof Code>;\n'
        + '\n'
        + 'export const Normal: Story = {};',
    },
};
