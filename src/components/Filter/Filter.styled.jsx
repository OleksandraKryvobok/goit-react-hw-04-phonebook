import styled from "styled-components";

export const Input = styled.input`
    font-size: 14px;
    font-weight: 500;

    width: 170px;
    padding: 5px;
    border: 1px solid #c2c1c1;
    border-radius: 2px;
    
    &:focus {
        outline: none !important;
        border: 1px solid #49a1f3;
        box-shadow: 0 0 3px #49a1f3;
    }
`;