import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "../components/Grid";
import { Box } from "../components/Box";

const meta = {
    component: Grid,
    parameters: {
        docs: {
            codePanel: true,
        },
    },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const genericBoxStyle = {
    backgroundColor: "#444",
    color: "#fff",
    borderRadius: "5px",
    padding: "20px",
    fontSize: "150%",
};

const RegularContainer = (args: any) => {
    return (
        <Grid columns="100px 100px 100px" gap={10} {...args}>
            <Box style={genericBoxStyle}>A</Box>
            <Box style={genericBoxStyle}>B</Box>
            <Box style={genericBoxStyle}>C</Box>
            <Box style={genericBoxStyle}>D</Box>
            <Box style={genericBoxStyle}>E</Box>
            <Box style={genericBoxStyle}>F</Box>
        </Grid>
    );
};

export const DefiningAGrid = {
    render: (args) => (
        <>
            <RegularContainer {...args} />
        </>
    ),
} satisfies Story;

const LineBasedPlacementContainer = (args: any) => {
    return (
        <Grid columns="100px 100px 100px" gap={10} {...args}>
            <Box
                style={genericBoxStyle}
                gridColumnStart={2}
                gridColumnEnd={3}
                gridRowStart={1}
                gridRowEnd={2}
            >
                A
            </Box>
            <Box
                style={genericBoxStyle}
                gridColumnStart={2}
                gridColumnEnd={3}
                gridRowStart={2}
                gridRowEnd={3}
            >
                B
            </Box>
            <Box
                style={genericBoxStyle}
                gridColumnStart={3}
                gridColumnEnd={4}
                gridRowStart={2}
                gridRowEnd={3}
            >
                C
            </Box>
            <Box
                style={genericBoxStyle}
                gridColumnStart={1}
                gridColumnEnd={2}
                gridRowStart={1}
                gridRowEnd={2}
            >
                D
            </Box>
            <Box
                style={genericBoxStyle}
                gridColumnStart={1}
                gridColumnEnd={2}
                gridRowStart={2}
                gridRowEnd={3}
            >
                E
            </Box>
            <Box
                style={genericBoxStyle}
                gridColumnStart={3}
                gridColumnEnd={4}
                gridRowStart={1}
                gridRowEnd={2}
            >
                F
            </Box>
        </Grid>
    );
};

export const LineBasedPlacement = {
    render: (args) => (
        <>
            <LineBasedPlacementContainer {...args} />
        </>
    ),
} satisfies Story;

const LineBasedPlacementSpanningTracksContainer = (args: any) => {
    return (
        <Grid columns="100px 100px 100px" gap={10} {...args}>
            <Box style={genericBoxStyle} gridColumn="1 / 3" gridRow="1">
                A
            </Box>
            <Box style={genericBoxStyle} gridColumn="3" gridRow="1 / 3">
                B
            </Box>
            <Box style={genericBoxStyle} gridColumn="1" gridRow="2">
                C
            </Box>
            <Box style={genericBoxStyle} gridColumn="2" gridRow="2">
                D
            </Box>
        </Grid>
    );
};

export const LineBasedPlacementSpanningTracks = {
    render: (args) => (
        <>
            <LineBasedPlacementSpanningTracksContainer {...args} />
        </>
    ),
} satisfies Story;

const UsingRepeatNotationContainer = (args: any) => {
    return (
        <Grid
            columns="repeat(4, [col] 100px )"
            rows="repeat(3, [row] auto  )"
            gap={10}
            {...args}
        >
            <Box
                style={genericBoxStyle}
                gridColumn="col / span 2"
                gridRow="row"
            >
                A
            </Box>
            <Box
                style={genericBoxStyle}
                gridColumn="col 3 / span 2"
                gridRow="row"
            >
                B
            </Box>
            <Box style={genericBoxStyle} gridColumn="col" gridRow="row 2">
                C
            </Box>
            <Box
                style={genericBoxStyle}
                gridColumn="col 2 / span 3"
                gridRow="row 2"
            >
                D
            </Box>
            <Box
                style={genericBoxStyle}
                gridColumn="col / span 4"
                gridRow="row 3"
            >
                E
            </Box>
        </Grid>
    );
};

export const UsingRepeatNotation = {
    render: (args) => (
        <>
            <UsingRepeatNotationContainer {...args} />
        </>
    ),
} satisfies Story;
