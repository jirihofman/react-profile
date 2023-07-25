import PropTypes from 'prop-types';

export default function Profile({ isLoading, name, email, image }) {

	const placeholder = <div className='placeholder-glow'><div as={'span'} xs={10} className='placeholder w-100' /></div>;

	return <>
		<div className='float-start'>
			<div>
				<b>Name</b>
				<div>{isLoading ? placeholder : name}</div>
			</div>
			<div className='float-start'>
				<b>Email</b>
				<div>{isLoading ? placeholder : email}</div>
			</div>
		</div>
		<div className='float-end'>
			<img src={image} alt='user-profile-image' width='77px' height='77px' style={{ borderRadius: '100%' }} />
		</div>
	</>;
}

Profile.propTypes = {
	email: PropTypes.string.isRequired,
	image: PropTypes.string,
	isLoading: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired
};
