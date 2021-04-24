import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";



export default function App({ categoryScore }) {

    const data = [
        {
            subject: "HTML",
            A: categoryScore.TU,
            fullMark: 4
        },
        {
            subject: "CSS",
            A: categoryScore.C,
            fullMark: 4
        },
        {
            subject: "Javascript",
            A: categoryScore.PSE,
            fullMark: 4
        },
        {
            subject: "Nodejs",
            A: categoryScore.PS,
            fullMark: 4
        },
        {
            subject: "MongoDB",
            A: categoryScore.RO,
            fullMark: 4
        },
        {
            subject: "Reactjs",
            A: categoryScore.DDE,
            fullMark: 150
        }
    ];
    return (
        <div className='graphContainer'>
            <RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={650}
                height={500}
                data={data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                    name="Mike"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </div>
    );
}