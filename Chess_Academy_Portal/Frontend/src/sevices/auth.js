import axios from "axios";

const api_url = "http://localhost:8181/";

export const signIn = (data) => axios.post(`${api_url}/api/v1/auth/login`, data);
export const signUp = (data) => axios.post(`${api_url}/api/v1/auth/register`, data);
export const course_post = (data) => axios.post(`${api_url}/api/v1/auth/course`, data);
export const course_update = (data) => axios.put(`${api_url}/api/v1/auth/course`, data);
export const course_delete = (data) => axios.delete(`${api_url}/api/v1/auth/course`, data);
export const course_get = (data) => axios.get(`${api_url}/api/v1/auth/course`, data);
