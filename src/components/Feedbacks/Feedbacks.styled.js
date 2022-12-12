import styled from 'styled-components';

export const FeedbackButton = styled.button`
  min-width: ${p => p.theme.space[8]}px;
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.m};

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  text-transform: capitalize;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.bcg};
  cursor: pointer;

  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
