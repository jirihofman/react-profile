import { Image, Placeholder} from 'react-bootstrap';

export default function Profile({ isLoading, name, email, image }) {

	const placeholder = <Placeholder animation='glow'><Placeholder as={'span'} xs={10} /></Placeholder>;

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
			<Image src={isLoading ? placeholder : image} alt='user-profile-image' width='77px' height='77px' style={{ borderRadius: '100%' }} />
		</div>
	</>;
}

