<#import "/wcm.ftl" as wcm/>
<@wcm.header />
<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">
<script>
  function mudarAba(evt, slot) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("editable-slot");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(slot).style.display = "block";
    evt.currentTarget.className += " active";
  }
</script>

  <@wcm.menu />
    <!-- Wrapper -->
  <div class="wcm-all-content">
      <div id="wcm-content" class="clearfix wcm-background">
        <div class="fluig-style-guide">
          <div class="tab">
            <button id="slotCalendario" class="tablinks " onclick="mudarAba(event, 'slotContainer001')">Calendário de Atividades</button>
            <button class="tablinks active" onclick="mudarAba(event, 'slotContainer002')">Cadastrar atividade</button>
          </div>
          <div class="editable-slot slotfull layout-1-1 " id="slotContainer001" style="display:none">
              <@wcm.renderSlot id="Slot001" decorator="false" editableSlot="true" />
          </div>    
          <div class="editable-slot slotfull layout-1-1 " id="slotContainer002" style="display:block">
              <@wcm.renderSlot id="Slot002" decorator="false" editableSlot="true" />
          </div>			
      </div>
    </div>
  </div>            <#--  <@wcm.footer layoutuserlabel="wcm.layoutsimples.user" />  -->
</div>

