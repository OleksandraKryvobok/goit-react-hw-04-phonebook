import styled from "styled-components";

export const List = styled.ul`
    font-size: 20px;
`;

export const Item = styled.li`
    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
`;