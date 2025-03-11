import styled from 'styled-components';

const defaultTextStyles = (theme) => `
	font-family: ${theme.fonts.body};
	font-weight: ${theme.fontWeights.regular};
	color: ${theme.colors.text.primary};
	flex-wrap: wrap;
	margin-top: 0px;
	margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const title = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.h5};
    font-weight: ${theme.fontWeights.bold};
		margin-bottom: 12px;
`;

// These are FUNCTIONS which are defined above and which return a certain style string
const variants = {
  body,
  label,
  caption,
  error,
  hint,
  title,
};

// The first line loads a default style if the component comes without a variant
// The second line then calls the function defined above and returns a style string ovwerwriting the default style settings or adding new settings
export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: 'body',
};
