export default {
  userPresent() {
    return localStorage.getItem('name') && localStorage.getItem('email');
  },

  removeUser() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  },

  getName() {
    return localStorage.getItem('name');
    // return 'Anushree';
  },

  getEmail() {
    return localStorage.getItem('email');
    // return 'rahul.pillai03@gmail.com';
  },

  completeLoginOrReg(name, email) {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  }
}