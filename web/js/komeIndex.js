// JavaScript komeIndex.js

function komeIndex(){
	var komeIndexSetHTML = '';

	//以下は<div id="komeIndexSet">の中身
		komeIndexSetHTML += '		<table class="linkIndex">';
		komeIndexSetHTML += '			<tr><th colspan="3"><img src="images/komeList_index.gif"></th></tr>';
		komeIndexSetHTML += '			<tr>';
		komeIndexSetHTML += '				<td><a href="kome_jutaku.html"><span>&raquo;</span>受託会員</a></td>';
		komeIndexSetHTML += '				<td><a href="kome_youin.html"><span>&raquo;</span>価格変動要因（指標一覧）</a></td>';
		komeIndexSetHTML += '				<td><a href="kome_weather.html"><span>&raquo;</span>農業気象速報等</a></td>';
		komeIndexSetHTML += '			</tr>';
		komeIndexSetHTML += '			<tr>';
		komeIndexSetHTML += '				<td><a href="efp.html"><span>&raquo;</span>EFP取引(現物取引と先物取引の交換)</a></td>';
		komeIndexSetHTML += '				<td><a href="kome_study.html"><span>&raquo;</span>堂島先物塾</a></td>';
		komeIndexSetHTML += '				<td><a href="kome_report.html"><span>&raquo;</span>コメ先物取引レポート</a></td>';
		komeIndexSetHTML += '			</tr>';
		komeIndexSetHTML += '			<tr>';
		komeIndexSetHTML += '				<td><a href="kome_panf.html"><span>&raquo;</span>コメ関係本所刊行物</a></td>';
		komeIndexSetHTML += '				<td><a href="kome_keimo.html"><span>&raquo;</span>イベント情報</a></td>';
		komeIndexSetHTML += '				<td><a href="kome_teian.html"><span>&raquo;</span>コメ先物市場試験上場事業のご案内</a></td>';
		komeIndexSetHTML += '			</tr>';
		komeIndexSetHTML += '			<tr>';
		komeIndexSetHTML += '				<td><a href="kome_sisu.html"><span>&raquo;</span>関西コメ指数（KRI）</a></td>';
		komeIndexSetHTML += '				<td><a href="kome_linkIndex.html"><span>&raquo;</span>コメ関連リンク集</a></td>';
		komeIndexSetHTML += '				<td><a href="seminar.html"><span>&raquo;</span>セミナー</a></td>';
		komeIndexSetHTML += '			</tr>';

		komeIndexSetHTML += '			<tr>';
		komeIndexSetHTML += '				<td><a href="movie.html"><span>&raquo;</span>動画</a></td>';
		komeIndexSetHTML += '				<td><a href="dojima_monthly.html"><span>&raquo;</span>堂島マンスリー速報</a></td>';
		komeIndexSetHTML += '				<td></td>';
		komeIndexSetHTML += '			</tr>';




		komeIndexSetHTML += '		</table>';
		komeIndexSetHTML += '		<table class="linkIndex">';
		komeIndexSetHTML += '			<tr><th colspan="3">▼その他のカテゴリ内の情報</th></tr>';
		komeIndexSetHTML += '			<tr>';
		komeIndexSetHTML += '				<td><a href="../yoko/yoko.html"><span>&raquo;</span>取引要綱</a></td>';
		komeIndexSetHTML += '				<td><a href="../annai/rate_rice_t.html"><span>&raquo;</span>調整表</a></td>';
		komeIndexSetHTML += '				<td>&nbsp;</td>';
		komeIndexSetHTML += '			</tr>';
		komeIndexSetHTML += '		</table>';
	//<div id="komeIndexSet">の中身はここまで
	
	document.getElementById('komeIndexSet').innerHTML = komeIndexSetHTML;

}