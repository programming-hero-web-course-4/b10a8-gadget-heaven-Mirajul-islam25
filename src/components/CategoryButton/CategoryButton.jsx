import React from 'react';

const CategoryButton = ({category,onClick}) => {
    return (
        <button onClick={onClick} className='bg-purple-500 py-2 px-3 text-white hover:bg-white hover:text-purple-500 hover:border-2 hover:duration-500 hover:border-purple-500 rounded-3xl'>{category}</button>
    );
};

export default CategoryButton;