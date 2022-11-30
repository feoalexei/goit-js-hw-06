const form = document.querySelector('.login-form');

form.addEventListener('submit', handleLogin);

function handleLogin(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  const credentials = {};

  if (!email.value || !password.value) {
    alert('All login fileds must be filled in!');
  } else {
    credentials.email = email.value;
    credentials.password = password.value;
  }

  console.log(credentials);
  e.currentTarget.reset();
}
