

const ViewDetails = () => {

      return (
            <section>
                  <div className='bg-[#9538E2] pt-8 pb-32 text-center text-white mb-10'>
                        <h1 className='text-4xl font-bold mb-3'>Product Details</h1>
                        <p>
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                        the coolest accessories, we have it all!
                        </p>
                  </div>

      <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                  <img src={imageUrl} alt="Album" />
            </figure>
            <div className="card-body">
                  <h2 className="card-title">New album is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
            </div>
            </div>
      </div>
            </section>
      );
};

export default ViewDetails;