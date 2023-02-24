import { css } from "styled-components";

export default function flex({
  justify = 'center"',
  align = "center",
  direction = "row",
  gap = "0",
}) {
  return css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    gap: ${gap};
  `;
}
