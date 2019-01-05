

// https://gionkunz.github.io/chartist-js/index.html
$(document).ready(function(){
  setTimeout(function(){    
    $('.loader').hide();
    $('.content-temp').show();
    $('.content-switch').show();
  }, 1000);
  // read data from jsons
  var $current = {"inside": 29.875, "dt": "2015-12-13 11:46:03.577744", "outside": 6.375};
  
  var $temperatures = [{"t_in":"18.437","t_out":null,"recorded_time":"2015-12-12 20:00:03"},{"t_in":"20.500","t_out":"5.937","recorded_time":"2015-12-12 21:00:03"},{"t_in":"21.625","t_out":"5.312","recorded_time":"2015-12-12 22:00:03"},{"t_in":"21.750","t_out":"4.625","recorded_time":"2015-12-12 23:00:03"},{"t_in":"21.187","t_out":"4.937","recorded_time":"2015-12-13 00:00:03"},{"t_in":"20.375","t_out":"5.125","recorded_time":"2015-12-13 01:00:03"},{"t_in":"19.875","t_out":"5.187","recorded_time":"2015-12-13 02:00:03"},{"t_in":"19.625","t_out":"5.250","recorded_time":"2015-12-13 03:00:03"},{"t_in":"19.062","t_out":"5.500","recorded_time":"2015-12-13 04:00:03"},{"t_in":"18.687","t_out":"5.437","recorded_time":"2015-12-13 05:00:03"},{"t_in":"18.500","t_out":"5.437","recorded_time":"2015-12-13 06:00:03"},{"t_in":"18.250","t_out":"5.062","recorded_time":"2015-12-13 07:00:03"},{"t_in":"18.000","t_out":"4.000","recorded_time":"2015-12-13 08:00:03"},{"t_in":"17.750","t_out":"3.750","recorded_time":"2015-12-13 09:00:03"},{"t_in":"19.250","t_out":"4.500","recorded_time":"2015-12-13 10:00:03"},{"t_in":"20.125","t_out":"5.625","recorded_time":"2015-12-13 11:00:03"},{"t_in":"19.812","t_out":"6.625","recorded_time":"2015-12-13 12:00:03"},{"t_in":"19.437","t_out":"7.562","recorded_time":"2015-12-13 13:00:03"},{"t_in":"17.937","t_out":"8.750","recorded_time":"2015-12-13 14:00:03"},{"t_in":"17.625","t_out":"11.000","recorded_time":"2015-12-13 15:00:03"},{"t_in":"17.500","t_out":"13.125","recorded_time":"2015-12-13 16:00:03"},{"t_in":"18.625","t_out":"9.687","recorded_time":"2015-12-13 17:00:03"},{"t_in":"21.312","t_out":"8.187","recorded_time":"2015-12-13 18:00:03"},{"t_in":"21.500","t_out":"7.500","recorded_time":"2015-12-13 19:00:03"}];
  // use the data
  var inside = (Math.round($current.inside * 10) / 10);
  var outside = (Math.round($current.outside * 10) / 10);
  
  var in_color = 'red';
  var out_color = 'blue';
  
  $('.temp_in .temp').html(inside);
  $('.temp_out .temp').html(outside);
  
 
  
  
  //  COLOR bg 
  
  if (ColorMix) {
        ColorMix.setGradient([
            {
                reference: -30,
                color: {
                    red: 20,
                    green: 0,
                    blue: 255
                }
            }, {
                reference: -27.5,
                color: {
                    red: 20,
                    green: 0,
                    blue: 255
                }
            }, {
                reference: -25,
                color: {
                    red: 20,
                    green: 0,
                    blue: 255
                }
            }, {
                reference: -22.5,
                color: {
                    red: 0,
                    green: 35,
                    blue: 255
                }
            }, {
                reference: -20,
                color: {
                    red: 0,
                    green: 35,
                    blue: 255
                }
            }, {
                reference: -17.5,
                color: {
                    red: 0,
                    green: 35,
                    blue: 255
                }
            }, {
                reference: -15,
                color: {
                    red: 0,
                    green: 35,
                    blue: 255
                }
            }, {
                reference: -12.5,
                color: {
                    red: 0,
                    green: 35,
                    blue: 255
                }
            }, {
                reference: -10,
                color: {
                    red: 0,
                    green: 60,
                    blue: 255
                }
            }, {
                reference: -7.5,
                color: {
                    red: 30,
                    green: 83,
                    blue: 255
                }
            }, {
                reference: -5,
                color: {
                    red: 30,
                    green: 128,
                    blue: 255
                }
            }, {
                reference: -2.5,
                color: {
                    red: 68,
                    green: 148,
                    blue: 253
                }
            }, {
                reference: 0,
                color: {
                    red: 95,
                    green: 163,
                    blue: 253
                }
            }, {
                reference: 2.5,
                color: {
                    red: 132,
                    green: 185,
                    blue: 255
                }
            }, {
                reference: 5,
                color: {
                    red: 132,
                    green: 209,
                    blue: 255
                }
            }, {
                reference: 7.5,
                color: {
                    red: 162,
                    green: 231,
                    blue: 255
                }
            }, {
                reference: 10,
                color: {
                    red: 195,
                    green: 247,
                    blue: 255
                }
            }, {
                reference: 12.5,
                color: {
                    red: 225,
                    green: 255,
                    blue: 252
                }
            }, {
                reference: 15,
                color: {
                    red: 255,
                    green: 255,
                    blue: 150
                }
            }, {
                reference: 17.5,
                color: {
                    red: 255,
                    green: 255,
                    blue: 88
                }
            }, {
                reference: 20,
                color: {
                    red: 255,
                    green: 250,
                    blue: 85
                }
            }, {
                reference: 22.5,
                color: {
                    red: 255,
                    green: 217,
                    blue: 85
                }
            }, {
                reference: 25,
                color: {
                    red: 255,
                    green: 200,
                    blue: 0
                }
            }, {
                reference: 27.5,
                color: {
                    red: 238,
                    green: 124,
                    blue: 60
                }
            }, {
                reference: 30,
                color: {
                    red: 241,
                    green: 160,
                    blue: 0
                }
            }, {
                reference: 32.5,
                color: {
                    red: 255,
                    green: 130,
                    blue: 0
                }
            }, {
                reference: 35,
                color: {
                    red: 255,
                    green: 100,
                    blue: 0
                }
            }, {
                reference: 37.5,
                color: {
                    red: 255,
                    green: 60,
                    blue: 0
                }
            }, {
                reference: 40,
                color: {
                    red: 255,
                    green: 0,
                    blue: 0
                }
            }
        ]);
    }
  
  var in_color = ColorMix.blend(inside).toString('rgb');
            
  var out_color = ColorMix.blend(outside).toString('rgb');
  
  $('.temp_in p').css('border-color', in_color);
  
  $('.temp_out p').css('border-color', out_color);
  /* $('.temp_in p').css('box-shadow', '0px 3px 8px ' + in_color + ', inset 0px 2px 3px #fff');*/
  /*$('.temp_out p').css('box-shadow', '0px 3px 8px ' + out_color +', inset 0px 2px 3px #fff');*/
  
  //chart
  var data = {
    // A labels array that can contain any sort of values
    labels: [],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [],
      []
    ]
  };
  $.each($temperatures, function(i, temp){
    var rt = new Date(temp.recorded_time);
            var hours = rt.getHours() > 9 ? rt.getHours() : '0' + rt.getHours();
            var minutes = rt.getMinutes() > 9 ? rt.getMinutes() : '0' + rt.getMinutes();

            data.labels.push(hours + ':' + minutes);

            //inside
            data.series[0].push((Math.round(temp.t_in * 10) / 10));
            //outside
            data.series[1].push((Math.round(temp.t_out * 10) / 10));
  });
  
  
  $('.switch').on('click', function() {
    $('.content-temp').toggle();
    $('.content-chart').toggle();
    setTimeout(function(){
       var chart = new Chartist.Line('.ct-chart', data, {height: '500px', plugins: [
          Chartist.plugins.ctPointLabels({
            textAnchor: 'middle'
          })
        ]});
      }, 4)
  });
  //new Chartist.Line('.ct-chart', data);
});

/* chartist-plugin-pointlabels 0.0.4
 * Copyright © 2015 Gion Kunz
 * Free to use under the WTFPL license.
 * http://www.wtfpl.net/
 */

!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.returnExportsGlobal=b()}):"object"==typeof exports?module.exports=b():a["Chartist.plugins.ctPointLabels"]=b()}(this,function(){return function(a,b,c){"use strict";var d={labelClass:"ct-label",labelOffset:{x:0,y:-10},textAnchor:"middle",labelInterpolationFnc:c.noop};c.plugins=c.plugins||{},c.plugins.ctPointLabels=function(a){return a=c.extend({},d,a),function(b){b instanceof c.Line&&b.on("draw",function(b){"point"===b.type&&b.group.elem("text",{x:b.x+a.labelOffset.x,y:b.y+a.labelOffset.y,style:"text-anchor: "+a.textAnchor},a.labelClass).text(a.labelInterpolationFnc(void 0===b.value.x?b.value.y:b.value.x+", "+b.value.y))})}}}(window,document,Chartist),Chartist.plugins.ctPointLabels});
//# sourceMappingURL=chartist-plugin-pointlabels.min.js.map