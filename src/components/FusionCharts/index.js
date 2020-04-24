import React, { useState, useEffect } from 'react';

import './FusionCharts.css';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

export function StaticChart() {
    const chartData = [
        {
          label: "Venezuela",
          value: "290"
        },
        {
          label: "Saudi",
          value: "260"
        },
        {
          label: "Canada",
          value: "180"
        },
        {
          label: "Iran",
          value: "140"
        },
        {
          label: "Russia",
          value: "115"
        },
        {
          label: "UAE",
          value: "100"
        },
        {
          label: "US",
          value: "30"
        },
        {
          label: "China",
          value: "30"
        }
    ];

    const chartConfigs = {
        type: "column3d",
        width: "700",
        height: "500",
        dataFormat: "json",
        dataSource: {
          chart: {
            caption: "Countries With Most Oil Reserves [March 2020]",
            subCaption: "In MMbbl = One Million barrels",             
            xAxisName: "Country",
            yAxisName: "Reserves (MMbbl)",
            numberSuffix: "K",
            theme: "fusion" 
          },
          data: chartData
        }
    };

    return (
        <ReactFC className="FusionCharts-container" {...chartConfigs} />
    );
}

export function DyanmicChart() {

    const API_TOKEN = "bqhbfnnrh5rdcs9quri0";

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [chartConfigs, setChartConfigs] = useState({});

    useEffect(() => {
        fetch(`https://finnhub.io/api/v1/quote?symbol=AAPL&token=${API_TOKEN}`)
            .then(res => res.json())
            .then((result) => {
                const chartConfigs = {
                    type: "column2d",
                    width: "700",
                    height: "500",
                    dataFormat: "json",
                    dataSource: {
                        chart: {
                            caption: "Quote - APPLE INC",
                            subCaption: new Date().toLocaleString(),
                            xAxisName: "Types",
                            yAxisName: "Price",
                            numberSuffix: "USD",
                            theme: "fusion" 
                        },
                        data: [
                            {
                                label: "Current price",
                                value: result.c
                            },
                            {
                                label: "High price",
                                value: result.h
                            },
                            {
                                label: "Low price",
                                value: result.l
                            },
                            {
                                label: "Open price",
                                value: result.o
                            },
                            {
                                label: "Previous close price",
                                value: result.pc
                            }
                        ]
                    }
                };
                setIsLoaded(true);
                setChartConfigs(chartConfigs);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ReactFC className="FusionCharts-container" {...chartConfigs} />
        );
    }
}