// ----------------------------------------
// 相場表テーブル json読み込み プラグイン
// ----------------------------------------
// usage: 
// $('#price-report').jsonpricereport({
//   jsonfile: './price_rice.json'
// });
// ----------------------------------------

(function($){
	$.fn.jsonpricereport = function(options){ 

		var args = $.extend({
			jsonfile: null
		},options || {});

		if( !args.jsonfile ) {
			return false; // 引数不足
		}

		// 同期通信(JSON取得を待ち合わせる)
		$.ajaxSetup({async: false});
		$.ajaxSetup({scriptCharset: "utf-8" , contentType: "application/json; charset=utf-8"});

		$(this).each(function(){
			var self = $(this);

			var timestamp = '?timestamp='+(new Date()).getTime(); // IEのajaxリクエストのキャッシュを防ぐ対策
			$.getJSON( args.jsonfile + timestamp, function(json) {
				var items = [];

				// 1. 更新時刻
				items.push('<tr>');
				items.push('<th colspan='+ json.colsize+3 +' class="timestamp">' + esc(json.timestamp) + '</th>');
				items.push('</tr>');

				// 2. 限月
				items.push('<tr>');
				items.push('<th colspan=2 class="rowname">限月(c.month)</th>');
				$.each(json.months, function(i, columns) {
					items.push('<td class="month">'+ esc(columns) +'</td>');
				});
				items.push('<th>出来高(volume)</th>');
				items.push('</tr>');

				// 3. 前日終値
				items.push('<tr>');
				items.push('<th colspan=2 class="rowname">前日終値(pre.sett)</th>');
				$.each(json.prevprices, function(i, columns) {
					items.push('<td class="i">'+ esc(columns) +'</td>');
				});
				items.push('<td class="summary">'+ esc(json.prevvolume) +'</td>');
				items.push('</tr>');

				// 4. 約定値段
				$.each(json.prices, function(i, sessions) {
					items.push('<tr>');
					if( json.amsize >= 0 ){
						if( 0 == i ){
							items.push('<th rowspan=' + json.amsize + ' class="rowname">前場</th>');
						}
					}
					if( json.pmsize >= 0 ){
						if( json.amsize == i ){
							items.push('<th rowspan=' + json.pmsize + ' class="rowname">後場</th>');
						}
					}
					// items.push('<th class="rowname">'+sessions.name+'</th>');
					items.push('<th class="rowname">'+sessionName(sessions.sid)+'</th>');
					$.each(sessions.values, function(i, value) {
						items.push('<td class="i">'+ esc(value) +'</td>');
					});
					items.push('<td class="summary">'+esc(sessions.summary)+'</td>');
					items.push('</tr>');
				});

				// 5. 前日比
				items.push('<tr>');
				items.push('<th colspan=2 class="rowname">前日比(prev.chg)</th>');
				$.each(json.durations, function(i, columns) {
					items.push('<td class="i">'+ esc(columns) +'</td>');
				});
				items.push('<td class="summary">&nbsp;</td>');
				items.push('</tr>');

				// 6. (限月毎)出来高
				items.push('<tr>');
				items.push('<th colspan=2 class="rowname">出来高(volume)</th>');
				$.each(json.volumes, function(i, columns) {
					items.push('<td class="i">'+ esc(columns) +'</td>');
				});
				items.push('<td class="summary">'+esc(json.volumeall)+'</td>');
				items.push('</tr>');

				// 7. 前日総取組高
				items.push('<tr>');
				items.push('<th colspan=2 class="rowname">前日総取組高(open.int)</th>');
				$.each(json.openints, function(i, columns) {
					items.push('<td class="i">'+ esc(columns) +'</td>');
				});
				items.push('<td class="summary">'+esc(json.openintall)+'</td>');
				items.push('</tr>');

				// 8. 制限値幅
				items.push('<tr>');
				items.push('<th colspan=2 class="rowname">制限幅(daily price limits)</th>');
				$.each(json.limits, function(i, columns) {
					items.push('<td class="i">'+ esc(columns) +'</td>');
				});
				items.push('<td class="summary">&nbsp;</td>');
				items.push('</tr>');

				// 内容の入れ替え.
				self.contents().remove();

				$('<table/>', {
					'class': 'price-report-table',
					html: items.join('')
				}).appendTo( self );
			})
 			.error(function() {
				self.contents().remove();
				self.append( '<div style="color:red; border: 1px solid red;">[error] データ読込みに失敗しました</div>');
 			});

		});
		
		// 一応の後始末(元に戻す).
		$.ajaxSetup({async: true});
    }
})(jQuery);


function sessionName( sessionid ){
	if( sessionid == "11" ){ return "第１節(m.1st)"; }
	if( sessionid == "12" ){ return "第２節(m.2nd)"; }
	if( sessionid == "13" ){ return "第３節(m.3rd)"; }
	if( sessionid == "21" ){ return "第１節(a.1st)"; }
	if( sessionid == "22" ){ return "第２節(a.2nd)"; }
	if( sessionid == "23" ){ return "第３節(a.3rd)"; }
	return sessionid;
}
function esc( val ){
	if( val == null ){ return "&nbsp;" }
	if( val == undefined ){ return "&nbsp;" }
	if( val == "" ){ return "&nbsp;" } // FIXME trim未実装
	return val;
}
