import React from 'react';
import LineGraph from '../LineGraph/LineGraph';

const Statistics = () => {
      return (
            <section>
                  <div className='bg-[#9538E2] p-8 text-center text-white mb-10'>
                        <h1 className='text-4xl font-bold'>Statistics</h1>
                        <p>
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                        the coolest accessories, we have it all!
                        </p>
                  </div>

                  <div className=''>
                        <LineGraph></LineGraph>
                  </div>
            </section>
      );
};

export default Statistics;