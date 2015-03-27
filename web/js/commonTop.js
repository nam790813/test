// commonTop.js

function homeHeader(){
	var targetNode = document.getElementById('noJS');
	targetNode.parentNode.removeChild(targetNode);
	
	var headerHTML = '';
	//以下は<div id="header">の中身
	headerHTML += '	<div id="headerTop"></div>';
	headerHTML += '	<div id="pnbArea">';	
	headerHTML += '		<table cellspacing="0" sellpadding="0" id="pnb" border="0">';
	headerHTML += '			<tr>';
	headerHTML += '				<th id="pnbHome" rowspan="2"><a href="index.html">大阪堂島商品取引所</a></th>';
	headerHTML += '				<td class="page1"><a onclick="contactODE()">お問い合わせ</a></td>';
	headerHTML += '				<td class="page1"><a href="basic/privacy.html">個人情報保護</a></td>';
	headerHTML += '				<td class="page1"><a href="member/index.html">会員専用ページ</a></td>';
	headerHTML += '				<td id="googleSearch" rowspan="2">';
	headerHTML += '					<form method="get" action="http://www.google.co.jp/search">';
	headerHTML += '						<input id="googleSearchButton" type="submit" name="btnG" value="サーチ">';
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
	headerHTML += '				<td class="page2"><a href="basic/links.html">関連リンク</a></td>';
	headerHTML += '				<td class="page2"><a href="basic/menseki.html">免責事項</a></td>';
	headerHTML += '				<td class="page2"><a href="english/index.html">English Page</a></td>';
	headerHTML += '			</tr>';
	headerHTML += '		</table>';
	headerHTML += '	</div>';
	headerHTML += '	<div id="gnbArea">';
	headerHTML += '		<ul id="gnb">';
	headerHTML += '			<li class="vBarSide"></li>';
	headerHTML += '			<li id="gnbSp" class="category">上場商品';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="market/price_rice_t.html">相場表</a></li>';
	headerHTML += '					<li><a href="market/chart.html">チャート</a></li>';
	headerHTML += '					<li><a href="market/his_index.html">ヒストリカルデータ</a></li>';
	headerHTML += '					<li><a href="annai/rate_rice_t.html">格付表</a></li>';
	headerHTML += '					<li><a href="yoko/schedule_index.html">取引所業務日程</a></li>';
	headerHTML += '					<li><a href="yoko/genschedule_index.html">日程一覧表</a></li>';
	headerHTML += '					<li><a href="annai/products.html">上場商品のご紹介</a></li>';
	headerHTML += '					<li><a href="yoko/tachiai.html">立会時刻</a></li>';
	headerHTML += '					<li><a href="other/kome.html">コメ先物取引情報室</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb1" class="category">商品先物取引ガイド';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="guide/about.html">商品先物取引について</a></li>';
	headerHTML += '					<li><a href="guide/start.html">商品先物取引をはじめてみよう</a></li>';
	headerHTML += '					<li><a href="guide/itakuhogo.html">委託者保護制度について</a></li>';
	headerHTML += '					<li><a href="guide/words.html"">先物取引用語集</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb2" class="category">取引所案内';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="annai/outline.html">取引所概要</a></li>';
	headerHTML += '					<li><a href="annai/kinou.html">取引所の機能</a></li>';
	headerHTML += '					<li><a href="annai/system.html">取引所の仕組み</a></li>';
	headerHTML += '					<li><a href="annai/products.html">上場商品のご紹介</a></li>';
	headerHTML += '					<li><a href="annai/memberList.html">会員名簿</a></li>';
	headerHTML += '					<li><a href="annai/teikan_index.html">定款・諸規定</a></li>';
	headerHTML += '					<li><a href="annai/souko_farm.html">指定倉庫一覧</a></li>';
	headerHTML += '					<li><a href="annai/rate_rice_t.html">格付表</a></li>';
	headerHTML += '					<li><a href="annai/koukoku_index.html">公告</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb3" class="category">取引要項';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="yoko/schedule_index.html">取引所業務日程</a></li>';
	headerHTML += '					<li><a href="yoko/genschedule_index.html">日程一覧表</a></li>';
	headerHTML += '					<li><a href="yoko/tachiai.html">立会時刻</a></li>';
	headerHTML += '					<li><a href="yoko/nehaba.html">制限幅</a></li>';
	headerHTML += '					<li><a href="yoko/zaiko.html">在庫発表</a></li>';
	headerHTML += '					<li><a href="yoko/delivery.html">受渡明細</a></li>';
	headerHTML += '					<li><a href="yoko/yoko.html">取引要綱</a></li>';
	headerHTML += '					<li><a href="yoko/calc.html">指数値算出方法</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb4" class="category">相場情報';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="market/price_rice_t.html">相場表</a></li>';
	headerHTML += '					<li><a href="market/chart.html">チャート</a></li>';
	headerHTML += '					<li><a href="nippou/index.html">取引所日報メニュー</a></li>';
	headerHTML += '					<li><a href="market/his_index.html">ヒストリカルデータ</a></li>';
	headerHTML += '					<li><a href="market/shisu.html">指数値</a></li>';
	headerHTML += '					<li><a href="market/genbutsu.html">現物価格</a></li>';
	headerHTML += '					<li><a href="market/hendou.html">価格変動要因</a></li>';
	headerHTML += '					<li><a href="market/data.html">取引商品関連データ</a></li>';
	headerHTML += '					<li><a href="market/kaigai_links.html">海外市場商品情報</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb5" class="category">その他';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="other/kome.html">コメ先物取引情報室</a></li>';
	headerHTML += '					<li><a href="NextSystem/index.html">堂島コメックス資料室</a></li>';
	headerHTML += '					<li><a href="other/ifij.html">輸入食料指数</a></li>';
	headerHTML += '					<li><a href="other/bei.html">バイオエネルギー指数</a></li>';
	headerHTML += '					<li><a href="other/kome_sisu.html">関西コメ指数</a></li>';
	headerHTML += '					<li><a href="https://www.facebook.com/ricefutures" tartget="_blank">公式 Facebook</a></li>';
	headerHTML += '					<li><a href="other/kome_twitter.html">公式 Twitter</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBarSide"></li>';
	headerHTML += '		</ul>';
	headerHTML += '	</div>';
	//<div id="header">の中身はここまで
	document.getElementById('header').innerHTML = headerHTML;
	
	var footerHTML;
	//以下は<div id="footer">の中身
	footerHTML = '	<table id="siteMap" cellspacing="0">';
	footerHTML += '		<tr id="category">';
	footerHTML += '			<td id="lineSP">';
	footerHTML += '				<li class="categoryTop">上場商品</li>';
	footerHTML += '				<li><a href="market/price_rice_t.html">相場表</a></li>';
	footerHTML += '				<li><a href="market/chart.html">チャート</a></li>';
	footerHTML += '				<li><a href="market/his_index.html">ヒストリカルデータ</a></li>';
	footerHTML += '				<li><a href="annai/rate_rice_t.html">格付表</a></li>';
	footerHTML += '				<li><a href="yoko/schedule_index.html">取引所業務日程</a></li>';
	footerHTML += '				<li><a href="yoko/genschedule_index.html">日程一覧表</a></li>';
	footerHTML += '				<li><a href="annai/products.html">上場商品のご紹介</a></li>';
	footerHTML += '				<li><a href="yoko/tachiai.html">立会時刻</a></li>';
	footerHTML += '				<li><a href="other/kome.html">コメ先物取引情報室</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line1">';
	footerHTML += '				<li class="categoryTop">商品先物取引ガイド</li>';
	footerHTML += '				<li><a href="guide/about.html">商品先物取引について</a></li>';
	footerHTML += '				<li><a href="guide/start.html">商品先物取引をはじめてみよう</a></li>';
	footerHTML += '				<li><a href="guide/itakuhogo.html">委託者保護制度について</a></li>';
	footerHTML += '				<li><a href="guide/words.html">先物取引用語集</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line2">';
	footerHTML += '				<li class="categoryTop">取引所案内</li>';
	footerHTML += '				<li><a href="annai/outline.html">取引所概要</a></li>';
	footerHTML += '				<li><a href="annai/kinou.html">取引所の機能</a></li>';
	footerHTML += '				<li><a href="annai/system.html">取引所の仕組み</a></li>';
	footerHTML += '				<li><a href="annai/products.html">上場商品のご紹介</a></li>';
	footerHTML += '				<li><a href="annai/memberList.html">会員名簿</a></li>';
	footerHTML += '				<li><a href="annai/teikan_index.html">定款・諸規定</a></li>';
	footerHTML += '				<li><a href="annai/souko_farm.html">指定倉庫一覧</a></li>';
	footerHTML += '				<li><a href="annai/rate_rice_t.html">格付表</a></li>';
	footerHTML += '				<li><a href="annai/koukoku_index.html">公告</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line3">';
	footerHTML += '				<li class="categoryTop">取引要綱</li>';
	footerHTML += '				<li><a href="yoko/schedule_index.html">取引所業務日程</a></li>';
	footerHTML += '				<li><a href="yoko/genschedule_index.html">日程一覧表</a></li>';
	footerHTML += '				<li><a href="yoko/tachiai.html">立会時刻</a></li>';
	footerHTML += '				<li><a href="yoko/nehaba.html">制限幅</a></li>';
	footerHTML += '				<li><a href="yoko/zaiko.html">在庫発表</a></li>';
	footerHTML += '				<li><a href="yoko/delivery.html">受渡明細</a></li>';
	footerHTML += '				<li><a href="yoko/yoko.html">取引要綱</a></li>';
	footerHTML += '				<li><a href="yoko/calc.html">指数値算出方法</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line4">';
	footerHTML += '				<li class="categoryTop">相場情報</li>';
	footerHTML += '				<li><a href="market/price_rice_t.html">相場表</a></li>';
	footerHTML += '				<li><a href="market/chart.html">チャート</a></li>';
	footerHTML += '				<li><a href="nippou/index.html">取引所日報メニュー</a></li>';
	footerHTML += '				<li><a href="market/his_index.html">ヒストリカルデータ</a></li>';
	footerHTML += '				<li><a href="market/shisu.html">指数値</a></li>';
	footerHTML += '				<li><a href="market/genbutsu.html">現物価格</a></li>';
	footerHTML += '				<li><a href="market/hendou.html">価格変動要因</a></li>';
	footerHTML += '				<li><a href="market/data.html">取引商品関連データ</a></li>';
	footerHTML += '				<li><a href="market/kaigai_links.html">海外市場商品情報</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line5">';
	footerHTML += '				<li class="categoryTop">その他</li>';
	footerHTML += '				<li><a href="other/kome.html">コメ先物取引情報室</a></li>';
	footerHTML += '				<li><a href="NextSystem/index.html">堂島コメックス資料室</a></li>';
	footerHTML += '				<li><a href="other/ifij.html">輸入食料指数</a></li>';
	footerHTML += '				<li><a href="other/bei.html">バイオエネルギー指数</a></li>';
	footerHTML += '				<li><a href="other/kome_sisu.html">関西コメ指数</a></li>';
	footerHTML += '				<li><a href="https://www.facebook.com/ricefutures" tartget="_blank">公式Facebook</a></li>';
	footerHTML += '				<li><a href="other/kome_twitter.html">公式Twitter</a></li>';
	footerHTML += '			</td>';
	footerHTML += '		</tr>';
	footerHTML += '		<tr id="other">';
	footerHTML += '			<td><li><a href="" onclick="contactODE()">お問い合わせ</a></li></td>';
	footerHTML += '			<td><li><a href="basic/links.html">関連リンク</a></li></td>';
	footerHTML += '			<td><li><a href="basic/privacy.html">個人情報保護</a></li></td>';
	footerHTML += '			<td><li><a href="basic/menseki.html">免責事項</a></li></td>';
	footerHTML += '			<td><li><a href="member/index.html">会員専用ページ</a></li></td>';
	footerHTML += '			<td><li><a href="english/index.html">English Page</a></li></td>';
	footerHTML += '		</tr>';
	footerHTML += '	</table>';
	footerHTML += '	<div id="copyright">';
	footerHTML += '		<table>';
	footerHTML += '			<tr><td>';
	footerHTML += '				<a onclick="onSystemRecommended(); return false;" >推奨環境の確認はこちらより</a>';
	footerHTML += '				<p>Copyright(C)　2013- Osaka Dojima Commodity Exchange . All Right Reserved , </p>';
	footerHTML += '			</tr></td>';
	footerHTML += '		</table>';
	footerHTML += '	</div>';
	//<div id="footer">の中身はここまで
	document.getElementById('footer').innerHTML = footerHTML;
	
	var sideBannerHTML;
	//以下は<div id="sideBanner">の中身
	sideBannerHTML = '	<ul id="banner">';
	sideBannerHTML += '		<li id="rice_info">';
	sideBannerHTML += '			<a href="other/kome.html"><img src="images/banner_infoRice2.jpg" alt="コメ先物取引情報室"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="doujima_juku">';
	sideBannerHTML += '			<a href="other/kome_study.html"><img src="images/banner_lesson1.jpg" alt="堂島先物塾"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="minkabu">';
	sideBannerHTML += '			<a href="http://cx.minkabu.jp/" target="_blank"><img src="images/banner_mincomo.gif" alt="みんなのコモディティ"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="komex">';
	sideBannerHTML += '			<a href="NextSystem/index.html"><img src="images/banner_komex.jpg" alt="堂島コメックス資料室"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="other/kome_youin.html"><img src="images/banner_youin.gif" alt="コメの変動要因"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="other/kome_report.html"><img src="images/banner_report.gif" alt="コメのレポート"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="other/ifij.html"><img src="images/banner_ifij.gif" alt="IFIJ(輸入食料指数)"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="other/bei.html"><img src="images/banner_bioEnergy.gif" alt="BioEnergy"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="http://www.jcfia.gr.jp/img/cx_seminar/cx17_flier.pdf" target="_blank"><img src="images/banner_cxkouenkai17.jpg" alt="第17回CX市況講演会"></a>';
	sideBannerHTML += '		</li>';
        sideBannerHTML += '		<br>';
	sideBannerHTML += '		<li id=""maff>';
	sideBannerHTML += '			<a href="http://www.maff.go.jp/j/shokusan/syoutori/dealing/kanshi.html" target="_blank"><img src="images/banner_maff.gif" alt="農林水産省 不公正取引情報受付窓口"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="http://www.jcch.co.jp/span/span01.html" target="_blank"><img src="images/banner_span.jpg" alt="SPAN証拠金"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="http://www.komenet.jp/" target="_blank"><img src="images/banner_komenet.gif" alt="米ネット"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="http://www.jcfia.gr.jp/sangyo/nattoku_hedge/jcfia/index.htm" target="_blank"><img src="images/banner_jcfia.gif" alt="リスクヘッジ"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="i/index.html"><img src="images/spSite.jpg" alt="携帯サイト"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '	</ul>';
	//<div id="sideBanner">の中身はここまで
	document.getElementById('sideBanner').innerHTML = sideBannerHTML;
	
}

//お問い合わせフォームのページを新規ウィンドウで生成
function contactODE() { //v2.0
  window.open('https://ode.or.jp/cgi-bin/contact/','contact','menubar=yes,scrollbars=yes,resizable=yes,width=620,height=700');
}

//推奨環境をアラートで表示
function onSystemRecommended() {
	var info = "大阪堂島商品取引所ホームページでは、より安全で快適にご利用いただくために下記ブラウザにて表示確認・動作検証を実施しております。\n（";
	info += "2013年2月12日" + "現在）";
	var browser = "\n\n" + "Internet Explorer : バージョン 8 以降";
	browser += "\n" + "Google Chrome : バージョン 23 以降";
	browser += "\n" + "Mozilla Firefox : バージョン 16 以降";
	browser += "\n" + "Apple Safari : バージョン 4 以降";
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