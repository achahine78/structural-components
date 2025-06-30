import React from "react";
import { getStylesFromProps } from "../../helpers";
import { Box, BoxProps } from "../Box";

export type GridProps = {
    display?: "none" | "inline-grid" | "grid";
    areas?: string;
    columns?: number;
    rows?: number;
    flow?: "row" | "column" | "dense" | "row-dense" | "column-dense";
    align?: "start" | "center" | "end" | "baseline" | "stretch";
    justify?: "start" | "center" | "end" | "between";
    gap?: number;
    gapX?: number;
    gapY?: number;
} & BoxProps;

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
    (props, forwardedRef) => {
        const style = getStylesFromProps(props);
        const { display, align, justify, } = props;
        return (
            <Box
                {...props}
                style={{
                    display,
                    alignItems: align,
                    justifyContent: justify,
                    ...style,
                }}
                ref={forwardedRef}
            />
        );
    }
);
