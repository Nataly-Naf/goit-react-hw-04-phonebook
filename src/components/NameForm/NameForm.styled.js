import { Field, Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
margin:0;
padding: 0;
display: flex;
margin-bottom: 20px;
flex-direction: column;
gap:20px;

`

export const StyledField = styled(Field)`
border-radius: 5px;
width: 350px;
margin-left: 10px;

`

export const AddBtn = styled.button`
background-color: lightblue;
padding: 0;
border-radius: 5px;
width:150px;
height:30px;
  font-size: 12px;
  font-weight: 700; 
  border:none;
  outline: solid grey 1px;
  

  &:hover {
 background-color:#3f51b5;
  }

`