import styled from "styled-components";
import { Form as FormikForm, Field as FormikField, ErrorMessage as FormikError } from "formik";

export const Form = styled(FormikForm)`
    width: 400px;
    padding: 12px 8px;
    border: 1px solid black;
    margin-bottom: 20px;
`;

export const FormField = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;

    font-size: 21px;
    font-weight: 700;

    margin-bottom: 18px;
`;

export const Field = styled(FormikField)`
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

export const ErrorMessage = styled(FormikError)`
    font-size: 14px;
    font-weight: 700;
    color: tomato;
`;
