document.addEventListener("DOMContentLoaded", function () {
          const form = document.getElementById("calc-form");
          const resultDiv = document.getElementById("resultado");
        
          if (form) {
            form.addEventListener("submit", function (e) {
              e.preventDefault();
        
              const km = parseFloat(document.getElementById("km").value);
              const energia = parseFloat(document.getElementById("energia").value);
        
              if (isNaN(km) || isNaN(energia)) {
                resultDiv.innerHTML = "<p>Por favor, preencha todos os campos corretamente.</p>";
                return;
              }
        
              // Estimativas simples de emissão de CO2
              const co2Km = km * 0.192 * 4; // semanas no mês
              const co2Energia = energia * 0.084; // fator médio Brasil
              const total = (co2Km + co2Energia).toFixed(2);
        
              resultDiv.innerHTML = `
                <h2>Resultado:</h2>
                <p>Sua emissão mensal estimada é de <strong>${total} kg de CO₂</strong>.</p>
                <p>Compare com as iniciativas da empresa na seção de Metas & KPIs.</p>
              `;
            });
          }
        });
        