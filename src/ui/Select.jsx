import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
`;
const Option = styled.option`
  cursor: pointer;
`
function Select({options, value, onChange}) {
  return (
    <StyledSelect onChange={onChange} value={value}>  
      {options.map(option => <Option value={option.value} key={option.value}>{option.label}</Option>)}
    </StyledSelect>
  );
}

export default  Select;