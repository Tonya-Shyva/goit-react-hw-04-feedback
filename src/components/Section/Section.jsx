import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import { SectionTitle } from './SectionTitle';

export const Section = ({ title, children }) => (
  <Box as="section" pt={20} pb={20}>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Box>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
