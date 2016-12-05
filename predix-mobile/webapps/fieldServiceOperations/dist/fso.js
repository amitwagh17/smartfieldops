/**
 * Created by amitwagh on 10/26/16.
 */

var incidentMgmtApp = angular.module('incidentMgmt', ['ui.router','geolocation','highcharts-ng']);

incidentMgmtApp.config(function($stateProvider,$urlRouterProvider, $httpProvider){
    $urlRouterProvider.otherwise('/');
    $httpProvider.defaults.headers.post = {};
    $stateProvider
        .state('incident', {
            url:'/',
            templateUrl: 'src/incident/incident.view.html'
        })
        .state('details', {
            url:'/details',
            templateUrl: 'src/incident/incident-details.view.html',
            controller : 'IncidentDetailsCtrl',
            params: {
                incident: null
            }
        });


});

incidentMgmtApp.run(function ($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function (event, to, toParams, from, fromParams) {
        $rootScope.previousState = from.name;
    });
});

/*
 Highcharts JS v5.0.2 (2016-10-26)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(x){"object"===typeof module&&module.exports?module.exports=x:x(Highcharts)})(function(x){(function(a){function t(a,b,d){this.init(a,b,d)}var u=a.each,w=a.extend,q=a.merge,r=a.splat;w(t.prototype,{init:function(a,b,d){var h=this,k=h.defaultOptions;h.chart=b;h.options=a=q(k,b.angular?{background:{}}:void 0,a);(a=a.background)&&u([].concat(r(a)).reverse(),function(b){var c,k=d.userOptions;c=q(h.defaultBackgroundOptions,b);b.backgroundColor&&(c.backgroundColor=b.backgroundColor);c.color=c.backgroundColor;
d.options.plotBands.unshift(c);k.plotBands=k.plotBands||[];k.plotBands!==d.options.plotBands&&k.plotBands.unshift(c)})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{className:"highcharts-pane",shape:"circle",borderWidth:1,borderColor:"#cccccc",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ffffff"],[1,"#e6e6e6"]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});a.Pane=t})(x);(function(a){var t=a.CenteredSeriesMixin,
u=a.each,w=a.extend,q=a.map,r=a.merge,e=a.noop,b=a.Pane,d=a.pick,h=a.pInt,k=a.splat,n=a.wrap,c,g,l=a.Axis.prototype;a=a.Tick.prototype;c={getOffset:e,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:e,setCategories:e,setTitle:e};g={defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},
defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(b){b=this.options=r(this.defaultOptions,this.defaultRadialOptions,b);b.plotBands||(b.plotBands=[])},getOffset:function(){l.getOffset.call(this);this.chart.axisOffset[this.side]=0;this.center=this.pane.center=
t.getCenter.call(this.pane)},getLinePath:function(b,f){b=this.center;var c=this.chart,h=d(f,b[2]/2-this.offset);this.isCircular||void 0!==f?f=this.chart.renderer.symbols.arc(this.left+b[0],this.top+b[1],h,h,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0}):(f=this.postTranslate(this.angleRad,h),f=["M",b[0]+c.plotLeft,b[1]+c.plotTop,"L",f.x,f.y]);return f},setAxisTranslation:function(){l.setAxisTranslation.call(this);this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/
(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0)},beforeSetTickPositions:function(){if(this.autoConnect=this.isCircular&&void 0===d(this.userMax,this.options.max)&&this.endAngleRad-this.startAngleRad===2*Math.PI)this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0},setAxisSize:function(){l.setAxisSize.call(this);this.isRadial&&(this.center=this.pane.center=t.getCenter.call(this.pane),this.isCircular&&
(this.sector=this.endAngleRad-this.startAngleRad),this.len=this.width=this.height=this.center[2]*d(this.sector,1)/2)},getPosition:function(b,f){return this.postTranslate(this.isCircular?this.translate(b):this.angleRad,d(this.isCircular?f:this.translate(b),this.center[2]/2)-this.offset)},postTranslate:function(b,f){var d=this.chart,c=this.center;b=this.startAngleRad+b;return{x:d.plotLeft+c[0]+Math.cos(b)*f,y:d.plotTop+c[1]+Math.sin(b)*f}},getPlotBandPath:function(b,f,c){var k=this.center,p=this.startAngleRad,
l=k[2]/2,m=[d(c.outerRadius,"100%"),c.innerRadius,d(c.thickness,10)],a=Math.min(this.offset,0),g=/%$/,n,e=this.isCircular;"polygon"===this.options.gridLineInterpolation?k=this.getPlotLinePath(b).concat(this.getPlotLinePath(f,!0)):(b=Math.max(b,this.min),f=Math.min(f,this.max),e||(m[0]=this.translate(b),m[1]=this.translate(f)),m=q(m,function(b){g.test(b)&&(b=h(b,10)*l/100);return b}),"circle"!==c.shape&&e?(b=p+this.translate(b),f=p+this.translate(f)):(b=-Math.PI/2,f=1.5*Math.PI,n=!0),m[0]-=a,m[2]-=
a,k=this.chart.renderer.symbols.arc(this.left+k[0],this.top+k[1],m[0],m[0],{start:Math.min(b,f),end:Math.max(b,f),innerR:d(m[1],m[0]-m[2]),open:n}));return k},getPlotLinePath:function(b,f){var d=this,c=d.center,h=d.chart,k=d.getPosition(b),a,l,p;d.isCircular?p=["M",c[0]+h.plotLeft,c[1]+h.plotTop,"L",k.x,k.y]:"circle"===d.options.gridLineInterpolation?(b=d.translate(b))&&(p=d.getLinePath(0,b)):(u(h.xAxis,function(b){b.pane===d.pane&&(a=b)}),p=[],b=d.translate(b),c=a.tickPositions,a.autoConnect&&(c=
c.concat([c[0]])),f&&(c=[].concat(c).reverse()),u(c,function(f,d){l=a.getPosition(f,b);p.push(d?"L":"M",l.x,l.y)}));return p},getTitlePosition:function(){var b=this.center,f=this.chart,d=this.options.title;return{x:f.plotLeft+b[0]+(d.x||0),y:f.plotTop+b[1]-{high:.5,middle:.25,low:0}[d.align]*b[2]+(d.y||0)}}};n(l,"init",function(h,f,a){var l=f.angular,p=f.polar,m=a.isX,n=l&&m,e,A=f.options,q=a.pane||0;if(l){if(w(this,n?c:g),e=!m)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else p&&(w(this,
g),this.defaultRadialOptions=(e=m)?this.defaultRadialXOptions:r(this.defaultYAxisOptions,this.defaultRadialYOptions));l||p?(this.isRadial=!0,f.inverted=!1,A.chart.zoomType=null):this.isRadial=!1;h.call(this,f,a);n||!l&&!p||(h=this.options,f.panes||(f.panes=[]),this.pane=f=f.panes[q]=f.panes[q]||new b(k(A.pane)[q],f,this),f=f.options,this.angleRad=(h.angle||0)*Math.PI/180,this.startAngleRad=(f.startAngle-90)*Math.PI/180,this.endAngleRad=(d(f.endAngle,f.startAngle+360)-90)*Math.PI/180,this.offset=h.offset||
0,this.isCircular=e)});n(l,"autoLabelAlign",function(b){if(!this.isRadial)return b.apply(this,[].slice.call(arguments,1))});n(a,"getPosition",function(b,d,c,h,k){var f=this.axis;return f.getPosition?f.getPosition(c):b.call(this,d,c,h,k)});n(a,"getLabelPosition",function(b,f,c,h,k,a,l,g,n){var m=this.axis,p=a.y,e=20,y=a.align,v=(m.translate(this.pos)+m.startAngleRad+Math.PI/2)/Math.PI*180%360;m.isRadial?(b=m.getPosition(this.pos,m.center[2]/2+d(a.distance,-25)),"auto"===a.rotation?h.attr({rotation:v}):
null===p&&(p=m.chart.renderer.fontMetrics(h.styles.fontSize).b-h.getBBox().height/2),null===y&&(m.isCircular?(this.label.getBBox().width>m.len*m.tickInterval/(m.max-m.min)&&(e=0),y=v>e&&v<180-e?"left":v>180+e&&v<360-e?"right":"center"):y="center",h.attr({align:y})),b.x+=a.x,b.y+=p):b=b.call(this,f,c,h,k,a,l,g,n);return b});n(a,"getMarkPath",function(b,d,c,h,k,a,l){var f=this.axis;f.isRadial?(b=f.getPosition(this.pos,f.center[2]/2+h),d=["M",d,c,"L",b.x,b.y]):d=b.call(this,d,c,h,k,a,l);return d})})(x);
(function(a){var t=a.each,u=a.noop,w=a.pick,q=a.Series,r=a.seriesType,e=a.seriesTypes;r("arearange","area",{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{series.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0},states:{hover:{halo:!1}}},{pointArrayMap:["low","high"],dataLabelCollections:["dataLabel",
"dataLabelUpper"],toYData:function(b){return[b.low,b.high]},pointValKey:"low",deferTranslatePolar:!0,highToXY:function(b){var d=this.chart,h=this.xAxis.postTranslate(b.rectPlotX,this.yAxis.len-b.plotHigh);b.plotHighX=h.x-d.plotLeft;b.plotHigh=h.y-d.plotTop},translate:function(){var b=this,d=b.yAxis,h=!!b.modifyValue;e.area.prototype.translate.apply(b);t(b.points,function(k){var a=k.low,c=k.high,g=k.plotY;null===c||null===a?k.isNull=!0:(k.plotLow=g,k.plotHigh=d.translate(h?b.modifyValue(c,k):c,0,1,
0,1),h&&(k.yBottom=k.plotHigh))});this.chart.polar&&t(this.points,function(d){b.highToXY(d)})},getGraphPath:function(b){var d=[],h=[],a,n=e.area.prototype.getGraphPath,c,g,l;l=this.options;var p=l.step;b=b||this.points;for(a=b.length;a--;)c=b[a],c.isNull||l.connectEnds||b[a+1]&&!b[a+1].isNull||h.push({plotX:c.plotX,plotY:c.plotY,doCurve:!1}),g={polarPlotY:c.polarPlotY,rectPlotX:c.rectPlotX,yBottom:c.yBottom,plotX:w(c.plotHighX,c.plotX),plotY:c.plotHigh,isNull:c.isNull},h.push(g),d.push(g),c.isNull||
l.connectEnds||b[a-1]&&!b[a-1].isNull||h.push({plotX:c.plotX,plotY:c.plotY,doCurve:!1});b=n.call(this,b);p&&(!0===p&&(p="left"),l.step={left:"right",center:"center",right:"left"}[p]);d=n.call(this,d);h=n.call(this,h);l.step=p;l=[].concat(b,d);this.chart.polar||"M"!==h[0]||(h[0]="L");this.graphPath=l;this.areaPath=this.areaPath.concat(b,h);l.isArea=!0;l.xMap=b.xMap;this.areaPath.xMap=b.xMap;return l},drawDataLabels:function(){var b=this.data,d=b.length,h,a=[],n=q.prototype,c=this.options.dataLabels,
g=c.align,l=c.verticalAlign,p=c.inside,f,m,e=this.chart.inverted;if(c.enabled||this._hasPointLabels){for(h=d;h--;)if(f=b[h])m=p?f.plotHigh<f.plotLow:f.plotHigh>f.plotLow,f.y=f.high,f._plotY=f.plotY,f.plotY=f.plotHigh,a[h]=f.dataLabel,f.dataLabel=f.dataLabelUpper,f.below=m,e?g||(c.align=m?"right":"left"):l||(c.verticalAlign=m?"top":"bottom"),c.x=c.xHigh,c.y=c.yHigh;n.drawDataLabels&&n.drawDataLabels.apply(this,arguments);for(h=d;h--;)if(f=b[h])m=p?f.plotHigh<f.plotLow:f.plotHigh>f.plotLow,f.dataLabelUpper=
f.dataLabel,f.dataLabel=a[h],f.y=f.low,f.plotY=f._plotY,f.below=!m,e?g||(c.align=m?"left":"right"):l||(c.verticalAlign=m?"bottom":"top"),c.x=c.xLow,c.y=c.yLow;n.drawDataLabels&&n.drawDataLabels.apply(this,arguments)}c.align=g;c.verticalAlign=l},alignDataLabel:function(){e.column.prototype.alignDataLabel.apply(this,arguments)},setStackedPoints:u,getSymbol:u,drawPoints:u})})(x);(function(a){var t=a.seriesType;t("areasplinerange","arearange",null,{getPointSpline:a.seriesTypes.spline.prototype.getPointSpline})})(x);
(function(a){var t=a.defaultPlotOptions,u=a.each,w=a.merge,q=a.noop,r=a.pick,e=a.seriesType,b=a.seriesTypes.column.prototype;e("columnrange","arearange",w(t.column,t.arearange,{lineWidth:1,pointRange:null}),{translate:function(){var d=this,h=d.yAxis,a=d.xAxis,n=a.startAngleRad,c,g=d.chart,l=d.xAxis.isRadial,p;b.translate.apply(d);u(d.points,function(b){var f=b.shapeArgs,k=d.options.minPointLength,e,v;b.plotHigh=p=h.translate(b.high,0,1,0,1);b.plotLow=b.plotY;v=p;e=r(b.rectPlotY,b.plotY)-p;Math.abs(e)<
k?(k-=e,e+=k,v-=k/2):0>e&&(e*=-1,v-=e);l?(c=b.barX+n,b.shapeType="path",b.shapeArgs={d:d.polarArc(v+e,v,c,c+b.pointWidth)}):(f.height=e,f.y=v,b.tooltipPos=g.inverted?[h.len+h.pos-g.plotLeft-v-e/2,a.len+a.pos-g.plotTop-f.x-f.width/2,e]:[a.left-g.plotLeft+f.x+f.width/2,h.pos-g.plotTop+v+e/2,e])})},directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:q,crispCol:b.crispCol,drawPoints:b.drawPoints,drawTracker:b.drawTracker,getColumnMetrics:b.getColumnMetrics,animate:function(){return b.animate.apply(this,
arguments)},polarArc:function(){return b.polarArc.apply(this,arguments)},pointAttribs:b.pointAttribs})})(x);(function(a){var t=a.each,u=a.isNumber,w=a.merge,q=a.pick,r=a.pInt,e=a.Series,b=a.seriesType,d=a.TrackerMixin;b("gauge","line",{dataLabels:{enabled:!0,defer:!1,y:15,borderRadius:3,crop:!1,verticalAlign:"top",zIndex:2,borderWidth:1,borderColor:"#cccccc"},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1},{angular:!0,directTouch:!0,drawGraph:a.noop,fixedBox:!0,forceDL:!0,noSharedTooltip:!0,
trackerGroups:["group","dataLabelsGroup"],translate:function(){var b=this.yAxis,d=this.options,a=b.center;this.generatePoints();t(this.points,function(c){var h=w(d.dial,c.dial),l=r(q(h.radius,80))*a[2]/200,k=r(q(h.baseLength,70))*l/100,f=r(q(h.rearLength,10))*l/100,m=h.baseWidth||3,n=h.topWidth||1,e=d.overshoot,v=b.startAngleRad+b.translate(c.y,null,null,null,!0);u(e)?(e=e/180*Math.PI,v=Math.max(b.startAngleRad-e,Math.min(b.endAngleRad+e,v))):!1===d.wrap&&(v=Math.max(b.startAngleRad,Math.min(b.endAngleRad,
v)));v=180*v/Math.PI;c.shapeType="path";c.shapeArgs={d:h.path||["M",-f,-m/2,"L",k,-m/2,l,-n/2,l,n/2,k,m/2,-f,m/2,"z"],translateX:a[0],translateY:a[1],rotation:v};c.plotX=a[0];c.plotY=a[1]})},drawPoints:function(){var b=this,d=b.yAxis.center,a=b.pivot,c=b.options,g=c.pivot,l=b.chart.renderer;t(b.points,function(d){var a=d.graphic,h=d.shapeArgs,k=h.d,g=w(c.dial,d.dial);a?(a.animate(h),h.d=k):(d.graphic=l[d.shapeType](h).attr({rotation:h.rotation,zIndex:1}).addClass("highcharts-dial").add(b.group),d.graphic.attr({stroke:g.borderColor||
"none","stroke-width":g.borderWidth||0,fill:g.backgroundColor||"#000000"}))});a?a.animate({translateX:d[0],translateY:d[1]}):(b.pivot=l.circle(0,0,q(g.radius,5)).attr({zIndex:2}).addClass("highcharts-pivot").translate(d[0],d[1]).add(b.group),b.pivot.attr({"stroke-width":g.borderWidth||0,stroke:g.borderColor||"#cccccc",fill:g.backgroundColor||"#000000"}))},animate:function(b){var d=this;b||(t(d.points,function(b){var c=b.graphic;c&&(c.attr({rotation:180*d.yAxis.startAngleRad/Math.PI}),c.animate({rotation:b.shapeArgs.rotation},
d.options.animation))}),d.animate=null)},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);e.prototype.render.call(this);this.group.clip(this.chart.clipRect)},setData:function(b,d){e.prototype.setData.call(this,b,!1);this.processData();this.generatePoints();q(d,!0)&&this.chart.redraw()},drawTracker:d&&d.drawTrackerPoint},{setState:function(b){this.state=b}})})(x);(function(a){var t=a.each,u=a.noop,w=a.pick,q=a.seriesType,
r=a.seriesTypes;q("boxplot","column",{threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eMaximum: {point.high}\x3cbr/\x3eUpper quartile: {point.q3}\x3cbr/\x3eMedian: {point.median}\x3cbr/\x3eLower quartile: {point.q1}\x3cbr/\x3eMinimum: {point.low}\x3cbr/\x3e'},whiskerLength:"50%",fillColor:"#ffffff",lineWidth:1,medianWidth:2,states:{hover:{brightness:-.3}},whiskerWidth:2},{pointArrayMap:["low","q1","median",
"q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]},pointValKey:"high",pointAttribs:function(a){var b=this.options,d=a&&a.color||this.color;return{fill:a.fillColor||b.fillColor||d,stroke:b.lineColor||d,"stroke-width":b.lineWidth||0}},drawDataLabels:u,translate:function(){var a=this.yAxis,b=this.pointArrayMap;r.column.prototype.translate.apply(this);t(this.points,function(d){t(b,function(b){null!==d[b]&&(d[b+"Plot"]=a.translate(d[b],0,1,0,1))})})},drawPoints:function(){var a=
this,b=a.options,d=a.chart.renderer,h,k,n,c,g,l,p=0,f,m,q,r,v=!1!==a.doQuartiles,u,x=a.options.whiskerLength;t(a.points,function(e){var t=e.graphic,y=t?"animate":"attr",I=e.shapeArgs,z={},B={},G={},H=e.color||a.color;void 0!==e.plotY&&(f=I.width,m=Math.floor(I.x),q=m+f,r=Math.round(f/2),h=Math.floor(v?e.q1Plot:e.lowPlot),k=Math.floor(v?e.q3Plot:e.lowPlot),n=Math.floor(e.highPlot),c=Math.floor(e.lowPlot),t||(e.graphic=t=d.g("point").add(a.group),e.stem=d.path().addClass("highcharts-boxplot-stem").add(t),
x&&(e.whiskers=d.path().addClass("highcharts-boxplot-whisker").add(t)),v&&(e.box=d.path(void 0).addClass("highcharts-boxplot-box").add(t)),e.medianShape=d.path(void 0).addClass("highcharts-boxplot-median").add(t),z.stroke=e.stemColor||b.stemColor||H,z["stroke-width"]=w(e.stemWidth,b.stemWidth,b.lineWidth),z.dashstyle=e.stemDashStyle||b.stemDashStyle,e.stem.attr(z),x&&(B.stroke=e.whiskerColor||b.whiskerColor||H,B["stroke-width"]=w(e.whiskerWidth,b.whiskerWidth,b.lineWidth),e.whiskers.attr(B)),v&&(t=
a.pointAttribs(e),e.box.attr(t)),G.stroke=e.medianColor||b.medianColor||H,G["stroke-width"]=w(e.medianWidth,b.medianWidth,b.lineWidth),e.medianShape.attr(G)),l=e.stem.strokeWidth()%2/2,p=m+r+l,e.stem[y]({d:["M",p,k,"L",p,n,"M",p,h,"L",p,c]}),v&&(l=e.box.strokeWidth()%2/2,h=Math.floor(h)+l,k=Math.floor(k)+l,m+=l,q+=l,e.box[y]({d:["M",m,k,"L",m,h,"L",q,h,"L",q,k,"L",m,k,"z"]})),x&&(l=e.whiskers.strokeWidth()%2/2,n+=l,c+=l,u=/%$/.test(x)?r*parseFloat(x)/100:x/2,e.whiskers[y]({d:["M",p-u,n,"L",p+u,n,
"M",p-u,c,"L",p+u,c]})),g=Math.round(e.medianPlot),l=e.medianShape.strokeWidth()%2/2,g+=l,e.medianShape[y]({d:["M",m,g,"L",q,g]}))})},setStackedPoints:u})})(x);(function(a){var t=a.each,u=a.noop,w=a.seriesType,q=a.seriesTypes;w("errorbar","boxplot",{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},whiskerWidth:null},{type:"errorbar",
pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:q.arearange?function(){var a=this.pointValKey;q.arearange.prototype.drawDataLabels.call(this);t(this.data,function(e){e.y=e[a]})}:u,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||q.column.prototype.getColumnMetrics.call(this)}})})(x);(function(a){var t=a.correctFloat,u=a.isNumber,w=a.pick,q=a.Point,r=a.Series,e=a.seriesType,b=a.seriesTypes;
e("waterfall","column",{dataLabels:{inside:!0},lineWidth:1,lineColor:"#333333",dashStyle:"dot",borderColor:"#333333",states:{hover:{lineWidthPlus:0}}},{pointValKey:"y",translate:function(){var d=this.options,a=this.yAxis,k,e,c,g,l,p,f,m,q,r=w(d.minPointLength,5),v=d.threshold,u=d.stacking;b.column.prototype.translate.apply(this);this.minPointLengthOffset=0;f=m=v;e=this.points;k=0;for(d=e.length;k<d;k++)c=e[k],p=this.processedYData[k],g=c.shapeArgs,q=(l=u&&a.stacks[(this.negStacks&&p<v?"-":"")+this.stackKey])?
l[c.x].points[this.index+","+k]:[0,p],c.isSum?c.y=t(p):c.isIntermediateSum&&(c.y=t(p-m)),l=Math.max(f,f+c.y)+q[0],g.y=a.toPixels(l,!0),c.isSum?(g.y=a.toPixels(q[1],!0),g.height=Math.min(a.toPixels(q[0],!0),a.len)-g.y+this.minPointLengthOffset):c.isIntermediateSum?(g.y=a.toPixels(q[1],!0),g.height=Math.min(a.toPixels(m,!0),a.len)-g.y+this.minPointLengthOffset,m=q[1]):(g.height=0<p?a.toPixels(f,!0)-g.y:a.toPixels(f,!0)-a.toPixels(f-p,!0),f+=p),0>g.height&&(g.y+=g.height,g.height*=-1),c.plotY=g.y=Math.round(g.y)-
this.borderWidth%2/2,g.height=Math.max(Math.round(g.height),.001),c.yBottom=g.y+g.height,g.height<=r&&(g.height=r,this.minPointLengthOffset+=r),g.y-=this.minPointLengthOffset,g=c.plotY+(c.negative?g.height:0)-this.minPointLengthOffset,this.chart.inverted?c.tooltipPos[0]=a.len-g:c.tooltipPos[1]=g},processData:function(b){var a=this.yData,d=this.options.data,e,c=a.length,g,l,p,f,m,q;l=g=p=f=this.options.threshold||0;for(q=0;q<c;q++)m=a[q],e=d&&d[q]?d[q]:{},"sum"===m||e.isSum?a[q]=t(l):"intermediateSum"===
m||e.isIntermediateSum?a[q]=t(g):(l+=m,g+=m),p=Math.min(l,p),f=Math.max(l,f);r.prototype.processData.call(this,b);this.dataMin=p;this.dataMax=f},toYData:function(b){return b.isSum?0===b.x?null:"sum":b.isIntermediateSum?0===b.x?null:"intermediateSum":b.y},pointAttribs:function(a,h){var d=this.options.upColor;d&&!a.options.color&&(a.color=0<a.y?d:null);a=b.column.prototype.pointAttribs.call(this,a,h);delete a.dashstyle;return a},getGraphPath:function(){return["M",0,0]},getCrispPath:function(){var b=
this.data,a=b.length,e=this.graph.strokeWidth()+this.borderWidth,e=Math.round(e)%2/2,n=[],c,g,l;for(l=1;l<a;l++)g=b[l].shapeArgs,c=b[l-1].shapeArgs,g=["M",c.x+c.width,c.y+e,"L",g.x,c.y+e],0>b[l-1].y&&(g[2]+=c.height,g[5]+=c.height),n=n.concat(g);return n},drawGraph:function(){r.prototype.drawGraph.call(this);this.graph.attr({d:this.getCrispPath()})},getExtremes:a.noop},{getClassName:function(){var b=q.prototype.getClassName.call(this);this.isSum?b+=" highcharts-sum":this.isIntermediateSum&&(b+=" highcharts-intermediate-sum");
return b},isValid:function(){return u(this.y,!0)||this.isSum||this.isIntermediateSum}})})(x);(function(a){var t=a.Series,u=a.seriesType,w=a.seriesTypes;u("polygon","scatter",{marker:{enabled:!1,states:{hover:{enabled:!1}}},stickyTracking:!1,tooltip:{followPointer:!0,pointFormat:""},trackByArea:!0},{type:"polygon",getGraphPath:function(){for(var a=t.prototype.getGraphPath.call(this),r=a.length+1;r--;)(r===a.length||"M"===a[r])&&0<r&&a.splice(r,0,"z");return this.areaPath=a},drawGraph:function(){this.options.fillColor=
this.color;w.area.prototype.drawGraph.call(this)},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawTracker:t.prototype.drawTracker,setStackedPoints:a.noop})})(x);(function(a){var t=a.arrayMax,u=a.arrayMin,w=a.Axis,q=a.color,r=a.each,e=a.isNumber,b=a.noop,d=a.pick,h=a.pInt,k=a.Point,n=a.Series,c=a.seriesType,g=a.seriesTypes;c("bubble","scatter",{dataLabels:{formatter:function(){return this.point.z},inside:!0,verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1,radius:null,states:{hover:{radiusPlus:0}}},
minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],bubblePadding:!0,zoneAxis:"z",markerAttribs:null,pointAttribs:function(b,a){var c=d(this.options.marker.fillOpacity,.5);b=n.prototype.pointAttribs.call(this,b,a);1!==c&&(b.fill=q(b.fill).setOpacity(c).get("rgba"));return b},getRadii:function(b,
a,d,c){var f,h,e,l=this.zData,g=[],m=this.options,k="width"!==m.sizeBy,n=m.zThreshold,p=a-b;h=0;for(f=l.length;h<f;h++)e=l[h],m.sizeByAbsoluteValue&&null!==e&&(e=Math.abs(e-n),a=Math.max(a-n,Math.abs(b-n)),b=0),null===e?e=null:e<b?e=d/2-1:(e=0<p?(e-b)/p:.5,k&&0<=e&&(e=Math.sqrt(e)),e=Math.ceil(d+e*(c-d))/2),g.push(e);this.radii=g},animate:function(b){var a=this.options.animation;b||(r(this.points,function(b){var d=b.graphic;b=b.shapeArgs;d&&b&&(d.attr("r",1),d.animate({r:b.r},a))}),this.animate=null)},
translate:function(){var b,a=this.data,d,c,h=this.radii;g.scatter.prototype.translate.call(this);for(b=a.length;b--;)d=a[b],c=h?h[b]:0,e(c)&&c>=this.minPxSize/2?(d.shapeType="circle",d.shapeArgs={x:d.plotX,y:d.plotY,r:c},d.dlBox={x:d.plotX-c,y:d.plotY-c,width:2*c,height:2*c}):d.shapeArgs=d.plotY=d.dlBox=void 0},drawLegendSymbol:function(b,a){var d=this.chart.renderer,c=d.fontMetrics(b.itemStyle.fontSize).f/2;a.legendSymbol=d.circle(c,b.baseline-c,c).attr({zIndex:3}).add(a.legendGroup);a.legendSymbol.isMarker=
!0},drawPoints:g.column.prototype.drawPoints,alignDataLabel:g.column.prototype.alignDataLabel,buildKDTree:b,applyZones:b},{haloPath:function(){return k.prototype.haloPath.call(this,this.shapeArgs.r+this.series.options.states.hover.halo.size)},ttBelow:!1});w.prototype.beforePadding=function(){var b=this,a=this.len,c=this.chart,g=0,k=a,n=this.isXAxis,q=n?"xData":"yData",w=this.min,x={},A=Math.min(c.plotWidth,c.plotHeight),C=Number.MAX_VALUE,D=-Number.MAX_VALUE,E=this.max-w,z=a/E,F=[];r(this.series,
function(a){var e=a.options;!a.bubblePadding||!a.visible&&c.options.chart.ignoreHiddenSeries||(b.allowZoomOutside=!0,F.push(a),n&&(r(["minSize","maxSize"],function(b){var a=e[b],d=/%$/.test(a),a=h(a);x[b]=d?A*a/100:a}),a.minPxSize=x.minSize,a.maxPxSize=x.maxSize,a=a.zData,a.length&&(C=d(e.zMin,Math.min(C,Math.max(u(a),!1===e.displayNegative?e.zThreshold:-Number.MAX_VALUE))),D=d(e.zMax,Math.max(D,t(a))))))});r(F,function(a){var d=a[q],c=d.length,h;n&&a.getRadii(C,D,a.minPxSize,a.maxPxSize);if(0<E)for(;c--;)e(d[c])&&
b.dataMin<=d[c]&&d[c]<=b.dataMax&&(h=a.radii[c],g=Math.min((d[c]-w)*z-h,g),k=Math.max((d[c]-w)*z+h,k))});F.length&&0<E&&!this.isLog&&(k-=a,z*=(a+g-k)/a,r([["min","userMin",g],["max","userMax",k]],function(a){void 0===d(b.options[a[0]],b[a[1]])&&(b[a[0]]+=a[2]/z)}))}})(x);(function(a){function t(b,a){var d=this.chart,e=this.options.animation,n=this.group,c=this.markerGroup,g=this.xAxis.center,l=d.plotLeft,p=d.plotTop;d.polar?d.renderer.isSVG&&(!0===e&&(e={}),a?(b={translateX:g[0]+l,translateY:g[1]+
p,scaleX:.001,scaleY:.001},n.attr(b),c&&c.attr(b)):(b={translateX:l,translateY:p,scaleX:1,scaleY:1},n.animate(b,e),c&&c.animate(b,e),this.animate=null)):b.call(this,a)}var u=a.each,w=a.pick,q=a.seriesTypes,r=a.wrap,e=a.Series.prototype;a=a.Pointer.prototype;e.searchPointByAngle=function(b){var a=this.chart,e=this.xAxis.pane.center;return this.searchKDTree({clientX:180+-180/Math.PI*Math.atan2(b.chartX-e[0]-a.plotLeft,b.chartY-e[1]-a.plotTop)})};r(e,"buildKDTree",function(b){this.chart.polar&&(this.kdByAngle?
this.searchPoint=this.searchPointByAngle:this.kdDimensions=2);b.apply(this)});e.toXY=function(b){var a,e=this.chart,k=b.plotX;a=b.plotY;b.rectPlotX=k;b.rectPlotY=a;a=this.xAxis.postTranslate(b.plotX,this.yAxis.len-a);b.plotX=b.polarPlotX=a.x-e.plotLeft;b.plotY=b.polarPlotY=a.y-e.plotTop;this.kdByAngle?(e=(k/Math.PI*180+this.xAxis.pane.options.startAngle)%360,0>e&&(e+=360),b.clientX=e):b.clientX=b.plotX};q.spline&&r(q.spline.prototype,"getPointSpline",function(b,a,e,k){var d,c,g,h,p,f,m;this.chart.polar?
(d=e.plotX,c=e.plotY,b=a[k-1],g=a[k+1],this.connectEnds&&(b||(b=a[a.length-2]),g||(g=a[1])),b&&g&&(h=b.plotX,p=b.plotY,a=g.plotX,f=g.plotY,h=(1.5*d+h)/2.5,p=(1.5*c+p)/2.5,g=(1.5*d+a)/2.5,m=(1.5*c+f)/2.5,a=Math.sqrt(Math.pow(h-d,2)+Math.pow(p-c,2)),f=Math.sqrt(Math.pow(g-d,2)+Math.pow(m-c,2)),h=Math.atan2(p-c,h-d),p=Math.atan2(m-c,g-d),m=Math.PI/2+(h+p)/2,Math.abs(h-m)>Math.PI/2&&(m-=Math.PI),h=d+Math.cos(m)*a,p=c+Math.sin(m)*a,g=d+Math.cos(Math.PI+m)*f,m=c+Math.sin(Math.PI+m)*f,e.rightContX=g,e.rightContY=
m),k?(e=["C",b.rightContX||b.plotX,b.rightContY||b.plotY,h||d,p||c,d,c],b.rightContX=b.rightContY=null):e=["M",d,c]):e=b.call(this,a,e,k);return e});r(e,"translate",function(b){var a=this.chart;b.call(this);if(a.polar&&(this.kdByAngle=a.tooltip&&a.tooltip.shared,!this.preventPostTranslate))for(b=this.points,a=b.length;a--;)this.toXY(b[a])});r(e,"getGraphPath",function(b,a){var d=this,e,n;if(this.chart.polar){a=a||this.points;for(e=0;e<a.length;e++)if(!a[e].isNull){n=e;break}!1!==this.options.connectEnds&&
void 0!==n&&(this.connectEnds=!0,a.splice(a.length,0,a[n]));u(a,function(b){void 0===b.polarPlotY&&d.toXY(b)})}return b.apply(this,[].slice.call(arguments,1))});r(e,"animate",t);q.column&&(q=q.column.prototype,q.polarArc=function(b,a,e,k){var d=this.xAxis.center,c=this.yAxis.len;return this.chart.renderer.symbols.arc(d[0],d[1],c-a,null,{start:e,end:k,innerR:c-w(b,c)})},r(q,"animate",t),r(q,"translate",function(b){var a=this.xAxis,e=a.startAngleRad,k,n,c;this.preventPostTranslate=!0;b.call(this);if(a.isRadial)for(k=
this.points,c=k.length;c--;)n=k[c],b=n.barX+e,n.shapeType="path",n.shapeArgs={d:this.polarArc(n.yBottom,n.plotY,b,b+n.pointWidth)},this.toXY(n),n.tooltipPos=[n.plotX,n.plotY],n.ttBelow=n.plotY>a.center[1]}),r(q,"alignDataLabel",function(a,d,h,k,n,c){this.chart.polar?(a=d.rectPlotX/Math.PI*180,null===k.align&&(k.align=20<a&&160>a?"left":200<a&&340>a?"right":"center"),null===k.verticalAlign&&(k.verticalAlign=45>a||315<a?"bottom":135<a&&225>a?"top":"middle"),e.alignDataLabel.call(this,d,h,k,n,c)):a.call(this,
d,h,k,n,c)}));r(a,"getCoordinates",function(a,d){var b=this.chart,e={xAxis:[],yAxis:[]};b.polar?u(b.axes,function(a){var c=a.isXAxis,g=a.center,h=d.chartX-g[0]-b.plotLeft,g=d.chartY-g[1]-b.plotTop;e[c?"xAxis":"yAxis"].push({axis:a,value:a.translate(c?Math.PI-Math.atan2(h,g):Math.sqrt(Math.pow(h,2)+Math.pow(g,2)),!0)})}):e=a.call(this,d);return e})})(x)});

/*
  Highcharts JS v5.0.2 (2016-10-26)
 Solid angular gauge module

 (c) 2010-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(l){"object"===typeof module&&module.exports?module.exports=l:l(Highcharts)})(function(l){(function(f){var l=f.pInt,u=f.pick,m=f.each,v=f.isNumber,n;n={initDataClasses:function(a){var c=this,d=this.chart,e,t=0,h=this.options;this.dataClasses=e=[];m(a.dataClasses,function(g,b){g=f.merge(g);e.push(g);g.color||("category"===h.dataClassColor?(b=d.options.colors,g.color=b[t++],t===b.length&&(t=0)):g.color=c.tweenColors(f.color(h.minColor),f.color(h.maxColor),b/(a.dataClasses.length-1)))})},initStops:function(a){this.stops=
a.stops||[[0,this.options.minColor],[1,this.options.maxColor]];m(this.stops,function(a){a.color=f.color(a[1])})},toColor:function(a,c){var d=this.stops,e,f,h=this.dataClasses,g,b;if(h)for(b=h.length;b--;){if(g=h[b],e=g.from,d=g.to,(void 0===e||a>=e)&&(void 0===d||a<=d)){f=g.color;c&&(c.dataClass=b);break}}else{this.isLog&&(a=this.val2lin(a));a=1-(this.max-a)/(this.max-this.min);for(b=d.length;b--&&!(a>d[b][0]););e=d[b]||d[b+1];d=d[b+1]||e;a=1-(d[0]-a)/(d[0]-e[0]||1);f=this.tweenColors(e.color,d.color,
a)}return f},tweenColors:function(a,c,d){var e;c.rgba.length&&a.rgba.length?(a=a.rgba,c=c.rgba,e=1!==c[3]||1!==a[3],a=(e?"rgba(":"rgb(")+Math.round(c[0]+(a[0]-c[0])*(1-d))+","+Math.round(c[1]+(a[1]-c[1])*(1-d))+","+Math.round(c[2]+(a[2]-c[2])*(1-d))+(e?","+(c[3]+(a[3]-c[3])*(1-d)):"")+")"):a=c.input||"none";return a}};m(["fill","stroke"],function(a){f.Fx.prototype[a+"Setter"]=function(){this.elem.attr(a,n.tweenColors(f.color(this.start),f.color(this.end),this.pos))}});f.seriesType("solidgauge","gauge",
{colorByPoint:!0},{bindAxes:function(){var a;f.seriesTypes.gauge.prototype.bindAxes.call(this);a=this.yAxis;f.extend(a,n);a.options.dataClasses&&a.initDataClasses(a.options);a.initStops(a.options)},drawPoints:function(){var a=this,c=a.yAxis,d=c.center,e=a.options,f=a.chart.renderer,h=e.overshoot,g=v(h)?h/180*Math.PI:0;m(a.points,function(b){var h=b.graphic,k=c.startAngleRad+c.translate(b.y,null,null,null,!0),m=l(u(b.options.radius,e.radius,100))*d[2]/200,p=l(u(b.options.innerRadius,e.innerRadius,
60))*d[2]/200,q=c.toColor(b.y,b),r=Math.min(c.startAngleRad,c.endAngleRad),n=Math.max(c.startAngleRad,c.endAngleRad);"none"===q&&(q=b.color||a.color||"none");"none"!==q&&(b.color=q);k=Math.max(r-g,Math.min(n+g,k));!1===e.wrap&&(k=Math.max(r,Math.min(n,k)));r=Math.min(k,c.startAngleRad);k=Math.max(k,c.startAngleRad);k-r>2*Math.PI&&(k=r+2*Math.PI);b.shapeArgs=p={x:d[0],y:d[1],r:m,innerR:p,start:r,end:k,fill:q};b.startR=m;h?(b=p.d,h.animate(p),b&&(p.d=b)):(b.graphic=f.arc(p).addClass("highcharts-point").attr({fill:q,
"sweep-flag":0}).add(a.group),"square"!==e.linecap&&b.graphic.attr({"stroke-linecap":"round","stroke-linejoin":"round"}),b.graphic.attr({stroke:e.borderColor||"none","stroke-width":e.borderWidth||0}))})},animate:function(a){a||(this.startAngleRad=this.yAxis.startAngleRad,f.seriesTypes.pie.prototype.animate.call(this,a))}})})(l)});

angular.module('incidentMgmt').directive('appHeader', function ($state,$rootScope) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                headerTitle: '@',
                backBtnEnabled : '='
            },
            templateUrl: 'src/components/header/header.template.html',
            link:function(scope){
                scope.goBack = function(){
                    $state.go($rootScope.previousState)
                }

                scope.getClass = function(){
                    if(scope.backBtnEnabled){
                       return 'page-title-left'
                    }else{
                        return 'page-title-right'
                    }
                }
            }
        };
    });


angular.module('incidentMgmt')
    .service('api', function ($http, $q) {

        var apiService = {
            getData: function (url, args, headers) {
                var returnData = $q.defer();
                $http({
                    url: url ,
                    method: 'GET',
                    params: args,
                    headers: headers
                })
                    .then(function (data) {
                        returnData.resolve(data);
                    }, function (error) {
                        returnData.reject(error);
                    });
                return returnData.promise;
            },
            postData: function (url, data, args, headers) {
                var returnData = $q.defer();
                if(!headers){
                headers = { "Content-Type": "application/json; charset=UTF-8" }
                }
                $http({
                    url: url ,
                    method: 'POST',
                    data: data,
                    params: args,
                    headers: headers
                })
                    .then(function (data) {
                        returnData.resolve(data);
                    }, function (error) {
                        returnData.reject(error);
                    });
                return returnData.promise;
            }
        }
          return apiService;

    });

angular.module('incidentMgmt').directive('incidentDetails', function ($state,api) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            location: '=',
            stages: '=',
            currentStage: '='
        },
        templateUrl: 'src/incident/components/incident-details/incident-details.template.html',
        link: function (scope) {
            var ip = 'http://192.168.43.174/';
            var temp,humidity;

            scope.incident = $state.params.incident;
            var list = [
                {
                    id: 2,
                    context: 'dangerous',
                    option: 'Are all dangerous parts of the machinery guarded?'
                },
                {
                    id: 3,
                    context: 'turbine',
                    option: 'Do guards permit an adequate view of the operation where this is necessary?'
                },
                {
                    id: 4,
                    context: 'power',
                    option: 'Are all guards of good construction, adequate strength and well maintained?'
                },
                {
                    id: 5,
                    context: 'safety',
                    option: 'Is it difficult to bypass or disable guards?'
                },
                {
                    id: 7,
                    context: 'equipments',
                    option: 'Can the machinery only be started when a specific labelled start device is used? '
                },
                {
                    id: 6,
                    context: 'safety',
                    option: 'Is it impossible to start the machine just by resetting a safety device?'
                },
                {
                    id: 8,
                    context: '',
                    option: 'Is there a readily accessible stop device which stops the machinery in a  safe way?'
                },
                {
                    id: 9,
                    context: '',
                    option: 'Where appropriate is there a prominent easily accessible emergency stop device?'
                },
                {
                    id: 10,
                    context: '',
                    option: 'Can controls be operated safely and easily?'
                },
                {
                    id: 11,
                    context: '',
                    option: 'Is there any system of work which ensures that nobody is in a dangerous position when machinery is about to be started?'
                },
                {
                    id: 12,
                    context: '',
                    option: 'Does the start device need to be activated to restart the machine if the power fails?'
                },
                {
                    id: 13,
                    context: 'compressor',
                    option: 'Does the start device need to be activated to restart the machine if the power is isolated does the machinery come to rest safely without the possibility of access to dangerous parts?'
                },
                {
                    id: 14,
                    context: 'leakage',
                    option: 'Can the equipment be securely isolated from power, to prevent inadvertent reconnection by removing a plug from a socket which is easily visible to the person at risk?'
                },
                {
                    id: 15,
                    context: '',
                    option: 'Can the equipment be securely isolated from power, to prevent inadvertent reconnection by locking it off?'
                }
            ];
            scope.incident.checkList = [];
            for(var i=0;i<list.length;i++){
                 if(scope.incident.id%2 === 0 && i%2 ===0){
                     scope.incident.checkList.push(list[i]);
                 }
                if(scope.incident.id %2 !== 0 && i%2 !==0){
                    scope.incident.checkList.push(list[i]);
                }
            }


            scope.recommendations = [];
            var url = 'https://contextual-app-dev.run.aws-usw02-pr.ice.predix.io/getSentanceByContext';

            /*Get the checkbox status and display recommendations for those*/

            scope.check = false;
            scope.checkAll = function (isChecked, item) {
                if (isChecked) {
                    var param = {
                        contextId : item.context
                    };
                    scope.recommendations[scope.recommendations.length]  ={
                        option : item.option,
                        id : item.id
                    };
                    api.getData(url,param).then(function(res){
                        var contextualHelp = res.data.contextual;
                        if(contextualHelp){
                            for(var i=0 ;i< contextualHelp.length ;i++){
                                scope.recommendations[ scope.recommendations.length] = {
                                     option :  item.option,
                                     help : contextualHelp[i],
                                     id : item.id
                                }
                            }
                        }
                    });
                } else {
                    for (var i = scope.recommendations.length - 1; i >= 0; i--) {
                        if (scope.recommendations[i].option === item.option) {
                            scope.recommendations.splice(i, 1);
                        }
                    }
                }

            };

            scope.markComplete = function () {

                for (var i = 0; i < scope.stages.length; i++) {
                    if (scope.currentStage.title === scope.stages[i].title) {
                        scope.stages[i].isComplete = true;
                    }
                }
            };

            scope.saveIncidentDetails = function() {
                var saveObservationUrl = 'https://cg-incident-service-1.run.aws-usw02-pr.ice.predix.io/saveObservation';
                var param = [];
                var obj = {};
                obj.incidentId = scope.incident.id;
                if (scope.location) {
                    obj.latitude = String(scope.location.lat);
                    obj.longitude = String(scope.location.long);
                }
                obj.Impact = scope.incident.impact;
                obj.Type = 'PROBLEM';
                obj.option = 'test';
                var tempObservationArray = [];
                for(var i=0;i<scope.recommendations.length;i++){
                    tempObservationArray[i] = scope.recommendations[i].id;
                }
                obj.observationIds = tempObservationArray.join();
                param.push(obj);

                api.postData(saveObservationUrl,param).then(function(res){
                   if(res.data){
                       for (var i = 0; i < scope.stages.length; i++) {
                           if (scope.currentStage.title === scope.stages[i].title) {
                               scope.stages[i].isComplete = true;
                           }
                       }
                       scope.currentStage = scope.stages[1];
                   }
                });

            };

            if (navigator.geolocation) {
                var timeoutVal = 1000000;
                navigator.geolocation.getCurrentPosition(
                    displayPosition,
                    displayError,
                    { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
                );
            }
            else {
                console.log("Geolocation is not supported by this browser");
            }

            function displayPosition(data) {
                console.log(JSON.stringify(data));
                scope.location = {lat: data.coords.latitude, long: data.coords.longitude};
                scope.$apply();
            }

            function displayError(error) {
                var errors = {
                    1: 'Permission denied',
                    2: 'Position unavailable',
                    3: 'Request timeout'
                };
                alert("Error: " + errors[error.code]);
            }

            setInterval(function() {
                readParams();
            }, 5000);

            function readParams() {
                api.getData(ip + 'gettemp').then(function (res) {

                    scope.temp = parseFloat(res.data);
                    scope.tempChartConfig = {
                        options: {
                            chart: {
                                type: 'solidgauge'
                            },
                            pane: {
                                center: ['50%', '85%'],
                                size: '100%',
                                startAngle: -90,
                                endAngle: 90,
                                background: {
                                    backgroundColor: '#EEE',
                                    innerRadius: '60%',
                                    outerRadius: '100%',
                                    shape: 'arc'
                                }
                            },
                            solidgauge: {
                                dataLabels: {
                                    y: -30,
                                    borderWidth: 0,
                                    useHTML: true
                                }
                            }
                        },
                        series: [{
                            data: [scope.temp],
                            dataLabels: {
                                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                                '<span style="font-size:12px;color:silver">Celsius</span></div>'
                            },
                        }],
                        title: {
                            text: 'Temperature',
                            y: 140
                        },
                        yAxis: {
                            currentMin: 0,
                            currentMax: 100,
                            title: {
                                y: 0
                            },
                            stops: [
                                [0.1, '#DF5353'], // red
                                [0.5, '#DDDF0D'], // yellow
                                [0.9, '#55BF3B'] // green
                            ],
                            lineWidth: 0,
                            tickInterval: 20,
                            tickPixelInterval: 400,
                            tickWidth: 0,
                            labels: {
                                y: 15
                            }
                        },
                        loading: false
                    }

                });


                api.getData(ip + 'gethumidity').then(function (res) {
                    scope.humidity = parseFloat(res.data);
                    scope.humidityChartConfig = {
                        options: {
                            chart: {
                                type: 'solidgauge'
                            },
                            pane: {
                                center: ['50%', '85%'],
                                size: '100%',
                                startAngle: -90,
                                endAngle: 90,
                                background: {
                                    backgroundColor: '#EEE',
                                    innerRadius: '60%',
                                    outerRadius: '100%',
                                    shape: 'arc'
                                }
                            },
                            solidgauge: {
                                dataLabels: {
                                    y: -30,
                                    borderWidth: 0,
                                    useHTML: true
                                }
                            }
                        },
                        series: [{
                            data: [scope.humidity],
                            dataLabels: {
                                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                                '<span style="font-size:12px;color:silver">Percentage</span></div>'
                            },
                        }],
                        title: {
                            text: 'Humidity',
                            y: 140
                        },
                        yAxis: {
                            currentMin: 0,
                            currentMax: 100,
                            title: {
                                y: 0
                            },
                            stops: [
                                [0.1, '#DF5353'], // red
                                [0.5, '#DDDF0D'], // yellow
                                [0.9, '#55BF3B'] // green
                            ],
                            lineWidth: 0,
                            tickInterval: 20,
                            tickPixelInterval: 400,
                            tickWidth: 0,
                            labels: {
                                y: 15
                            }
                        },
                        loading: false
                    }
                });
            }
        }
    }
});


angular.module('incidentMgmt').directive('incidentList', function ($state,api) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'src/incident/components/incident-list/incident-list.template.html',
        link:function(scope){
            var incidentUrl = 'https://dt-incident-microservice-hack.run.aws-usw02-pr.ice.predix.io/service/incident/list';
            var param = {
                ssoId: 502437175
            };
            api.getData(incidentUrl,param).then(function(res){
                scope.incidentList = res.data;
            });

            scope.goToIncidentDetails = function(incident){
                $state.go('details',{incident:incident});
            };
            
        }
    };
});

angular.module('incidentMgmt').directive('incidentStages', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            stages: '=',
            currentStage: '='
        },
        templateUrl: 'src/incident/components/incident-stages/incident-stages.template.html',
        link: function (scope) {
            scope.goToNextStage = function (index) {
                if (index !== 0) {
                    var previousStage = scope.stages[index - 1];
                    if (previousStage.isComplete) {
                        scope.currentStage = scope.stages[index];
                    }
                } else {
                    scope.currentStage = scope.stages[0];
                }
            };

            scope.getStatus = function (stage) {
                if (stage.title === scope.currentStage.title) {
                    return 'active';
                } else if (stage.isComplete) {
                    return 'completed';
                }
            }
        }
    }
});

angular.module('incidentMgmt')
    .controller('IncidentDetailsCtrl', function ($scope) {

        $scope.stages = [
            {state: 'stage1', title: 'Preparation', isComplete: false},
            {state: 'stage2', title: 'Detection Analysis', isComplete: false},
            {state: 'stage3', title: 'Containment Eradication', isComplete: false},
            {state: 'stage4', title: 'Post-Incident Activity', isComplete: false}
        ];
        $scope.currentStage = $scope.stages[0];

    });
angular.module('incidentMgmt').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/about/about.view.html',
    "<div><h2>Team Members</h2><p>Capgemini Team</p></div>"
  );


  $templateCache.put('src/components/header/header.template.html',
    "<div class=\"row middle-xs app-header\"><div class=\"col-xs-3 col-sm-3\"><button class=\"navbar-button btn btn--bare float--left\" ng-show=backBtnEnabled ng-click=goBack()><i class=\"fa fa-chevron-left\"></i></button></div><div class=col-xs-5><h2 class=\"text--center page-title\">{{headerTitle}}</h2></div><div class=col-xs-4><img class=\"logo-brand pull-right\" src=assets/images/logo.png><label class=app-name style=color:white>Smart Field Services Ops</label></div></div>"
  );


  $templateCache.put('src/incident/components/incident-details/incident-details.template.html',
    "<div class=\"list-card list-card--incident-details\"><div ng-switch=currentStage.state><div ng-switch-when=stage1><div class=row><p class=\"col-xs-12 col-sm-7 label\" style=font-size:24px>{{incident.incidentName}}</p><p class=\"col-xs-12 col-sm-5 text--right\" style=font-size:18px><span style=\"font-weight: 600\">Submitted On: </span><span>{{incident.createdDate | date:'dd MMM yyyy hh:mm'}}</span></p></div><div class=row><div class=col-xs-6 style=padding-left:30px><p ng-if=location><span class=label>Latitue :</span> <span class=val n>{{location.lat}}</span></p></div><div class=col-xs-6><p ng-if=location><span class=label>Longitude : </span><span class=val>{{location.long}}</span></p></div></div><div class=row><div class=col-xs-12><p style=padding-left:16px><span class=label>Status : </span><span class=val>{{incident.incidentStatus}}</span></p></div><div class=\"col-xs-12 col-sm-6\" style=padding-left:30px><div class=details-impact><p class=label>Impact</p><select ng-model=incident.impact><option>Low</option><option>Medium</option><option>High</option></select></div></div><div class=\"col-xs-12 col-sm-6\"><div class=details-urgency><p class=label>Urgency</p><select ng-model=incident.urgency><option value=Low>Low</option><option value=Medium>Medium</option><option value=High>High</option></select></div></div></div><div class=\"row sensor-data\" ng-if=\"temp || humidity\"><div class=col-sm-12><highchart id=humidity config=tempChartConfig class=span10></highchart></div></div><div class=row><div class=\"col-xs-12 col-sm-6 checklist\" style=padding-left:30px><p class=label>Select Observation</p><div class=incident-checkbox ng-repeat=\"item in incident.checkList track by $index\"><label class=val><input type=checkbox ng-model=check ng-change=checkAll(check,item)> {{item.option}}</label></div></div><div class=\"col-xs-12 col-sm-6\" ng-if=recommendations.length><p class=label>Recommendations</p><p class=val ng-repeat=\"item in recommendations track by $index\">{{item.help}}</p></div></div><div class=gradient></div></div><div ng-switch-when=stage2 style=maring-top:20px>{{currentStage.title}}</div><div ng-switch-when=stage3 style=marin-top:20px>{{currentStage.title}}</div></div><div class=\"row incident-footer\"><div class=\"col-xs-12 col-sm-6 footer-btn\"><button class=\"btn btn--primary\" ng-click=saveIncidentDetails()>Save Changes</button></div><div class=\"col-xs-12 col-sm-6 footer-btn\"><button class=\"btn btn--primary\" ng-click=markComplete()>Complete Stage</button></div></div></div>"
  );


  $templateCache.put('src/incident/components/incident-list/incident-list.template.html',
    "<div class=\"list-card list-card--incident\" ng-repeat=\"incident in incidentList track by $index\" ng-click=goToIncidentDetails(incident)><header class=list-card__header><h4 class=list-card__header-title>{{incident.incidentName}}</h4></header><div><p>Type: {{incident.incidentStatus}}</p></div></div>"
  );


  $templateCache.put('src/incident/components/incident-stages/incident-stages.template.html',
    "<div class=\"row center-xs\"><ul class=breadcrumb><li ng-repeat=\"stage in stages track by $index\" ng-click=goToNextStage($index) ng-class=getStatus(stage)><a><span>{{stage.title}}</span></a></li></ul></div>"
  );


  $templateCache.put('src/incident/incident-details.view.html',
    "<div style=background:#FFFFFF><app-header data-header-title=\"Incidents Details\" data-back-btn-enabled=true data-back-fn=goBack()></app-header><incident-stages data-stages=stages data-current-stage=currentStage></incident-stages><incident-details location=coords data-stages=stages data-current-stage=currentStage></incident-details></div>"
  );


  $templateCache.put('src/incident/incident.view.html',
    "<div style=background:#E4E4EA><app-header data-header-title=Incidents data-back-btn-enabled=false></app-header><incident-list></incident-list><!-- <div class=\"row text--center\">\n" +
    "        <button class=\"btn btn--primary col-xs-4\">Assets Information</button>\n" +
    "        <button class=\"btn btn--primary col-xs-4\">Scan</button>\n" +
    "    </div> --></div>"
  );

}]);
