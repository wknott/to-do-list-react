import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  transition: background 0.3s, transform 0.3s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverPrimary};
    transform: scale(1.1);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.activePrimary};
  }
`;