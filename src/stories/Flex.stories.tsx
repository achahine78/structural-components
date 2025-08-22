import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "../components/Flex";
import { Box } from "../components/Box";

const meta = {
    component: Flex,
    parameters: {
        docs: {
            codePanel: true,
        },
    },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const RegularContainer = (args: any) => {
    return (
        <Flex style={{ backgroundColor: "purple" }} p={12} gap={12} {...args}>
            <Box
                style={{
                    backgroundColor: "orange",
                    width: "100px",
                    height: "100px",
                }}
            />
            <Box
                style={{
                    backgroundColor: "orange",
                    width: "300px",
                    height: "100px",
                }}
            />
            <Box
                style={{
                    backgroundColor: "orange",
                    width: "200px",
                    height: "100px",
                }}
            />
        </Flex>
    );
};

export const Primary = {
    render: (args) => (
        <>
            <RegularContainer {...args} />
        </>
    ),
} satisfies Story;
