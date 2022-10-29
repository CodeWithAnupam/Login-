// hare Krishna

userData = [
  {
    "user": 'anupam',
    "password": 'rock123'
  },
  {
    "user": 'sutapa',
    "password": 'believer123'
  }
]

userData_2 = [
  {
    "user": 'krishna',
    "password": 'krishna123'
  },
  {
    "user": 'ravi',
    "password": 'ghost234'
  }
]

let authenticate = (u, p, d ) => {
  for (let user of d) {
    if (user.user === u.trim().toLowerCase() && user.password === p) {
      return  true;
    } else {
      return false;
    } 
  };
}


document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();

  let d = new FormData(document.querySelector('form'));
  let newD = Object.fromEntries(d);
  const { fName, password } = newD;

  if (authenticate(fName, password, userData )) {
    window.location.href = './welcome.html';
  } else {
    window.location.href = './error.html';
  }

});

