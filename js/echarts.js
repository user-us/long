function echartss(){
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    option = {
        color:['#DA7A57','#E9AA66'],
    xAxis: {
        type: 'category',
        data: ['Mar-00', 'Jun-00', 'Sep-00', 'Dec-00', 'Mar-01', 'Jun-01', 'Sep-01', 'Dec-01', 'Mar-02', 'Jun-02', 'Sep-02', 'Dec-02', 'Mar-03', 'Jun-03', 'Sep-03', 'Dec-03', 'Mar-04', 'Jun-04', 'Sep-04', 'Dec-04', 'Mar-05', 'Jun-05', 'Sep-05', 'Dec-05', 'Mar-06', 'Jun-06', 'Sep-06', 'Dec-06', 'Mar-07', 'Jun-07', 'Sep-07', 'Dec-07', 'Mar-08', 'Jun-08', 'Sep-08', 'Dec-08', 'Mar-09', 'Jun-09', 'Sep-09', 'Dec-09', 'Mar-10', 'Jun-10', 'Sep-10', 'Dec-10', 'Mar-11', 'Jun-11', 'Sep-11', 'Dec-11', 'Mar-12', 'Jun-12', 'Sep-12', 'Dec-12', 'Mar-13', 'Jun-13', 'Sep-13', 'Dec-13', 'Mar-14', 'Jun-14', 'Sep-14', 'Dec-14', 'Mar-15', 'Jun-15', 'Sep-15', 'Dec-15', 'Mar-16', 'Jun-16', 'Sep-16', 'Dec-16', 'Mar-17', 'Jun-17', 'Sep-17']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        }
    },
    series: [{
            name: 'China',
            type: 'line',
            symbol:'none',
            data: [0.3, 0.8, 0.6, 1.5, 1.8, 1.4, 1.3, 1.7, 2.5, 4, 3.6, 3.9, 4.5, 3.6, 2.6, 2.8, 4, 3.5, 3.4, 5.3, 6, 6,
             7.8, 7.8, 10.9, 9.4, 10.3, 9.6, 11.8, 8.6, 9.1, 8.8, 11.3, 9.2, 9.4, 8.9, 10, 7.4, 7.4, 5.7, 6.7, 4.9, 3.9,
              5.5, 4.5, 2.6, 1.7, 2.6, 3.9, 3.5, 0.6, 1.6, 1.8, 1.7, 0.9, -0.1, -0.1, -1.4, -2.8, -3, -2.8, -3.5, -4.4,
               -3.5, -3.4, -5.1, -5, -7.7, -6.1, -8.9, -7.8],
            markPoint: {
                label: {
                    show: true,
                    formatter: '{c}%'
                }
            },
            lineStyle:{
                normal:{
                    width:1
                }
            }
        },
        {
            name: 'Japan',
            type: 'line',
            symbol:'none',
            lineStyle:{
                normal:{
                    width:1
                }
            },
            data: [4.1, 4.4, 4.5, 4.5, 3.4, 4.8, 6.1, 6.4, 6.3, 6.7, 6.6, 7.4, 7.2, 8.5, 8.3, 7.4, 7.1, 7, 6.9, 7.8, 7.1, 7.7, 8, 8.2, 8.8, 9.5, 9.8, 10.5, 10.5, 11.7, 12.3, 12.5, 12.1, 10.6, 10.3, 7.6, 5.6, 5.2, 4.4, 1.9, -0.8, -2.8, -3.9, -4.7, -5.4, -6.1, -8.3, -10.8, -11, -12.6, -10.9, -8.2, -15.7, -15.4, -14.5, -14.8, -14.7, -14.1, -13.9, -13.5, -13.6, -12.6, -12.2, -11.7, -10.7, -9.6, -8.5, -8.4, -8, -7.4, -6.9],
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
}
echartss();

        // 基于准备好的dom，初始化echarts实例
