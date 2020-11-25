import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  padding-right: 10px;
  font-size: 13px;
`;

const Select = styled.select`
  height: 50px;
  display: block;
  padding: 0 10px;
  border: 1px solid transparent;
  background: transparent;
  font-size: 13px;

  &:focus {
    outline: none;
    border-top: 1px solid ${(props) => props.theme.primaryAccent};
  }
`;

export const ThemeSelect = ({ label, options, value, onChange }) => {
  return (
    <>
      <Label>{label}</Label>
      <Select onChange={onChange} value={value}>
        {options.map((theme) => (
          <option key={theme.value} value={theme.value}>
            {theme.name}
          </option>
        ))}
      </Select>
    </>
  );
};
