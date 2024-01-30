import { useReducer } from 'react';
import * as yup from 'yup';

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(4).max(20).required()
})
