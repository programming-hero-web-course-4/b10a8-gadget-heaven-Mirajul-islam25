import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const LineGraph = () => {

      const data = [
            { month: 'Jan', marks: 75 },
            { month: 'Feb', marks: 78 },
            { month: 'March', marks: 82 },
            { month: 'April', marks: 85 },
            { month: 'May', marks: 80 },
            { month: 'June', marks: 88 },
            { month: 'July', marks: 90 },
            { month: 'August', marks: 87 },
            { month: 'Sep', marks: 92 },
            { month: 'Oct', marks: 91 },
            { month: 'Nov', marks: 93 },
            { month: 'Dec', marks: 95 },
          ];
          

      return (
            <div>
                 <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="month" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="marks" fill="#8884d8" barSize={30} />
  </BarChart>
            </div>
      );
};

export default LineGraph;