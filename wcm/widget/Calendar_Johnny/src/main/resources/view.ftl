<div id="HelloWorld_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"> 
    <div id="container">
      <div id="header">
        <i class="fluigicon fluigicon-chevron-left icon-md" id="backButton"></i>
        <div id="monthDisplay"></div>
        <i class="fluigicon fluigicon-chevron-right icon-md" id="nextButton"></i>
      </div>

      <div id="weekdays">
        <div>Domingo</div>
        <div>Segunda</div>
        <div>Terça</div>
        <div>Quarta</div>
        <div>Quinta</div>
        <div>Sexta</div>
        <div>Sabado</div>
      </div>

      <div id="calendar"></div>
    </div>
    <div id='teste'></div>
   
    <script>
      //Construção Calendario.
        let nav = 0;
        const calendar = document.getElementById('calendar');
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        function load() {
            
            const dt = new Date();

            if (nav !== 0) {
                dt.setMonth(new Date().getMonth() + nav);
            }

            const day = dt.getDate();
            const month = dt.getMonth();
            const year = dt.getFullYear();

            const firstDayOfMonth = new Date(year, month, 1);
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            
            const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
                weekday: 'long',
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            });
            const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

            document.getElementById("monthDisplay").innerText = (dt.toLocaleDateString('pt-br', {month:'long'})).toUpperCase() + " " + (year);
            
            calendar.innerHTML =  '';
            //Criação dos dias da semana.
            for(let i = 1; i <= paddingDays + daysInMonth; i++){
                const daySquare = document.createElement('div');
                daySquare.classList.add('day');

                if (i > paddingDays){
                    daySquare.innerText = i - paddingDays;

                    daySquare.addEventListener('click', () => console.log('click'));
                }else{
                    daySquare.classList.add('padding');
                }

                calendar.appendChild(daySquare);
            }
        }
        //Botoes para alternar entre meses do ano.
        function initButtons(){
            document.getElementById('nextButton').addEventListener('click', () => {
                nav++;
                load();
            });

            document.getElementById('backButton').addEventListener('click', () => {
                nav--;
                load();
            });
        }

        initButtons();
        load();

        //Consultando Dados do Dataset Pela API "Dataset Search" e Injetando no HTML.

        var _jsonreturn = [];
        $.ajax({
            async:false,
            limit:1000,
            type:"GET",
            dataType:"json",
            url:"/api/public/ecm/dataset/search?datasetId=Cadastro_Atividades",
            success: function(retorno){
                _jsonreturn = retorno.content.sort();
                
                for (const i in _jsonreturn) {
                    var {
                        descricao,
                        diaBase, 
                        instrucoes, 
                    } = _jsonreturn[i];
                    const desc = descricao
                    const instru = instrucoes
                    const base = diaBase;

                            
                    var mostrarAtvd = document.createElement('span');
                    mostrarAtvd.className ="mostrarAtvd";
                    mostrarAtvd.innerHTML = descricao 
                    var diaAtv = document.querySelector(".day")
                    diaAtv.appendChild(mostrarAtvd);
                }; 
            }
        })
   </script>
</div>
