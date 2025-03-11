import styled from 'styled-components';

// Spacer gets something along the lines of
// top:"xs", left:"md" vert:"lg" hor:"xl"

// export const Spacer = styled.View`
//   margin-top: ${({ top, vert, theme }) => `${top || vert ? theme.space[top] : 0}`};
//   margin-right: ${({ right, hor, theme }) => `${right || hor ? theme.space[right] : 0}`};
//   margin-bottom: ${({ bottom, vert, theme }) => `${bottom || vert ? theme.space[bottom] : 0}`};
//   margin-left: ${({ left, hor, theme }) => `${left || hor ? theme.space[left] : 0}`};

//   background-color: #8ab21d;
// `;

// The Spacer gets height and with
export const Spacer = styled.View`
  width: ${({ width, theme }) => `${width ? theme.space[width] : 0}`};
  height: ${({ height, hor, theme }) => `${height || hor ? theme.space[height] : 0}`};
`;
