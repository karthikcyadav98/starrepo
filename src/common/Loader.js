import React from 'react';
import LoaderImg from '../assest/loader.svg';

const Loader = () => {
	return (
		<div style={{marginTop: '22%', marginLeft: '47%'}}>
			<img
				src={LoaderImg}
				alt="Loading..."
				style={{
					width: '100px',
					marginBottom: '40%',
					display: 'block'
				}}
			/>
		</div>
	);
};

export default Loader;
