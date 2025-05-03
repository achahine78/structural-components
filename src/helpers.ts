type PaddingStyle = {
    padding?: string | number;
    paddingTop?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
};

const getPaddingFromProps = (props: any): PaddingStyle => {
    let paddingStyle: PaddingStyle = {};
    let unit = props.paddingUnit || "px";
    if (props.hasOwnProperty("p")) {
        paddingStyle.padding = props.p + unit;
    }

    if (props.hasOwnProperty("px")) {
        paddingStyle.paddingTop = props.px + unit;
        paddingStyle.paddingBottom = props.px + unit;
    }

    if (props.hasOwnProperty("py")) {
        paddingStyle.paddingLeft = props.py + unit;
        paddingStyle.paddingRight = props.py + unit;
    }

    if (props.hasOwnProperty("pt")) {
        paddingStyle.paddingTop = props.pt + unit;
    }

    if (props.hasOwnProperty("pr")) {
        paddingStyle.paddingRight = props.pr + unit;
    }

    if (props.hasOwnProperty("pb")) {
        paddingStyle.paddingBottom = props.pb + unit;
    }

    if (props.hasOwnProperty("pl")) {
        paddingStyle.paddingLeft = props.pl + unit;
    }

    return paddingStyle;
};

type MarginStyle = {
    margin?: string | number;
    marginTop?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
};

const getMarginFromProps = (props: any): MarginStyle => {
    let marginStyle: MarginStyle = {};
    let unit = props.marginUnit || "px";
    if (props.hasOwnProperty("m")) {
        marginStyle.margin = props.m + unit;
    }

    if (props.hasOwnProperty("mx")) {
        marginStyle.marginTop = props.mx + unit;
        marginStyle.marginBottom = props.mx + unit;
    }

    if (props.hasOwnProperty("my")) {
        marginStyle.marginLeft = props.my + unit;
        marginStyle.marginRight = props.my + unit;
    }

    if (props.hasOwnProperty("mt")) {
        marginStyle.marginTop = props.mt + unit;
    }

    if (props.hasOwnProperty("mr")) {
        marginStyle.marginRight = props.mr + unit;
    }

    if (props.hasOwnProperty("mb")) {
        marginStyle.marginBottom = props.mb + unit;
    }

    if (props.hasOwnProperty("ml")) {
        marginStyle.marginLeft = props.ml + unit;
    }

    return marginStyle;
};

export type WidthStyle = {
    width?: React.CSSProperties["width"];
    minWidth?: React.CSSProperties["minWidth"];
    maxWidth?: React.CSSProperties["maxWidth"];
};

const getWidthFromProps = (props: any) => {
    let widthStyle: WidthStyle = {};
    let unit = props.widthUnit || "px";

    if (props.hasOwnProperty("width")) {
        widthStyle.width = props.width + unit;
    }

    if (props.hasOwnProperty("minWidth")) {
        widthStyle.minWidth = props.minWidth + unit;
    }

    if (props.hasOwnProperty("minWidth")) {
        widthStyle.minWidth = props.minWidth + unit;
    }

    return widthStyle;
};

export type HeightStyle = {
    height?: React.CSSProperties["height"];
    minHeight?: React.CSSProperties["minHeight"];
    maxHeight?: React.CSSProperties["maxHeight"];
};

const getHeightFromProps = (props: any) => {
    let heightStyle: HeightStyle = {};
    let unit = props.heightUnit || "px";

    if (props.hasOwnProperty("height")) {
        heightStyle.height = props.height + unit;
    }

    if (props.hasOwnProperty("minHeight")) {
        heightStyle.minHeight = props.minHeight + unit;
    }

    if (props.hasOwnProperty("maxHeight")) {
        heightStyle.maxHeight = props.maxHeight + unit;
    }

    return heightStyle;
};

type PositioningStyle = {
    position?: React.CSSProperties["position"];
    inset?: React.CSSProperties["inset"];
    top?: React.CSSProperties["top"];
    right?: React.CSSProperties["right"];
    bottom?: React.CSSProperties["bottom"];
    left?: React.CSSProperties["left"];
};

const getPositioningFromProps = (props: any) => {
    let positioningStyle: PositioningStyle = {};

    if (props.hasOwnProperty("inset")) {
        positioningStyle.inset = props.inset;
    }

    if (props.hasOwnProperty("position")) {
        positioningStyle.position = props.position;
    }

    if (props.hasOwnProperty("top")) {
        positioningStyle.top = props.top;
    }

    if (props.hasOwnProperty("right")) {
        positioningStyle.right = props.right;
    }

    if (props.hasOwnProperty("bottom")) {
        positioningStyle.bottom = props.bottom;
    }

    if (props.hasOwnProperty("bottom")) {
        positioningStyle.bottom = props.bottom;
    }

    return positioningStyle;
};

type FlexChildrenStyle = {
    flexBasis?: React.CSSProperties["flexBasis"];
    flexShrink?: React.CSSProperties["flexShrink"];
    flexGrow?: React.CSSProperties["flexGrow"];
};

const getFlexChildrenStyleFromProps = (props: any): FlexChildrenStyle => {
    let flexStyle: FlexChildrenStyle = {};

    if (props.hasOwnProperty("flexBasis")) {
        flexStyle.flexBasis = props.flexBasis;
    }

    if (props.hasOwnProperty("flexShrink")) {
        flexStyle.flexShrink = props.flexShrink;
    }

    if (props.hasOwnProperty("flexGrow")) {
        flexStyle.flexGrow = props.flexGrow;
    }

    return flexStyle;
};

type GridChildrenStyle = {
    gridArea?: React.CSSProperties["gridArea"];
    gridColumn?: React.CSSProperties["gridColumn"];
    gridColumnStart?: React.CSSProperties["gridColumnStart"];
    gridColumnEnd?: React.CSSProperties["gridColumnEnd"];
    gridRow?: React.CSSProperties["gridRow"];
    gridRowStart?: React.CSSProperties["gridRowStart"];
    gridRowEnd?: React.CSSProperties["gridRowEnd"];
};

const getGridChildrenStyleFromProps = (props: any): GridChildrenStyle => {
    let gridStyle: GridChildrenStyle = {};

    if (props.hasOwnProperty("gridArea")) {
        gridStyle.gridArea = props.gridArea;
    }

    if (props.hasOwnProperty("gridColumn")) {
        gridStyle.gridColumn = props.gridColumn;
    }

    if (props.hasOwnProperty("gridColumnStart")) {
        gridStyle.gridColumnStart = props.gridColumnStart;
    }

    if (props.hasOwnProperty("gridColumnEnd")) {
        gridStyle.gridColumnEnd = props.gridColumnEnd;
    }

    if (props.hasOwnProperty("gridRow")) {
        gridStyle.gridRow = props.gridRow;
    }

    if (props.hasOwnProperty("gridRowStart")) {
        gridStyle.gridRowStart = props.gridRowStart;
    }

    if (props.hasOwnProperty("gridRowEnd")) {
        gridStyle.gridRowEnd = props.gridRowEnd;
    }

    return gridStyle;
};

export const getStylesFromProps = (props: any) => {
    return {
        ...getPaddingFromProps(props),
        ...getMarginFromProps(props),
        ...getWidthFromProps(props),
        ...getHeightFromProps(props),
        ...getPositioningFromProps(props),
        ...getFlexChildrenStyleFromProps(props),
        ...getGridChildrenStyleFromProps(props),
    };
};
