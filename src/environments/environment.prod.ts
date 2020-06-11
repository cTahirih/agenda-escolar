export const environment = {
  production: true,
  api: 'https://student-note.herokuapp.com/student-notes/',
  endpoints: {
    config: {
      grade: 'grados/',
      section: 'secciones/',
      course: 'materias/',
      role: 'roles/',
      login: 'oauth/token',
      newUser: {
        teacher: 'teachers/',
        tutor: 'tutor/'
      }
    }
  }
};
