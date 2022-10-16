import { Link, useLocation } from "react-router-dom"
import Layout from "./Layout";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { points } from "../data";

const GraphScreen = () => {

    const { state } = useLocation();

    console.log(state);

    return (
            <div className="third-screen">


                <ResponsiveContainer width="100%" height="100%" aspect={3}>
                    <LineChart
                        width={500}
                        height={300}
                        data={points}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="y" interval="preserveStartEnd"/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="y" stroke="blue" strokeWidth={1}/>
                    </LineChart>
                </ResponsiveContainer>

                <div className="third-footer">
                    <button className="btn-back">
                        <Link to={`/`}>
                            Back
                        </Link>
                    </button>
                </div>

            </div>
    )
}

export default GraphScreen