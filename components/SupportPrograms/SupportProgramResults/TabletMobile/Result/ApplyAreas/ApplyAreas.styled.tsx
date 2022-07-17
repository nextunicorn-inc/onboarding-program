import styled from '@emotion/styled';
import { FontSize, FontWeight } from '../../../../../../utils';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  margin-left: 8px;
  ${FontSize.size12}
  ${FontWeight.regular}
  line-height: 18px;
  padding: 1px 4px;
  border: 1px solid var(--color-naturalgray6);
  border-radius: 5px;
  color: var(--color-naturalgray7);
`;
