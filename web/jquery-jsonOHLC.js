
jQuery(function($){
	// AJAX設定 - 同期通信(JSON取得を待ち合わせる).
	$.ajaxSetup({async: false});
	$.ajaxSetup({scriptCharset: "utf-8" , contentType: "application/json; charset=utf-8"});
	
	// htmlファイル名からjsonファイル名を生成
	var filename = function(filename){
		return filename.substring(0,filename.indexOf("_")) + "_list.json?" + new Date().getTime();
	}(location.pathname);
	
	$.getJSON( filename , function( json ) {
		$('select').empty();
		$('select').append($('<option>').html("選択してください。"));
		$.each( json.list, function() {
			var option = $('<option>', this);
			$('select').append(option);
		});
	});
	$.ajaxSetup({async: true});
});

function drawVisualization() {
	// htmlファイル名からjsonファイル名を生成
	var filename = function(filename){
		return filename.substring(0,filename.indexOf(".")) + ".json?" + new Date().getTime();
	}(location.pathname);
	
	// jsonファイル取得
	var jsonData = $.ajax({
		url: filename,
		beforeSend: function(listData){
			listData.overrideMimeType("text/html;charset=utf-8");
		},
		dataType:"json",
		async: false
	}).responseText;
	
	var data = new google.visualization.DataTable(jsonData);
	
	// ソート部の作成
	var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard'));
	var control = new google.visualization.ControlWrapper({
		controlType: 'ChartRangeFilter',
		containerId: 'control',
		options: {
			filterColumnIndex: 0,
			ui: {
				chartType: 'LineChart',
				chartOptions: {
					fontName: 'century gothic',
					width: 1280, height: 160,
					chartArea: {
						width: 1120, height: 160,
						backgroundColor:{strokeWidth: 1}
					},
					vAxis: {title: '終値(close)'}
				},
				// 表示項目の指定(日付,終値)
				chartView: {columns: [ 0, 7 ]},
				// 1 day in milliseconds = 24 * 60 * 60 * 1000 = 86,400,000
				minRangeSize: 864000000
			}
		}
	});
	
	// チャート作成
	var chart = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'chart',
		options: {
			fontName: 'century gothic',
			
			// 背景設定
			width: 1280, height: 560, fontSize:10, lineWidth: 1, 
			
			// チャート設定
			chartArea: {
				width: 1120, height: 440, 
				backgroundColor:{fill: '#ffffff', stroke: '#000000', strokeWidth: 1}
			},
			colors: ['#000000'],
			seriesType: 'candlesticks', 
			bar: {groupWidth: '100%'},
			vAxes: {
				0:{title: '価格(price)', gridlines: {count: 6}, slantedText: 'false'}, 
				1:{title: '出来高(volume)', gridlines: {count: 6}, maxValue: 5000}
			},
			hAxis: {
				textStyle: {fontSize: 10}, maxAlternation: 1, slantedText: 'false'
			},
			
			// ローソクグラフの設定
			candlestick: {
				hollowIsRising: true, 
				fallingColor: {fill: '#0000ff', stroke: '#0000ff'}, 
				risingColor: {stroke: '#ff0000', strokeWidth: 0.5}
			},
			
			// 線グラフ(移動平均), 出来高/取組高グラフ(面グラフ)の設定
			series: {
				0: {type: 'line', color: '#800000'}, 
				1: {type: 'line', color: '#2e8b57'},
				2: {type: 'area', color: '#ffd700', targetAxisIndex: 1},
				3: {type: 'area', color: '#ffc0cb', targetAxisIndex: 1}
			}, 
			
			// マウスフォーカスを全グラフ共通設定
			focusTarget: 'category'
		},
		
		// カラム名の表示設定(日付表示を文字表示に変更)
		view: {
			columns: [ {
				calc: function(dataTable, rowIndex) {
					return dataTable.getFormattedValue(rowIndex, 0);
				}, type: 'string'
			}, 1, 2, 3, 4, 5, 6, 7, 8]
		}
	});
	
	// 価格フォーマット
	var priceFormat = new google.visualization.NumberFormat({pattern: '#,###.#'});
	priceFormat.format(data, 1);
	priceFormat.format(data, 2);
	
	// 日付フォーマット
	new google.visualization.DateFormat({pattern: 'M/d'}).format(data, 0);
	
	// 4本値フォーマット
	new google.visualization.NumberFormat({pattern: '安値(L) #,###.#'}).format(data, 5);
	new google.visualization.NumberFormat({pattern: '始値(O) #,###.#'}).format(data, 6);
	new google.visualization.NumberFormat({pattern: '終値(C) #,###.#'}).format(data, 7);
	new google.visualization.NumberFormat({pattern: '高値(H) #,###.#'}).format(data, 8);
	
	dashboard.bind(control, chart);
	dashboard.draw(data);
}
google.setOnLoadCallback(drawVisualization);
