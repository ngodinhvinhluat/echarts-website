/*
title: Simple Gauge
titleCN: 带标签数字动画的基础仪表盘
category: gauge
difficulty: 1
*/

option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [{
        name: 'Pressure',
        type: 'gauge',
        detail: {
            valueAnimation: true,
            formatter: '{value}'
        },
        data: [{
            value: 50,
            name: 'SCORE'
        }]
    }]
};