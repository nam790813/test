google.load("jquery", "1");
google.load("visualization", "1.1", {packages: ["corechart", "controls"], language: "en"});

google.setOnLoadCallback(function(){
	// htmlファイル名からjsonファイル名を生成
	var commCode = function(commCode){
		return commCode.substring(0,commCode.indexOf(".")).substring(commCode.lastIndexOf("_") + 1);
	}(location.pathname);

	$.getJSON(commCode + "_list.json?" + new Date().getTime() , function(json) {
		$("select").empty();
		$.each( json.list, function() {
			var option = $("<option>", this);
			$("select").append(option);
		});
	});
	$("select").change(function() {
		drawVisualization($("select option:selected").val());
	});
	drawVisualization(commCode + "_170");
});

function drawVisualization(fileName) {
	// jsonファイル取得
	var jsonData = $.ajax({
		url: fileName + ".json?" + new Date().getTime(),
		beforeSend: function(listData) {
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
					chartArea: {width: 1120},
					vAxis: {title: '終値(close)'}
				},
				chartView: {columns: [ 0, 7 ]}
			}
		}
	});

	// チャート作成
	var chart = new google.visualization.ChartWrapper({
		chartType: 'ComboChart',
		containerId: 'chart',
		options: {
			height: 560,
			colors: ['#000000'],
			bar: {groupWidth: '100%'},
			
			// チャート部設定
			chartArea: {width: 1120, backgroundColor:{stroke: '#000000'}},
			vAxes: {
				0:{title: '価格(price)', gridlines: {count: 6}, slantedText: 'false'},
				1:{title: '出来高(volume)', gridlines: {count: 6}, maxValue: 5000}
			},
			hAxis: {
				maxAlternation: 1, slantedText: 'false'
			},

			// ローソクグラフの設定
			seriesType: 'candlesticks',
			candlestick: {
				hollowIsRising: true,
				fallingColor: {fill: '#0000ff', stroke: '#0000ff'},
				risingColor: {stroke: '#ff0000', strokeWidth: 1}
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
