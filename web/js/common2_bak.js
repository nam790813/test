// common2.js

function homeHeader(){
	var targetNode = document.getElementById('noJS');
	targetNode.parentNode.removeChild(targetNode);
	
	var headerHTML = '';
	//以下は<div id="header">の中身
	headerHTML += '	<div id="headerTop"></div>';
	headerHTML += '	<div id="pnbArea">';
	headerHTML += '		<table cellspacing="0" sellpadding="0" id="pnb" border="0">';
	headerHTML += '			<tr>';
	headerHTML += '				<th id="pnbHome" rowspan="2"><a href="../index.html">大阪堂島商品取引所</a></th>';
	headerHTML += '				<td class="page1"><a onclick="contactODE()">お問い合わせ</a></td>';
	headerHTML += '				<td class="page1"><a href="../basic/privacy.html">個人情報保護</a></td>';
	headerHTML += '				<td class="page1"><a href="../member/index.html">会員専用ページ</a></td>';
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
	headerHTML += '					<img src="../images/googleIcon_1.gif">';
	headerHTML += '				</td>';
	headerHTML += '			</tr><tr>';
	headerHTML += '				<td class="page2"><a href="../basic/links.html">関連リンク</a></td>';
	headerHTML += '				<td class="page2"><a href="../basic/menseki.html">免責事項</a></td>';
	headerHTML += '				<td class="page2"><a href="../english/index.html">English Page</a></td>';
	headerHTML += '			</tr>';
	headerHTML += '		</table>';
	headerHTML += '	</div>';
	headerHTML += '	<div id="gnbArea">';
	headerHTML += '		<ul id="gnb">';
	headerHTML += '			<li class="vBarSide"></li>';
	headerHTML += '			<li id="gnbSp" class="category">上場商品';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="../market/price_rice_t.html">相場表</a></li>';
	headerHTML += '					<li><a href="../market/chart.html">チャート</a></li>';
	headerHTML += '					<li><a href="../market/his_index.html">ヒストリカルデータ</a></li>';
	headerHTML += '					<li><a href="../annai/rate_rice_t.html">格付表</a></li>';
	headerHTML += '					<li><a href="../yoko/schedule_index.html">取引所業務日程</a></li>';
	headerHTML += '					<li><a href="../yoko/genschedule_index.html">日程一覧表</a></li>';
	headerHTML += '					<li><a href="../annai/products.html">上場商品のご紹介</a></li>';
	headerHTML += '					<li><a href="../yoko/tachiai.html">立会時刻</a></li>';
	headerHTML += '					<li><a href="../other/kome.html">コメ先物取引情報室</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb1" class="category">商品先物取引ガイド';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="../guide/about.html">商品先物取引について</a></li>';
	headerHTML += '					<li><a href="../guide/start.html">商品先物取引をはじめてみよう</a></li>';
	headerHTML += '					<li><a href="../guide/itakuhogo.html">委託者保護制度について</a></li>';
	headerHTML += '					<li><a href="../guide/words.html"">先物取引用語集</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb2" class="category">取引所案内';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="../annai/outline.html">取引所概要</a></li>';
	headerHTML += '					<li><a href="../annai/kinou.html">取引所の機能</a></li>';
	headerHTML += '					<li><a href="../annai/system.html">取引所の仕組み</a></li>';
	headerHTML += '					<li><a href="../annai/products.html">上場商品のご紹介</a></li>';
	headerHTML += '					<li><a href="../annai/memberList.html">会員名簿</a></li>';
	headerHTML += '					<li><a href="../annai/teikan_index.html">定款・諸規定</a></li>';
	headerHTML += '					<li><a href="../annai/souko_farm.html">指定倉庫一覧</a></li>';
	headerHTML += '					<li><a href="../annai/rate_rice_t.html">格付表</a></li>';
	headerHTML += '					<li><a href="../annai/koukoku_index.html">公告</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb3" class="category">取引要項';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="../yoko/schedule_index.html">取引所業務日程</a></li>';
	headerHTML += '					<li><a href="../yoko/genschedule_index.html">日程一覧表</a></li>';
	headerHTML += '					<li><a href="../yoko/tachiai.html">立会時刻</a></li>';
	headerHTML += '					<li><a href="../yoko/nehaba.html">制限幅</a></li>';
	headerHTML += '					<li><a href="../yoko/zaiko.html">在庫発表</a></li>';
	headerHTML += '					<li><a href="../yoko/delivery.html">受渡明細</a></li>';
	headerHTML += '					<li><a href="../yoko/yoko.html">取引要綱</a></li>';
	headerHTML += '					<li><a href="../yoko/calc.html">指数値算出方法</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb4" class="category">相場情報';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="../market/price_rice_t.html">相場表</a></li>';
	headerHTML += '					<li><a href="../market/chart.html">チャート</a></li>';
	headerHTML += '					<li><a href="../nippou/index.html">取引所日報メニュー</a></li>';
	headerHTML += '					<li><a href="../market/his_index.html">ヒストリカルデータ</a></li>';
	headerHTML += '					<li><a href="../market/shisu.html">指数値</a></li>';
	headerHTML += '					<li><a href="../market/genbutsu.html">現物価格</a></li>';
	headerHTML += '					<li><a href="../market/hendou.html">価格変動要因</a></li>';
	headerHTML += '					<li><a href="../market/data.html">取引商品関連データ</a></li>';
	headerHTML += '					<li><a href="../market/kaigai_links.html">海外市場商品情報</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBar"></li>';
	headerHTML += '			<li id="gnb5" class="category">その他';
	headerHTML += '				<ul>';
	headerHTML += '					<li><a href="../other/kome.html">コメ先物取引情報室</a></li>';
	headerHTML += '					<li><a href="../NextSystem/index.html">堂島コメックス資料室</a></li>';
	headerHTML += '					<li><a href="../other/ifij.html">輸入食料指数</a></li>';
	headerHTML += '					<li><a href="../other/bei.html">バイオエネルギー指数</a></li>';
	headerHTML += '					<li><a href="../other/kome_sisu.html">関西コメ指数</a></li>';
	headerHTML += '					<li><a href="https://www.facebook.com/ricefutures" tartget="_blank">公式 Facebook</a></li>';
	headerHTML += '					<li><a href="../other/kome_twitter.html">公式 Twitter</a></li>';
	headerHTML += '				</ul>';
	headerHTML += '			</li>';
	headerHTML += '			<li class="vBarSide"></li>';
	headerHTML += '		</ul>';
	headerHTML += '	</div>';
	//div id="header">の中身はここまで
	document.getElementById('header').innerHTML = headerHTML;
	
	var footerHTML;
	//以下は<div id="footer">の中身
	footerHTML = '	<table id="siteMap" cellspacing="0">';
	footerHTML += '		<tr id="category">';
	footerHTML += '			<td id="lineSP">';
	footerHTML += '				<li class="categoryTop">上場商品</li>';
	footerHTML += '				<li><a href="../market/price_rice_t.html">相場表</a></li>';
	footerHTML += '				<li><a href="../market/chart.html">チャート</a></li>';
	footerHTML += '				<li><a href="../market/his_index.html">ヒストリカルデータ</a></li>';
	footerHTML += '				<li><a href="../annai/rate_rice_t.html">格付表</a></li>';
	footerHTML += '				<li><a href="../yoko/schedule_index.html">取引所業務日程</a></li>';
	footerHTML += '				<li><a href="../yoko/genschedule_index.html">日程一覧表</a></li>';
	footerHTML += '				<li><a href="../annai/products.html">上場商品のご紹介</a></li>';
	footerHTML += '				<li><a href="../yoko/tachiai.html">立会時刻</a></li>';
	footerHTML += '				<li><a href="../other/kome.html">コメ先物取引情報室</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line1">';
	footerHTML += '				<li class="categoryTop">商品先物取引ガイド</li>';
	footerHTML += '				<li><a href="../guide/about.html">商品先物取引について</a></li>';
	footerHTML += '				<li><a href="../guide/start.html">商品先物取引をはじめてみよう</a></li>';
	footerHTML += '				<li><a href="../guide/itakuhogo.html">委託者保護制度について</a></li>';
	footerHTML += '				<li><a href="../guide/words.html">先物取引用語集</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line2">';
	footerHTML += '				<li class="categoryTop">取引所案内</li>';
	footerHTML += '				<li><a href="../annai/outline.html">取引所概要</a></li>';
	footerHTML += '				<li><a href="../annai/kinou.html">取引所の機能</a></li>';
	footerHTML += '				<li><a href="../annai/system.html">取引所の仕組み</a></li>';
	footerHTML += '				<li><a href="../annai/products.html">上場商品のご紹介</a></li>';
	footerHTML += '				<li><a href="../annai/memberList.html">会員名簿</a></li>';
	footerHTML += '				<li><a href="../annai/teikan_index.html">定款・諸規定</a></li>';
	footerHTML += '				<li><a href="../annai/souko_farm.html">指定倉庫一覧</a></li>';
	footerHTML += '				<li><a href="../annai/rate_rice_t.html">格付表</a></li>';
	footerHTML += '				<li><a href="../annai/koukoku_index.html">公告</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line3">';
	footerHTML += '				<li class="categoryTop">取引要綱</li>';
	footerHTML += '				<li><a href="../yoko/schedule_index.html">取引所業務日程</a></li>';
	footerHTML += '				<li><a href="../yoko/genschedule_index.html">日程一覧表</a></li>';
	footerHTML += '				<li><a href="../yoko/tachiai.html">立会時刻</a></li>';
	footerHTML += '				<li><a href="../yoko/nehaba.html">制限幅</a></li>';
	footerHTML += '				<li><a href="../yoko/zaiko.html">在庫発表</a></li>';
	footerHTML += '				<li><a href="../yoko/delivery.html">受渡明細</a></li>';
	footerHTML += '				<li><a href="../yoko/yoko.html">取引要綱</a></li>';
	footerHTML += '				<li><a href="../yoko/calc.html">指数値算出方法</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line4">';
	footerHTML += '				<li class="categoryTop">相場情報</li>';
	footerHTML += '				<li><a href="../market/price_rice_t.html">相場表</a></li>';
	footerHTML += '				<li><a href="../market/chart.html">チャート</a></li>';
	footerHTML += '				<li><a href="../nippou/index.html">取引所日報メニュー</a></li>';
	footerHTML += '				<li><a href="../market/his_index.html">ヒストリカルデータ</a></li>';
	footerHTML += '				<li><a href="../market/shisu.html">指数値</a></li>';
	footerHTML += '				<li><a href="../market/genbutsu.html">現物価格</a></li>';
	footerHTML += '				<li><a href="../market/hendou.html">価格変動要因</a></li>';
	footerHTML += '				<li><a href="../market/data.html">取引商品関連データ</a></li>';
	footerHTML += '				<li><a href="../market/kaigai_links.html">海外市場商品情報</a></li>';
	footerHTML += '			</td>';
	footerHTML += '			<td id="line5">';
	footerHTML += '				<li class="categoryTop">その他</li>';
	footerHTML += '				<li><a href="../other/kome.html">コメ先物取引情報室</a></li>';
	footerHTML += '				<li><a href="../NextSystem/index.html">堂島コメックス資料室</a></li>';
	footerHTML += '				<li><a href="../other/ifij.html">輸入食料指数</a></li>';
	footerHTML += '				<li><a href="../other/bei.html">バイオエネルギー指数</a></li>';
	footerHTML += '				<li><a href="../other/kome_sisu.html">関西コメ指数</a></li>';
	footerHTML += '				<li><a href="https://www.facebook.com/ricefutures" target="_blank">公式Facebook</a></li>';
	footerHTML += '				<li><a href="../other/kome_twitter.html">公式Twitter</a></li>';
	footerHTML += '			</td>';
	footerHTML += '		</tr>';
	footerHTML += '		<tr id="other">';
	footerHTML += '			<td><li><a href=<a onclick="contactODE()">お問い合わせ</a></li></td>';
	footerHTML += '			<td><li><a href="../basic/links.html">関連リンク</a></li></td>';
	footerHTML += '			<td><li><a href="../basic/privacy.html">個人情報保護</a></li></td>';
	footerHTML += '			<td><li><a href="../basic/menseki.html">免責事項</a></li></td>';
	footerHTML += '			<td><li><a href="../member/index.html">会員専用ページ</a></li></td>';
	footerHTML += '			<td><li><a href="../english/index.html">English Page</a></li></td>';
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
	sideBannerHTML += '			<a href="../other/kome.html"><img src="../images/banner_infoRice2.jpg" alt="コメ先物取引情報室"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="doujima_juku">';
	sideBannerHTML += '			<a href="../other/kome_study.html"><img src="../images/banner_lesson1.jpg" alt="堂島先物塾"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="minkabu">';
	sideBannerHTML += '			<a href="http://cx.minkabu.jp/" target="_blank"><img src="../images/banner_mincomo.gif" alt="みんなのコモディティ"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="komex">';
	sideBannerHTML += '			<a href="../NextSystem/index.html"><img src="../images/banner_komex.jpg" alt="堂島コメックス資料室"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="../other/kome_youin.html"><img src="../images/banner_youin.gif" alt="コメの変動要因"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="../other/kome_report.html"><img src="../images/banner_report.gif" alt="コメのレポート"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="../other/ifij.html"><img src="../images/banner_ifij.gif" alt="IFIJ(輸入食料指数)"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="../other/bei.html"><img src="../images/banner_bioEnergy.gif" alt="BioEnergy"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<br /><br />';
	sideBannerHTML += '		<li id="maff">';
	sideBannerHTML += '			<a href="http://www.maff.go.jp/j/shokusan/syoutori/dealing/kanshi.html" target="_blank"><img src="../images/banner_maff.gif" alt="農林水産省 不公正取引情報受付窓口"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="facebook">';
	sideBannerHTML += '			<img style="float:left;" src="../images/facebooklogo.jpg"><a class="special" href="https://www.facebook.com/ricefutures"><img src="../images/banner_facebooklogo150.gif" alt="公式Facebook"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="twitter">';
	sideBannerHTML += '			<a href="../other/kome_twitter.html"><img src="../images/banner_twitterlogo.gif" alt="公式Twitter"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="http://www.jcch.co.jp/span/span01.html" target="_blank"><img src="../images/banner_span.jpg" alt="SPAN証拠金"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="http://www.jcfia.gr.jp/sangyo/nattoku_hedge/jcfia/index.htm" target="_blank"><img src="../images/banner_jcfia.gif" alt="リスクヘッジ"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="http://www.commodityvoice.net/" target="_blank"><img src="../images/banner_voice2.gif" alt="ボイスネット"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '		<li id="">';
	sideBannerHTML += '			<a href="../i/index.html"><img src="../images/spSite.jpg" alt="携帯サイト"></a>';
	sideBannerHTML += '		</li>';
	sideBannerHTML += '	</ul>';
	//<div id="sideBanner">の中身はここまで
	document.getElementById('sideBanner').innerHTML = sideBannerHTML;
	
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


function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&ia.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf(""))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&id.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_callJS(jsStr) { //v2.0
  return eval(jsStr)
}

function CheckUruu(date) {

	now=new Date();

	year=now.getYear();

	day=now.getDate();

	seldate=date.options[date.selectedIndex].value;

	if (day > seldate) {

		month=now.getMonth();

	} else {

		month=now.getMonth()-1;

		if (month==-1) {

			month=11;

			year=year-1;

		} 

	}


	FebLast=new Date(year,2,1-1);

	Febstr=FebLast.toString();

	ar1=Febstr.split(" ");

	if (ar1[2] == "29") {

		NoExistDay=new Array("230","231","431","631","931","1131");

	} else{

		NoExistDay=new Array("229","230","231","431","631","931","1131");

	}

	selectday=(month+1)+seldate;

	MMDD=(month+1)+"月"+seldate+"日";

	notexist=false;

	for (i=0;i < NoExistDay.length;i++){

		if (selectday==NoExistDay[i]) {

			alert(MMDD+"は存在しません");

			notexist= true;

			break;

		} 

	}

	return notexist;

}

function GoUrl(){

	obj=document.form1.DateFu;

	result = CheckUruu(obj);

	if (!result) {

//指定した日が存在する場合

	Sel=document.form1.RepoNameFu.selectedIndex;

	repo=document.form1.RepoNameFu.options[Sel].value;

	Sel=document.form1.CommNameFu.selectedIndex;

	comm=document.form1.CommNameFu.options[Sel].value;

	Sel=document.form1.DateFu.selectedIndex;

	DD=document.form1.DateFu.options[Sel].value;

	if ((repo == "str") || (repo == "tri")) {

		URL="F_"+repo+"_"+comm+".PDF";

	} else {

		URL="F_"+repo+".PDF";

	}

	
//	url_href="http://www.kanex.or.jp/NIPOU/" + "pdf/" + DD + "/" + URL;
//	location.href= url_href;
	window.open("pdf/" + DD + "/" + URL,"_blank");
	}

}

//Option's scripts

function GoUrlOp(){

	obj=document.form2.DateOp;

	result= CheckUruu(obj);

	if (!result) {

//指定した日が存在する場合

	Sel=document.form2.RepoNameOp.selectedIndex;

	repo=document.form2.RepoNameOp.options[Sel].value;

	Sel=document.form2.CommNameOp.selectedIndex;

	comm=document.form2.CommNameOp.options[Sel].value;

	Sel=document.form2.DateOp.selectedIndex;

	DD=document.form2.DateOp.options[Sel].value;

	if (repo == "rkn") {

		URL="F_"+repo+".PDF";

	} else {

		URL="O_"+repo+"_"+comm+".PDF";

	}
//	alert(URL);


//	parent.bottomFrame.location.href="pdf/" + DD + "/" + URL;
	window.open("pdf/" + DD + "/" + URL,"_blank");

	}

}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}


//お問い合わせフォームのページを新規ウィンドウで生成
function contactODE() { //v2.0
  window.open('https://ode.or.jp/cgi-bin/contact/','contact','menubar=yes,scrollbars=yes,resizable=yes,width=620,height=700');
}