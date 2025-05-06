function loginWithFacebook() {
  FB.login(function (response) {
    if (response.status === 'connected') {
      // Autenticado com sucesso
      FB.api('/me', { fields: 'name,email' }, function (userData) {
        console.log('Usuário logado:', userData);
        alert(`Bem-vindo, ${userData.name}!`);
        // Redirecione ou envie os dados ao backend
      });
    } else {
      alert('Login com Facebook cancelado ou não autorizado.');
    }
  }, { scope: 'email,public_profile' });
}