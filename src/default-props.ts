import { mapValues, without } from "lodash-es";
export interface CommonDefaultProps {
  // 跳转行为
  actionType: string;
  url: string;
  // size
  height: string;
  width: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  // border type
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  // shadow and opacity
  boxShadow: string;
  opacity: string;
  // position and x,y
  position: string;
  left: string;
  top: string;
  right: string;
}
export const commonDefaultProps = {
  // 跳转行为
  actionType: "",
  url: "",
  // size
  height: "",
  width: "318px",
  paddingLeft: "0px",
  paddingRight: "0px",
  paddingTop: "0px",
  paddingBottom: "0px",
  // border type
  borderStyle: "none",
  borderColor: "#000",
  borderWidth: "0",
  borderRadius: "0",
  // shadow and opacity
  boxShadow: "0 0 0 #000000",
  opacity: 1,
  // position and x,y
  position: "absolute",
  left: "0",
  top: "0",
  right: "0",
};

// 文本
export const textDefaultProps = {
  // basic props - font styles
  text: "正文内容",
  fontSize: "14px",
  fontFamily: "",
  fontWeight: "normal",
  fontStyle: "normal",
  textDecoration: "none",
  lineHeight: "1",
  textAlign: "left",
  color: "#000000",
  backgroundColor: "",
  ...commonDefaultProps,
};

export const imageDefaultProps = {
  src: "",
  ...commonDefaultProps,
};

export interface TextDefaultProps extends CommonDefaultProps {
  // basic props - font styles
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
}

export interface ImageDefaultProps extends CommonDefaultProps {
  src: string;
}

export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  "actionType",
  "url",
  "text"
);

export const imageStylePropNames = without(
  Object.keys(imageDefaultProps),
  "actionType",
  "url",
  "src"
);

export function transformToComponentProps<T extends { [key: string]: any }>(
  props: T
) {
  return mapValues(props, (item) => {
    return {
      type: item.constructor,
      default: item,
    };
  });
}
