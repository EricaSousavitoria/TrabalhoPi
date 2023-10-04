document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");
    const registrosTable = document.getElementById("registrosTable");
    const limparBtn = document.getElementById("limpar");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtém os valores do formulário
        const esocial = form.elements.esocial.value;
        const nome = form.elements.nome.value;
        const cargo = form.elements.cargo.value;
        const data = formatarData(form.elements.data.value);
        const sexo = form.elements.radio.value;
        
        
        // Criando uma nova linha na tabela
        const newRow = registrosTable.insertRow(-1);
        const cells = [esocial, nome, cargo, data, sexo];

        cells.forEach((cellText, index) => {
            const cell = newRow.insertCell(index);
            cell.textContent = cellText;
        });

        // Para limpar o formulário
        form.reset();

        // Para salvar os dados no LocalStorage
        const registro = { esocial, nome, cargo, data, sexo};
        const registros = JSON.parse(localStorage.getItem("registros")) || [];
        registros.push(registro);
        localStorage.setItem("registros", JSON.stringify(registros));
    });

    limparBtn.addEventListener("click", function () {
        form.reset();
    });

    // Carrega os registros do LocalStorage e exibe na tabela
    const registros = JSON.parse(localStorage.getItem("registros")) || [];
    registros.forEach((registro) => {
        const newRow = registrosTable.insertRow(-1);
        const cells = [registro.esocial, registro.nome, registro.cargo, registro.data, registro.sexo]});
    });

    // Função para formatar a data
    function formatarData(data) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(data).toLocaleDateString(undefined, options);
      }

     
      listarClientes()

    
  
