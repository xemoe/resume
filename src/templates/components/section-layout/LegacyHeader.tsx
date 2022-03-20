import React from 'react';
import styled from '@emotion/styled';

export const Section = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${(props: any) => props.theme.colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 4px;
  column-gap: 5px;

  svg {
    vertical-align: middle;
  }
`;

export function LegacyHeader({ title, Icon }: any) {
  return (
    <Section>
      {Icon}
      {title}
    </Section>
  );
}
