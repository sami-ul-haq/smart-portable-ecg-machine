import { Link, useLocation } from "react-router-dom"
import Layout from "./Layout";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { points } from "../data";

const GraphScreen = () => {

    const { state } = useLocation();

    console.log(state);

    return (
        <Layout>
            <div className="third-screen">


            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={points}>
                <XAxis />
                <YAxis />
                    <Line dataKey="x" />
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
        </Layout>
    )
}

export default GraphScreen