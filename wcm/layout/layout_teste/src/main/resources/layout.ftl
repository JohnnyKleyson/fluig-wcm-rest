<#import "/wcm.ftl" as wcm/>
<@wcm.header authenticated="true"/>

<!-- WCM Wrapper content -->
<@wcm.menu />
<div class="wcm-wrapper-content  fluig-style-guide">
    	<div class="wcm-all-content">
			<div id="wcm-content" class="clearfix wcm-background">
				<div class='tabContainer'>
					<div class="buttonContainer">
						<button class="tablink btn btn-primary" onclick="openCity('1', this )">Calendário</button>
						<button class="tablink btn btn-secondary" onclick="openCity('2', this )">Cadastro</button>
					</div>

					<div class='tabcontent' id="1">
						<div class="editable-slot slotfull layout-1-1" id="slotContainer001">
							<@wcm.renderSlot id="Slot002" decorator="false" editableSlot="true" />
						</div>
					</div>

					<div class='tabcontent' id="2">
						<div class="editable-slot slotfull layout-1-1" id="slotContainer001">
							<@wcm.renderSlot id="Slot001" decorator="false" editableSlot="true" />
						</div>
					</div>
					<#--  <@wcm.footer layoutuserlabel="wcm.layoutdefault.user" />  -->
				</div>
    	</div>
		<script>
				function openCity(cityName, elmnt) {
					//Esconde todos os elementos com classe de "tabcontent"
					var i, tabcontent;
					tabcontent = document.getElementsByClassName("tabcontent");
					for (i = 0; i < tabcontent.length; i++){
						tabcontent[i].style.display = "none"
					}

					//Mostra o conteudo da pagina especifica
					document.getElementById(cityName).style.display = "block";
				}
		</script>
</div>