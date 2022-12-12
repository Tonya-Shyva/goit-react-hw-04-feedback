import styled from 'styled-components';

export const SectionTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => p.theme.space[0]};
  color: ${p => p.theme.colors.black};
`;
