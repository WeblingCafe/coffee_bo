import "styled-components";
import {
  ColorsTypes,
  FontTypes,
  BoxTypes,
  PaddingTypes,
  LayoutTypes,
} from "styles/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: ColorsTypes;
    font: FontTypes;
    box: BoxTypes;
    padding: PaddingTypes;
    layout: LayoutTypes;
  }
}
