"use client"
import styles from "@/app/ui/dashboard/chart/chart.module.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 

const data = [
    {
        name:"Lundi",
        sortie:0,
        retour:2,
    },
    {
        name:"Mardi",
        sortie:10,
        retour:10,
    },
    {
        name:"Mercredi",
        sortie:2,
        retour:0,
    },
    {
        name:"Jeudi",
        sortie:0,
        retour:2,
    },
    {
        name:"vendredi",
        sortie:1,
        retour:1,
    },
    {
        name:"Samedi",
        sortie:5,
        retour:2,
    },
]

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>weekly recap </h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sortie"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="retour" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
