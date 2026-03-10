const API = "http://127.0.0.1:8000";

export const getCourses = async () => {
  const res = await fetch(`${API}/courses`);
  return res.json();
};

export const getLessons = async (courseId) => {
  const res = await fetch(`http://127.0.0.1:8000/lessons/${courseId}`);
  return res.json();
};


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

export const enrollCourse = async (data) => {

const res = await fetch("http://127.0.0.1:8000/enroll",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
})

return res.json()

}

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

export const buyCourse = async (data) => {

const res = await fetch("http://127.0.0.1:8000/buy-course",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
})

return res.json()

}

export const createCourse = async (data) => {

const res = await fetch("http://127.0.0.1:8000/courses",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
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