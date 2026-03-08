const API = "http://127.0.0.1:8000";

export const getCourses = async () => {
  const res = await fetch(`${API}/courses`);
  return res.json();
};

export const getLessons = async (courseId) => {
  const res = await fetch(`http://127.0.0.1:8000/lessons/${courseId}`);
  return res.json();
};