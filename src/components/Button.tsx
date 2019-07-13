import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledButton = styled.button`
  ${tw`bg-black text-white px-10 py-4 rounded-full`}
  font-size: 20px;
  font-weight: bold;
  border: none;
`;

export interface ButtonProps {
  className?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  className,
  ...rest
}) => (
  <StyledButton className={className} {...rest} data-testid="my-button">
    {children}
  </StyledButton>
);

export default Button;
