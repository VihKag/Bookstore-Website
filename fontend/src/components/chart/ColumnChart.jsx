import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ColumnChart = () => {
    const [totalY, setTotalY] = useState({ totalYSold: 0, totalYReturn: 0 });
  useEffect(() => {
    const options = {
        colors: ["#31C48D", "#F98080"],
        series: [
          {
            name: "Return",
            color: "#F98080",
            data: [
              { x: "Fiction", y: 31 },
              { x: "Children's Literature", y: 52 },
              { x: "Comics", y: 63 },
              { x: "Literature", y: 1 },
              { x: "Social Sciences", y: 20 },
              { x: "History", y: 23 },
              { x: "Business and Finance", y: 11 },
              { x: " Education", y: 67 },
            ],
          },
          {
            name: "Sold",
            color: "#31C48D",
            data: [
              { x: "Fiction", y: 391 },
              { x: "Children's Literature", y: 322 },
              { x: "Comics", y: 163 },
              { x: "Literature", y: 321 },
              { x: "Social Sciences", y: 222 },
              { x: "History", y: 323 },
              { x: "Business and Finance", y: 181 },
              { x: " Education", y: 267 },
            ],
          },
        ],
        chart: {
          type: "bar",
          width: "100%",
          fontFamily: "Inter, sans-serif",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "50%",
            borderRadiusApplication: "end",
            borderRadius: 8,
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
          style: {
            fontFamily: "Inter, sans-serif",
          },
        },
        states: {
          hover: {
            filter: {
              type: "darken",
              value: 1,
            },
          },
        },
        stroke: {
          show: true,
          width: 0,
          colors: ["transparent"],
        },
        grid: {
          show: true,
          strokeDashArray: 4,
          padding: {
            left: 8,
            right: 8,
            top: -14,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          floating: false,
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: "text-xs font-normal fill-black-900 dark:fill-gray-400",
            },
          },
          axisBorder: {
            show: true,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
        fill: {
          opacity: 1,
        },
      };
    if (
      document.getElementById("column-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chartElement = document.getElementById("column-chart");
      const chart = new ApexCharts(chartElement, options);
      chart.render();
    }   


    const totalYSold = options.series[0].data.reduce(
      (sum, item) => sum + item.y,
      0
    );
    const totalYReturn = options.series[1].data.reduce(
      (sum, item) => sum + item.y,
      0
    );
    setTotalY({totalYReturn,totalYSold});
  }, []);
  return (
    <>
      <div class="min-w-max bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
              <FontAwesomeIcon icon="fa-solid fa-book" size="2xl" />
            </div>
            <div className="pr-2">
              <h5 class="leading-none text-xl font-bold text-gray-900 dark:text-white pb-1 rounded-md bg-green-400 p-2">{totalY.totalYSold}/Week</h5>
            </div>
            <div>
              <h5 class="leading-none text-xl font-bold text-gray-900 dark:text-white pb-1 rounded-md bg-red-400 p-2">{totalY.totalYReturn}/Week</h5>
            </div>
          </div>        
        </div>

        <div class="grid grid-cols-2">
          <dl class="flex items-center">
            <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1">
              Money spent:
            </dt>
            <dd class="text-gray-900 text-sm dark:text-white font-semibold">
              $3,232
            </dd>
          </dl>
          <dl class="flex items-center justify-end">
            <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1">
              Conversion rate:
            </dt>
            <dd class="text-gray-900 text-sm dark:text-white font-semibold">
              1.2%
            </dd>
          </dl>
        </div>
        <div id="column-chart"></div>
      </div>
    </>
  );
};
export default ColumnChart;
