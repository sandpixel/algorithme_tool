// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none">\n\
<span id="subtitle">un environnement de programmation visuel</span>\n\
<span id="blocklyMessage">Blockly</span>\n\
<span id="codeTooltip">Voir le code JavaScript généré.</span>\n\
<span id="linkTooltip">Sauvegarder et lier aux blocs.</span>\n\
<span id="runTooltip">Lancer le programme défini par les blocs dans l’espace de travail.</span>\n\
<span id="runProgram">Exécuter le programme</span>\n\
<span id="resetProgram">Reset</span><span id="dialogOk">OK</span>\n\
<span id="dialogCancel">Annuler</span><span id="catLogic">Logique</span>\n\
<span id="catLoops">Boucles</span>\n\
<span id="catMath">Math</span>\n\
<span id="catText">Texte</span>\n\
<span id="catLists">Listes</span>\n\
<span id="catColour">Couleur</span>\n\
<span id="catVariables">Variables</span>\n\
<span id="catProcedures">Fonctions</span>\n\
<span id="httpRequestError">Il y a eu un problème avec la demande.</span>\n\
<span id="linkAlert">Partagez vos blocs grâce à ce lien:\n\n%1</span>\n\
<span id="hashError">Désolé, \'%1\' ne correspond à aucun programme sauvegardé.</span>\n\
<span id="xmlError">Impossible de charger le fichier de sauvegarde.  Peut être a t-il été créé avec une autre version de Blockly?</span>\n\
<span id="listVariable">liste</span>\n\
<span id="textVariable">texte</span>\n\
</div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof codepage == 'undefined') { var codepage = {}; }


codepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Code_badXml">Erreur d’analyse du XML :\n%1\n\nSélectionner \'OK\' pour abandonner vos modifications ou \'Annuler\' pour continuer à modifier le XML.</span><span id="Code_badCode">Erreur du programme :\n%1</span><span id="Code_timeout">Nombre maximum d’itérations d’exécution dépassé.</span><span id="Code_discard">Supprimer tous les %1 blocs ?</span></div>';
};


codepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return codepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../python_compressed.js"><\/script><script type="text/javascript" src="../../dart_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="../../Blob.js"><\/script><script type="text/javascript" src="../../FileSaver.js"><\/script><table width="100%" height="100%"><tr><td>\n\
<h1><span id="title"></span><span class="bleu">&#60;Algorithme&#62;</span></h1></td><td class="farSide"><select id="languageMenu"></select></td></tr><tr><td colspan=2>\n\
<table width="100%"><tr id="presentation">Outil pour apprendre les concepts de base de la programmation.</tr>\n\<tr id="tabRow" height="1em"><br/><br/>\n\
Tu rencontres des probl&#232;mes ? Click ce bouton <button onclick="parseCode()"><img src="flag.png" alt="Parse" title="Parse"/></button> puis sur celui-ci <button onclick="stepCode()" id="stepButton" disabled="disabled"><img src="stepBystep.png" title="Tracking"/></button> pour avoir une ex&#233;cution par &#233;tape du programme.\n\
<td id="tab_blocks" class="tabon"><strong>Block Box</strong></td>\n\
<td class"=tabmin">&nbsp;</td>\n\
<td id="tab_javascript" class="taboff">JavaScript</td>\n\
<td class="tabmin">&nbsp;</td>\n\
<td id="tab_python" class="taboff">Python</td>\n\
<td class="tabmin">&nbsp;</td>\n\
<td id="tab_dart" class="taboff">Dart</td>\n\
<td class="tabmin">&nbsp;</td>\n\
<td id="tab_xml" class="taboff">XML</td>\n\
<td class="tabmax">\n\
    <button id="trashButton" class="notext" title="Jeter tous les blocs.">\n\
    <img src=\'../../media/1x1.gif\' class="trash icon21">\n\
    </button>\n\
    <button id="linkButton" class="notext" title="Sauvegarder et lier aux blocs.">\n\
    <img src=\'../../media/1x1.gif\' class="link icon21">\n\
    </button>\n\
    <button id="runButton" class="notext primary" title="Executer">\n\
    <img src=\'../../media/1x1.gif\' class="run icon21">\n\
    </button>\n\
    <button id="exportButton" class="notext" title="Exporter le code" onclick="ExportCode()">\n\
    <img src=\'../../media/1x1.gif\' class="export icon21">\n\
    </button>\n\
</td></tr></table>\n\
</td></tr><tr><td height="99%" colspan=2 id="content_area">' + codepage.toolbox(null, null, opt_ijData) + '</td></tr></table>\n\
<div id="content_blocks" class="content"></div>\n\
<pre id="content_javascript" class="content"></pre>\n\
<pre id="content_python" class="content"></pre>\n\
<pre id="content_dart" class="content"></pre>\n\
<textarea id="content_xml" class="content" wrap="off"></textarea>' + apps.dialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


codepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none">\n\
<category name="Commentaire">\n\\n\\n\\n\\n\
<block type="commentaire"></block>\n\\n\
</category>\n\
<category name="Variables">\n\\n\\n\
<block type="variables_set"></block>\n\
<block type="variables_get"></block>\n\\n\\n\
<block type="constante_set"></block>\n\\n\
<block type="constante_get"></block>\n\\n\\n\
</category>\n\
<category name="Types">\n\\n\\n\
<block type="logic_null"></block>\n\\n\
<block type="math_number"></block>\n\\n\
<block type="logic_boolean"></block>\n\\n\
<block type="text"></block>\n\\n\\n\
<block type="lists_create_empty"></block>\n\
</category>\n\\n\
<category name="Logique">\n\\n\
<block type="controls_if"></block>\n\
<block type="logic_compare"></block>\n\
<block type="logic_operation"></block>\n\
<block type="logic_negate"></block>\n\
<block type="logic_boolean"></block>\n\
<block type="logic_null"></block>\n\
</category>\n\
<category name="Boucles">\n\
<block type="controls_whileUntil"></block>\n\\n\
<block type="controls_DoWhile"></block>\n\
<block type="controls_for">\n\<value name="FROM"><block type="math_number"><field name="NUM">0</field></block></value>\n\<value name="TO">\n\
<block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block>\n\
</category>\n\
<category name="Math">\n\
<block type="math_number"></block>\n\
<block type="math_arithmetic"></block>\n\\n\\n\
<block type="math_round"></block>\n\\n\
<block type="arrondi_precision"></block>\n\\n\
<block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block>\n\
<block type="math_random_float"></block>\n\\n\
<block type="math_single"></block>\n\
<block type="math_trig"></block>\n\
<block type="math_constant"></block>\n\
<block type="math_number_property"></block>\n\
<block type="math_modulo"></block>\n\
</category>\n\\n\
<category name="Texte">\n\\n\\n\
<block type="text_print"></block>\n\
<block type="text_prompt_ext"><value name="TEXT"><block type="text"></block></value></block>\n\\n\\n\
<block type="text"></block>\n\\n\\n\
<block type="line_return"></block>\n\\n\
<block type="text_join"></block>\n\
<block type="text_append"></block>\n\
<block type="text_length"></block><block type="text_isEmpty"></block>\n\
</category>\n\
<category name="Listes">\n\
<block type="lists_create_empty"></block>\n\
<block type="lists_create_with"></block>\n\
<block type="lists_length"></block><block type="lists_isEmpty"></block>\n\
<block type="lists_indexOf"><value name="VALUE">\n\
<block type="variables_get"><field name="VAR">liste</field></block></value></block>\n\\n\
<block type="tableau"></block>\n\\n\
<block type="tableau_ajout"></block>\n\\n\
<block type="list_removeitem"></block>\n\
</category>\n\\n\
<category name="Fonctions" custom="PROCEDURE"></category>\n\\n\\n\
<category name="Autres">\n\
<block type="text_print"><value name="TEXT"><block type="text"></block></value></block>\n\\n\\n\\n\
<block type="text_print"><value name="TEXT"><block type="text_join"></block></value></block>\n\\n\\n\\n\
<block type="catch_time"></block>\n\\n\\n\
<block type="math_change"><value name="DELTA">\n\<block type="math_number"><field name="NUM">1</field></block></value></block>\n\\n\
</category>\n\\n\
</xml>';
};
