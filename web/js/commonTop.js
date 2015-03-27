// commonTop.js

function homeHeader(){
	var targetNode = document.getElementById('noJS');
	targetNode.parentNode.removeChild(targetNode);
	
	var headerHTML = '';
	//�ȉ���<div id="header">�̒��g
	headerHTML += '	<div id="headerTop"></div>';
	headerHTML += '	<div id="pnbArea">';	
	headerHTML += '		<table cellspacing="0" sellpadding="0" id="pnb" border="0">';
	headerHTML += '			<tr>';
	headerHTML += '				<th id="pnbHome" rowspan="2"><a href="index.html">��㓰�����i�����</a></th>';
	headerHTML += '				<td class="page1"><a onclick="contactODE()">���₢���킹</a></td>';
	headerHTML += '				<td class="page1"><a href="basic/privacy.html">�l���ی�</a></td>';
	headerHTML += '				<td class="page1"><a href="member/index.html">�����p�y�[�W</a></td>';
	headerHTML += '				<td id="googleSearch" rowspan="2">';
	headerHTML += '					<form method="get" action="http://www.google.co.jp/search">';
	headerHTML += '						<input id="googleSearchButton" type="submit" name="btnG" value="�T�[�`">';
	headerHTML += '						<input type="hidden" name="domains" value="http://ode.or.jp/">';
	headerHTML += '						<input type="text" id="googleSearchInput" name="q" size="16" maxlength="140" value="">';
	headerHTML += '						<input type="hidden" name="ie" value="Shift_JIS">';
	headerHTML += '						<input type="hidden" name="oe" value="Shift_JIS">';
	headerHTML += '						<input type="hidden" name="hl" value="ja">';
	headerHTML += '						<input type="hidden" name="as_sitesearch" value="http://ode.or.jp/">';
	headerHTML += '					</form>';
	headerHTML += '					<img src="images/googleIcon_1.gif">';
	headerHTML += '				</td>';
	headerHTML += '			</tr><tr>';
	headerHTML += '				<td class="page2"><a href="basic/links.html">�֘A�����N</a></td>';
	headerHTML += '				<td class="page2"><a href="basic/menseki.html">�Ɛӎ���</a></td>';
	headerHTML += '				<td class="page2"><a href="english/index.html">English Page</a></td>';
	headerHTML += '			</tr>';
	headerHTML += '		</table>';
	headerHTML += '	</div>';
	headerHTML += '	<div id="gnbArea">';
	headerHTML += '		<ul id="gnb">';
	headerHTML += '			<li class="vBarSide"></li>';
	headerHTML += '			<li id="gnbSp" class="category">��ꏤ�i';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="market/price_rice_t.html">����\</a></li>';
	headerHTML += '					<li><a href="market/chart.html">�`���[�g</a></li>';
	headerHTML += '					<li><a href="market/his_index.html">�q�X�g���J���f�[�^</a></li>';
	headerHTML += '					<li><a href="annai/rate_rice_t.html">�i�t�\</a></li>';
	headerHTML += '					<li><a href="yoko/schedule_index.html">������Ɩ�����</a></li>';
	headerHTML += '					<li><a href="yoko/genschedule_index.html">�����ꗗ�\</a></li>';
	headerHTML += '					<li><a href="annai/products.html">��ꏤ�i�̂��Љ�</a></li>';
	headerHTML += '					<li><a href="yoko/tachiai.html">�����</a></li>';
	headerHTML += '					<li><a href="other/kome.html">�R���敨������</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb1" class="category">���i�敨����K�C�h';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="guide/about.html">���i�敨����ɂ���</a></li>';
	headerHTML += '					<li><a href="guide/start.html">���i�敨������͂��߂Ă݂悤</a></li>';
	headerHTML += '					<li><a href="guide/itakuhogo.html">�ϑ��ҕی쐧�x�ɂ���</a></li>';
	headerHTML += '					<li><a href="guide/words.html"">�敨����p��W</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb2" class="category">������ē�';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="annai/outline.html">������T�v</a></li>';
	headerHTML += '					<li><a href="annai/kinou.html">������̋@�\</a></li>';
	headerHTML += '					<li><a href="annai/system.html">������̎d�g��</a></li>';
	headerHTML += '					<li><a href="annai/products.html">��ꏤ�i�̂��Љ�</a></li>';
	headerHTML += '					<li><a href="annai/memberList.html">�������</a></li>';
	headerHTML += '					<li><a href="annai/teikan_index.html">�芼�E���K��</a></li>';
	headerHTML += '					<li><a href="annai/souko_farm.html">�w��q�Ɉꗗ</a></li>';
	headerHTML += '					<li><a href="annai/rate_rice_t.html">�i�t�\</a></li>';
	headerHTML += '					<li><a href="annai/koukoku_index.html">����</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb3" class="category">����v��';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="yoko/schedule_index.html">������Ɩ�����</a></li>';
	headerHTML += '					<li><a href="yoko/genschedule_index.html">�����ꗗ�\</a></li>';
	headerHTML += '					<li><a href="yoko/tachiai.html">�����</a></li>';
	headerHTML += '					<li><a href="yoko/nehaba.html">������</a></li>';
	headerHTML += '					<li><a href="yoko/zaiko.html">�݌ɔ��\</a></li>';
	headerHTML += '					<li><a href="yoko/delivery.html">��n����</a></li>';
	headerHTML += '					<li><a href="yoko/yoko.html">����v�j</a></li>';
	headerHTML += '					<li><a href="yoko/calc.html">�w���l�Z�o���@</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb4" class="category">������';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="market/price_rice_t.html">����\</a></li>';
	headerHTML += '					<li><a href="market/chart.html">�`���[�g</a></li>';
	headerHTML += '					<li><a href="nippou/index.html">��������񃁃j���[</a></li>';
	headerHTML += '					<li><a href="market/his_index.html">�q�X�g���J���f�[�^</a></li>';
	headerHTML += '					<li><a href="market/shisu.html">�w���l</a></li>';
	headerHTML += '					<li><a href="market/genbutsu.html">�������i</a></li>';
	headerHTML += '					<li><a href="market/hendou.html">���i�ϓ��v��</a></li>';
	headerHTML += '					<li><a href="market/data.html">������i�֘A�f�[�^</a></li>';
	headerHTML += '					<li><a href="market/kaigai_links.html">�C�O�s�ꏤ�i���</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb5" class="category">���̑�';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="other/kome.html">�R���敨������</a></li>';
	headerHTML += '					<li><a href="NextSystem/index.html">�����R���b�N�X������</a></li>';
	headerHTML += '					<li><a href="other/ifij.html">�A���H���w��</a></li>';
	headerHTML += '					<li><a href="other/bei.html">�o�C�I�G�l���M�[�w��</a></li>';
	headerHTML += '					<li><a href="other/kome_sisu.html">�֐��R���w��</a></li>';
	headerHTML += '					<li><a href="https://www.facebook.com/ricefutures" tartget="_blank">���� Facebook</a></li>';
	headerHTML += '					<li><a href="other/kome_twitter.html">���� Twitter</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBarSide"></li>';
	headerHTML += '		</ul>';
	headerHTML += '	</div>';
	//<div id="header">�̒��g�͂����܂�
	document.getElementById('header').innerHTML = headerHTML;
	
	var footerHTML;
	//�ȉ���<div id="footer">�̒��g
	footerHTML = '	<table id="siteMap" cellspacing="0">';
	footerHTML += '		<tr id="category">';
	footerHTML += '			<td id="lineSP">';
	footerHTML += '				<li class="categoryTop">��ꏤ�i</li>';
	footerHTML += '				<li><a href="market/price_rice_t.html">����\</a></li>';
	footerHTML += '				<li><a href="market/chart.html">�`���[�g</a></li>';
	footerHTML += '				<li><a href="market/his_index.html">�q�X�g���J���f�[�^</a></li>';
	footerHTML += '				<li><a href="annai/rate_rice_t.html">�i�t�\</a></li>';
	footerHTML += '				<li><a href="yoko/schedule_index.html">������Ɩ�����</a></li>';
	footerHTML += '				<li><a href="yoko/genschedule_index.html">�����ꗗ�\</a></li>';
	footerHTML += '				<li><a href="annai/products.html">��ꏤ�i�̂��Љ�</a></li>';
	footerHTML += '				<li><a href="yoko/tachiai.html">�����</a></li>';
	footerHTML += '				<li><a href="other/kome.html">�R���敨������</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line1">';
	footerHTML += '				<li class="categoryTop">���i�敨����K�C�h</li>';
	footerHTML += '				<li><a href="guide/about.html">���i�敨����ɂ���</a></li>';
	footerHTML += '				<li><a href="guide/start.html">���i�敨������͂��߂Ă݂悤</a></li>';
	footerHTML += '				<li><a href="guide/itakuhogo.html">�ϑ��ҕی쐧�x�ɂ���</a></li>';
	footerHTML += '				<li><a href="guide/words.html">�敨����p��W</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line2">';
	footerHTML += '				<li class="categoryTop">������ē�</li>';
	footerHTML += '				<li><a href="annai/outline.html">������T�v</a></li>';
	footerHTML += '				<li><a href="annai/kinou.html">������̋@�\</a></li>';
	footerHTML += '				<li><a href="annai/system.html">������̎d�g��</a></li>';
	footerHTML += '				<li><a href="annai/products.html">��ꏤ�i�̂��Љ�</a></li>';
	footerHTML += '				<li><a href="annai/memberList.html">�������</a></li>';
	footerHTML += '				<li><a href="annai/teikan_index.html">�芼�E���K��</a></li>';
	footerHTML += '				<li><a href="annai/souko_farm.html">�w��q�Ɉꗗ</a></li>';
	footerHTML += '				<li><a href="annai/rate_rice_t.html">�i�t�\</a></li>';
	footerHTML += '				<li><a href="annai/koukoku_index.html">����</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line3">';
	footerHTML += '				<li class="categoryTop">����v�j</li>';
	footerHTML += '				<li><a href="yoko/schedule_index.html">������Ɩ�����</a></li>';
	footerHTML += '				<li><a href="yoko/genschedule_index.html">�����ꗗ�\</a></li>';
	footerHTML += '				<li><a href="yoko/tachiai.html">�����</a></li>';
	footerHTML += '				<li><a href="yoko/nehaba.html">������</a></li>';
	footerHTML += '				<li><a href="yoko/zaiko.html">�݌ɔ��\</a></li>';
	footerHTML += '				<li><a href="yoko/delivery.html">��n����</a></li>';
	footerHTML += '				<li><a href="yoko/yoko.html">����v�j</a></li>';
	footerHTML += '				<li><a href="yoko/calc.html">�w���l�Z�o���@</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line4">';
	footerHTML += '				<li class="categoryTop">������</li>';
	footerHTML += '				<li><a href="market/price_rice_t.html">����\</a></li>';
	footerHTML += '				<li><a href="market/chart.html">�`���[�g</a></li>';
	footerHTML += '				<li><a href="nippou/index.html">��������񃁃j���[</a></li>';
	footerHTML += '				<li><a href="market/his_index.html">�q�X�g���J���f�[�^</a></li>';
	footerHTML += '				<li><a href="market/shisu.html">�w���l</a></li>';
	footerHTML += '				<li><a href="market/genbutsu.html">�������i</a></li>';
	footerHTML += '				<li><a href="market/hendou.html">���i�ϓ��v��</a></li>';
	footerHTML += '				<li><a href="market/data.html">������i�֘A�f�[�^</a></li>';
	footerHTML += '				<li><a href="market/kaigai_links.html">�C�O�s�ꏤ�i���</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line5">';
	footerHTML += '				<li class="categoryTop">���̑�</li>';
	footerHTML += '				<li><a href="other/kome.html">�R���敨������</a></li>';
	footerHTML += '				<li><a href="NextSystem/index.html">�����R���b�N�X������</a></li>';
	footerHTML += '				<li><a href="other/ifij.html">�A���H���w��</a></li>';
	footerHTML += '				<li><a href="other/bei.html">�o�C�I�G�l���M�[�w��</a></li>';
	footerHTML += '				<li><a href="other/kome_sisu.html">�֐��R���w��</a></li>';
	footerHTML += '				<li><a href="https://www.facebook.com/ricefutures" tartget="_blank">����Facebook</a></li>';
	footerHTML += '				<li><a href="other/kome_twitter.html">����Twitter</a></li>';
	footerHTML += '			</td>';
	footerHTML += '		</tr>';
	footerHTML += '		<tr id="other">';
	footerHTML += '			<td><li><a href="" onclick="contactODE()">���₢���킹</a></li></td>';
	footerHTML += '			<td><li><a href="basic/links.html">�֘A�����N</a></li></td>';
	footerHTML += '			<td><li><a href="basic/privacy.html">�l���ی�</a></li></td>';
	footerHTML += '			<td><li><a href="basic/menseki.html">�Ɛӎ���</a></li></td>';
	footerHTML += '			<td><li><a href="member/index.html">�����p�y�[�W</a></li></td>';
	footerHTML += '			<td><li><a href="english/index.html">English Page</a></li></td>';
	footerHTML += '		</tr>';
	footerHTML += '	</table>';
	footerHTML += '	<div id="copyright">';
	footerHTML += '		<table>';
	footerHTML += '			<tr><td>';
	footerHTML += '				<a onclick="onSystemRecommended(); return false;" >�������̊m�F�͂�������</a>';
	footerHTML += '				<p>Copyright(C)�@2013- Osaka Dojima Commodity Exchange . All Right Reserved , </p>';
	footerHTML += '			</tr></td>';
	footerHTML += '		</table>';
	footerHTML += '	</div>';
	//<div id="footer">�̒��g�͂����܂�
	document.getElementById('footer').innerHTML = footerHTML;
	
	var sideBannerHTML;
	//�ȉ���<div id="sideBanner">�̒��g
	sideBannerHTML = '	<ul id="banner">';
	sideBannerHTML += '		<li id="rice_info">';
	sideBannerHTML += '			<a href="other/kome.html"><img src="images/banner_infoRice2.jpg" alt="�R���敨������"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="doujima_juku">';
	sideBannerHTML += '			<a href="other/kome_study.html"><img src="images/banner_lesson1.jpg" alt="�����敨�m"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="minkabu">';
	sideBannerHTML += '			<a href="http://cx.minkabu.jp/" target="_blank"><img src="images/banner_mincomo.gif" alt="�݂�Ȃ̃R���f�B�e�B"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="komex">';
	sideBannerHTML += '			<a href="NextSystem/index.html"><img src="images/banner_komex.jpg" alt="�����R���b�N�X������"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="other/kome_youin.html"><img src="images/banner_youin.gif" alt="�R���̕ϓ��v��"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="other/kome_report.html"><img src="images/banner_report.gif" alt="�R���̃��|�[�g"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="other/ifij.html"><img src="images/banner_ifij.gif" alt="IFIJ(�A���H���w��)"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="other/bei.html"><img src="images/banner_bioEnergy.gif" alt="BioEnergy"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="http://www.jcfia.gr.jp/img/cx_seminar/cx17_flier.pdf" target="_blank"><img src="images/banner_cxkouenkai17.jpg" alt="��17��CX�s���u����"></a>';
	sideBannerHTML += '		</li>';
        sideBannerHTML += '		<br>';
	sideBannerHTML += '		<li id=""maff>';
	sideBannerHTML += '			<a href="http://www.maff.go.jp/j/shokusan/syoutori/dealing/kanshi.html" target="_blank"><img src="images/banner_maff.gif" alt="�_�ѐ��Y�� �s�����������t����"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="http://www.jcch.co.jp/span/span01.html" target="_blank"><img src="images/banner_span.jpg" alt="SPAN�؋���"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="http://www.komenet.jp/" target="_blank"><img src="images/banner_komenet.gif" alt="�ăl�b�g"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="http://www.jcfia.gr.jp/sangyo/nattoku_hedge/jcfia/index.htm" target="_blank"><img src="images/banner_jcfia.gif" alt="���X�N�w�b�W"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="i/index.html"><img src="images/spSite.jpg" alt="�g�уT�C�g"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '	</ul>';
	//<div id="sideBanner">�̒��g�͂����܂�
	document.getElementById('sideBanner').innerHTML = sideBannerHTML;
	
}

//���₢���킹�t�H�[���̃y�[�W��V�K�E�B���h�E�Ő���
function contactODE() { //v2.0
  window.open('https://ode.or.jp/cgi-bin/contact/','contact','menubar=yes,scrollbars=yes,resizable=yes,width=620,height=700');
}

//���������A���[�g�ŕ\��
function onSystemRecommended() {
	var info = "��㓰�����i������z�[���y�[�W�ł́A�����S�ŉ��K�ɂ����p�����������߂ɉ��L�u���E�U�ɂĕ\���m�F�E���쌟�؂����{���Ă���܂��B\n�i";
	info += "2013�N2��12��" + "���݁j";
	var browser = "\n\n" + "Internet Explorer : �o�[�W���� 8 �ȍ~";
	browser += "\n" + "Google Chrome : �o�[�W���� 23 �ȍ~";
	browser += "\n" + "Mozilla Firefox : �o�[�W���� 16 �ȍ~";
	browser += "\n" + "Apple Safari : �o�[�W���� 4 �ȍ~";
	alert(info + browser);
}

/*

		<ul id="gnb">
			<li class="category"><img src="images/gnb_guide_out.gif" /></li>
			<li class="category"><img src="images/gnb_institution_out.gif" /></li>
			<li class="category"><img src="images/gnb_transaction_out.gif" /></li>
			<li class="category"><img src="images/gnb_rate_out.gif" /></li>
			<li class="category"><img src="images/gnb_other_out.gif" /></li>
		</ul>
		
*/