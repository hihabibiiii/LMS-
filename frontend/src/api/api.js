const API = "http://127.0.0.1:8000";

export const getCourses = async () => {
  const res = await fetch(`${API}/courses`);
  return res.json();
};

export const getCourseLessons = async (courseId) => {

const res = await fetch(`${API}/lessons/${courseId}`)

return res.json()

}
export const getCourse = async (courseId) => {

const res = await fetch(`http://127.0.0.1:8000/courses/${courseId}`)

const data = await res.json()

return data

}

export const getAllLessons = async () => {

const res = await fetch(`${API}/lessons`)

return res.json()

}


export const registerUser = async (data) => {
  const res = await fetch(`${API}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const getMyCourses = async (userId) => {

const res = await fetch(`http://127.0.0.1:8000/my-courses/${userId}`)

return res.json()

}

export const enrollCourse = async (courseId, token) => {
  const res = await fetch(`http://127.0.0.1:8000/buy-course?course_id=${courseId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
};

export const markLessonComplete = async (data) => {

  const res = await fetch("http://127.0.0.1:8000/progress",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  })

  return res.json()
}

export const getProgress = async (userId,courseId) => {

const res = await fetch(
`http://127.0.0.1:8000/progress/${userId}/${courseId}`
)

return res.json()

}


export const updateLastWatched = async (data) => {

const res = await fetch("http://127.0.0.1:8000/last-watched",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
})

return res.json()

}

export const buyCourse = async (courseId) => {

const token = localStorage.getItem("token")

const res = await fetch(`http://localhost:8000/buy-course?course_id=${courseId}`, {

method: "POST",

headers: {
"Authorization": `Bearer ${token}`,
"Content-Type": "application/json"
}

})

return res.json()

}

export const createCourse = async (data) => {

const res = await fetch("http://127.0.0.1:8000/courses",{
method:"POST",
body:data
})

return res.json()

}

export const createLesson = async (data) => {

const res = await fetch("http://127.0.0.1:8000/lessons",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
})

return res.json()

}

export const deleteCourse = async (id) => {

const res = await fetch(`http://127.0.0.1:8000/courses/${id}`,{
method:"DELETE"
})

return res.json()

}

export const updateCourse = async (id, data) => {

const res = await fetch(`http://127.0.0.1:8000/courses/${id}`,{
method:"PUT",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
})

return res.json()

}


export const getLessons = async ()=>{

const res = await fetch("http://127.0.0.1:8000/lessons")

return res.json()

}

export const deleteLesson = async (id) => {

const res = await fetch(`${API}/lessons/${id}`,{
method:"DELETE"
})

return res.json()

}

export const updateLesson = async (id, data) => {

const res = await fetch(`http://127.0.0.1:8000/lessons/${id}`,{
method:"PUT",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
})

return res.json()

}

export const getAdminStats = async () => {

const res = await fetch("http://localhost:8000/admin/stats")

return res.json()

}

export const checkEnrollment = async (userId,courseId) => {

const res = await fetch(
`http://localhost:8000/check-enrollment/${userId}/${courseId}`
)

return res.json()

}