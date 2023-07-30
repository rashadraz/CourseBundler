import { server } from '../Store';

import axios from 'axios';

export const getAllCourses =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'allCoursesRequest' });

      const { data } = await axios.get(
        `${server}/courses?keyword=${keyword}&category=${category}`
      );
      dispatch({ type: 'allCoursesSuccess', payload: data.courses });
    } catch (error) {
      dispatch({
        type: 'allCoursesFail',
        payload: error.response.data.message,
      });
    }
  };

export const getCourseLectures = id => async dispatch => {
  try {
    dispatch({ type: 'getCoursesRequest' });
   
    const { data } = await axios.get(`${server}/course/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: 'getCoursesRequestSuccess', payload: data.lectures });
  } catch (error) {
    dispatch({
      type: 'getCoursesFail',
      payload: error.response.data.message,
    });
  }
};
