// JavaScript komeIndex.js

function komeIndex(){
	var komeIndexSetHTML = '';

	//�ȉ���<div id="komeIndexSet">�̒��g
		komeIndexSetHTML += '		<table class="linkIndex">';
		komeIndexSetHTML += '			<tr><th colspan="3"><img src="images/komeList_index.gif"></th></tr>';
		komeIndexSetHTML += '			<tr>';
		komeIndexSetHTML += '				<td><a href="kome_jutaku.html"><span>&raquo;</span>������</a></td>';
		komeIndexSetHTML += '				<td><a href="kome_youin.html"><span>&raquo;</span>���i�ϓ��v���i�w�W�ꗗ�j</a></td>';
		komeIndexSetHTML += '				<td><a href="kome_weather.html"><span>&raquo;</span>�_�ƋC�ۑ���</a></td>';
		komeIndexSetHTML += '			</tr>';
		komeIndexSetHTML += '			<tr>';
		komeIndexSetHTML += '				<td><a href="efp.html"><span>&raquo;</span>EFP���(��������Ɛ敨����̌���)</a></td>';
		komeIndexSetHTML += '				<td><a href="kome_study.html"><span>&raquo;</span>�����敨�m</a></td>';
		komeIndexSetHTML += '				<td><a href="kome_report.html"><span>&raquo;</span>�R���敨������|�[�g</a></td>';
		komeIndexSetHTML += '			</tr>';
		komeIndexSetHTML += '			<tr>';
		komeIndexSetHTML += '				<td><a href="kome_panf.html"><span>&raquo;</span>�R���֌W�{�����s��</a></td>';
		komeIndexSetHTML += '				<td><a href="kome_keimo.html"><span>&raquo;</span>�C�x���g���</a></td>';
		komeIndexSetHTML += '				<td><a href="kome_teian.html"><span>&raquo;</span>�R���敨�s�ꎎ����ꎖ�Ƃ̂��ē�</a></td>';
		komeIndexSetHTML += '			</tr>';
		komeIndexSetHTML += '			<tr>';
		komeIndexSetHTML += '				<td><a href="kome_sisu.html"><span>&raquo;</span>�֐��R���w���iKRI�j</a></td>';
		komeIndexSetHTML += '				<td><a href="kome_linkIndex.html"><span>&raquo;</span>�R���֘A�����N�W</a></td>';
		komeIndexSetHTML += '				<td><a href="seminar.html"><span>&raquo;</span>�Z�~�i�[</a></td>';
		komeIndexSetHTML += '			</tr>';

		komeIndexSetHTML += '			<tr>';
		komeIndexSetHTML += '				<td><a href="movie.html"><span>&raquo;</span>����</a></td>';
		komeIndexSetHTML += '				<td><a href="dojima_monthly.html"><span>&raquo;</span>�����}���X���[����</a></td>';
		komeIndexSetHTML += '				<td></td>';
		komeIndexSetHTML += '			</tr>';




		komeIndexSetHTML += '		</table>';
		komeIndexSetHTML += '		<table class="linkIndex">';
		komeIndexSetHTML += '			<tr><th colspan="3">�����̑��̃J�e�S�����̏��</th></tr>';
		komeIndexSetHTML += '			<tr>';
		komeIndexSetHTML += '				<td><a href="../yoko/yoko.html"><span>&raquo;</span>����v�j</a></td>';
		komeIndexSetHTML += '				<td><a href="../annai/rate_rice_t.html"><span>&raquo;</span>�����\</a></td>';
		komeIndexSetHTML += '				<td>&nbsp;</td>';
		komeIndexSetHTML += '			</tr>';
		komeIndexSetHTML += '		</table>';
	//<div id="komeIndexSet">�̒��g�͂����܂�
	
	document.getElementById('komeIndexSet').innerHTML = komeIndexSetHTML;

}