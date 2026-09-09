//elementos que serão atualizados durante a validação
const inputNome = document.getElementById('inputNome');
const mensagemFeedback = document.getElementById('mensagemFeedback');

//valida o nome a cada alteração feita no campo
inputNome.addEventListener('input', () => {
  const valor = inputNome.value.trim();

  //mantém o campo limpo enquanto o usuário ainda não digitou
  if (valor.length === 0) {
    mensagemFeedback.classList.add('hidden');
    inputNome.classList.remove('border-red-500', 'border-green-500');
    inputNome.classList.add('border-slate-300');
    return;
  }

  mensagemFeedback.classList.remove('hidden');

  //nomes curtos recebem erro, os demais são considerados válidos
  if (valor.length < 3) {
    mensagemFeedback.textContent = 'O nome precisa ter no mínimo 3 caracteres.';
    mensagemFeedback.className = 'text-sm text-red-600';
    
    inputNome.classList.remove('border-slate-300', 'border-green-500');
    inputNome.classList.add('border-red-500');
  } else {
    mensagemFeedback.textContent = 'Nome válido!';
    mensagemFeedback.className = 'text-sm text-green-600';
    
    inputNome.classList.remove('border-slate-300', 'border-red-500');
    inputNome.classList.add('border-green-500');
  }
});
