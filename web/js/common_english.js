/* common_english.js */

function englishGNB(){

	var file_url = location.href;
	file_url = file_url.substring(file_url.lastIndexOf("/")+1,file_url.length);
	
	var gnbHTML = '';
	//à»â∫ÇÕ<div id="gnbSet">ÇÃíÜêg
	gnbHTML += '';
	gnbHTML += '<table id="gnb" cellspacing="0">';
	
	if(file_url =="index.html"){
		gnbHTML += '	<tr><td><a href="../english/index.html" class="selected">Profile</a></td></tr>';
	}else{
		gnbHTML += '	<tr><td><a id="gnbList1" href="../english/index.html">Profile</a></td></tr>';
	}
	
	if(file_url =="commodities.html"){
		gnbHTML += '	<tr><td><a id="gnbList2" href="../english/commodities.html" class="selected">Listed Commodities</a></td></tr>';
	}else{
		gnbHTML += '	<tr><td><a id="gnbList2" href="../english/commodities.html">Listed Commodities</a></td></tr>';
	}
	
	if(file_url =="memberList.html"){
		gnbHTML += '	<tr><td><a id="gnbList3" href="../english/memberList.html" class="selected">List of FCM</a></td></tr>';
	}else{
		gnbHTML += '	<tr><td><a id="gnbList3" href="../english/memberList.html">List of FCM</a></td></tr>';
	}
	
	if(file_url =="dealing.html"){
		gnbHTML += '	<tr><td><a id="gnbList4" href="../english/dealing.html" class="selected">Contract Specifications</a></td></tr>';
	}else{
		gnbHTML += '	<tr><td><a id="gnbList4" href="../english/dealing.html">Contract Specifications</a></td></tr>';
	}
	
	if(file_url =="eng_price_rice_t.html" || file_url =="eng_price_rice_o.html" || file_url =="eng_price_corn.html" || file_url =="eng_price_soy.html" || file_url =="eng_price_azuki.html" || file_url =="eng_price_corn75.html" || file_url =="eng_price_shrimp.html" || file_url =="eng_price_suger.html"){
		gnbHTML += '	<tr><td><a id="gnbList5" href="../market/eng_price_rice_t.html" class="selected">Market Price</a></td></tr>';
	}else{
		gnbHTML += '	<tr><td><a id="gnbList5" href="../market/eng_price_rice_t.html">Market Price</a></td></tr>';
	}
	
	if(file_url =="bei.html"){
		gnbHTML += '	<tr><td><a id="gnbList6" href="../english/bei.html" class="selected">Bio Energy Index</a></td></tr>';
	}else{
		gnbHTML += '	<tr><td><a id="gnbList6" href="../english/bei.html">Bio Energy Index</a></td></tr>';
	}
	
	gnbHTML += '	<tr><td><a href="mailto:ode-1@ode.or.jp?Subject=From foreign country">E-mail</a></td></tr>';
	gnbHTML += '	<tr><td id="logo"><a href="../index.html"><img src="../comimg/logo.gif"><br>(Japanese)</a></td></tr>';
	gnbHTML += '</table>';
	//<div id="gnbSet">ÇÃíÜêgÇÕÇ±Ç±Ç‹Ç≈
	document.getElementById('gnbSet').innerHTML = gnbHTML;
	
}