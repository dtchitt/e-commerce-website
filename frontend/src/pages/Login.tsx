import { Form, FormControl, FormGroup, Button, Nav } from 'react-bootstrap';
import { useState } from 'react';
import '../styles/Login.css';

export function Login() {
	const [loginMode, setLoginMode] = useState(true);

	// user login/signup info
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');

	// handle change in user input
	const handleUserInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const eventID = event.target.id;

		switch (eventID) {
			case 'username':
				setUserName(event.target.value);
				break;
			case 'password':
				setPassword(event.target.value);
				break;
			case 'confirm':
				setConfirm(event.target.value);
				break;
			default:
				console.log('Something went wrong!');
		}

		console.log(userName);
		console.log(password);
		console.log(confirm);
	};


	const toggleMode = (): void => {
		setLoginMode(loginMode ? false : true);
	};

	return (
		<div className='login-background d-flex justify-content-center align-items-center'>
			<Form className='rounded py-3 px-4'>
				<div className='mb-4 mt-2 login-title'>
					<p>{loginMode ? 'Login' : 'Sign up'}</p>
				</div>

				<Form.Group className='mb-4' controlId='usernameInput'>

					<Form.Control placeholder='Username' onChange={handleUserInfoChange} />
				</Form.Group>
				<FormGroup className='mb-4' controlId='passwordInput'>
					<FormControl type='password' placeholder='Password' onChange={handleUserInfoChange} />
				</FormGroup>
				{!loginMode && (
					<Form.Group className='mb-3' controlId='confirmInput'>
						<FormControl
							type='password'
							placeholder='Confirm Password'
							onChange={handleUserInfoChange}
						/>

					</Form.Group>
				)}

				<div className='mb-4 d-grid gap-2'>
					<Button variant='secondary' size='sm'>
						{loginMode ? 'Login' : 'Sign up'}
					</Button>
				</div>

				<div className=' d-flex justify-content-center' onClick={toggleMode}>
					<p className='login-mode-switch'>
						{loginMode ? 'Create an account?' : 'Already have an account?'}
					</p>

				</div>
			</Form>
		</div>
	);
}
