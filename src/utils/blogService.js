import axios from "axios";
import { blogs } from "../config";

const apiEndPoint = blogs;

export const getAllBlogs = () => {
 return axios.get(apiEndPoint + 'getAllBlog');
}
