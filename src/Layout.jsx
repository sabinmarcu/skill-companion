import styled from '@emotion/styled';

export const Grid = styled.section`
  display: flex;
  flex-flow: row wrap;
  flex: 1;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

export const Wrapper = styled.article`
  flex: ${({ full }) => (full ? '0 0 100%' : 1)};
  margin: 20px;
  @media (max-width: 768px) {
    flex: 1;
  }
`;
