import { Meta, StoryObj } from "@storybook/react";
import { Box } from "../components/Box";

const meta: Meta<typeof Box> = {
    title: "Components/Box",
    component: Box,
    argTypes: {
        // Padding props
        p: { control: "text" },
        px: { control: "text" },
        py: { control: "text" },
        pt: { control: "text" },
        pr: { control: "text" },
        pb: { control: "text" },
        pl: { control: "text" },
        paddingUnit: { control: "text" },

        // Margin props
        m: { control: "text" },
        mx: { control: "text" },
        my: { control: "text" },
        mt: { control: "text" },
        mr: { control: "text" },
        mb: { control: "text" },
        ml: { control: "text" },
        marginUnit: { control: "text" },

        // Positioning props
        position: { control: "text" },
        inset: { control: "text" },
        top: { control: "text" },
        right: { control: "text" },
        bottom: { control: "text" },
        left: { control: "text" },

        // Flex props
        flexBasis: { control: "text" },
        flexShrink: { control: "text" },
        flexGrow: { control: "text" },

        // Grid props
        gridArea: { control: "text" },
        gridColumn: { control: "text" },
        gridColumnStart: { control: "text" },
        gridColumnEnd: { control: "text" },
        gridRow: { control: "text" },
        gridRowStart: { control: "text" },
        gridRowEnd: { control: "text" },

        // Component type
        as: {
            control: { type: "select" },
            options: ["div", "span"],
        },

        children: {
            control: "text",
        },
    },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Playground: Story = {
    args: {
        children: "Hello, I am a Box",
        p: "2",
        paddingUnit: "rem",
        m: "1",
        marginUnit: "rem",
        position: "relative",
        top: "0",
        left: "0",
        as: "div",
    },
};
