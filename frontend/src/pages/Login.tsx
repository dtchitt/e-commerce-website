import { Form, FormControl, FormGroup, Button, Nav } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

type UserAcceptedResponse = {
	username: string;
	password: string;
	id: number;
};

export function Login() {
	const Navigate = useNavigate();
	const [alert, setAlert] = useState('');

	const [loginMode, setLoginMode] = useState(true);

	// user login/signup info
	const [username, setUserName] = useState('');
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

		console.log(username);
		console.log(password);
		console.log(confirm);
	};

	const loginUser = async () => {
		try {
			const { data } = await axios.post<UserAcceptedResponse>('api/user/login', {
				username: username,
				password: password,
			});

			Navigate('/home', {
				replace: false,
				state: {
					id: data.id,
					username: username,
				},
			});
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log('Axios Error: ', error.message);
				return error.message;
			} else {
				console.log('General Error: ', error);
				return 'Unexpected general error.';
			}
		}
	};

	const registerUser = async () => {
		try {
			const { data } = await axios.post<UserAcceptedResponse>('api/user', {
				username: username,
				password: username,
			});

			Navigate('/home', {
				replace: false,
				state: {
					id: data.id,
					username: username,
				},
			});
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				console.log('Axios Error: ', error.message);
				return error.message;
			} else {
				console.log('General Error: ', error);
				return 'Unexpected general error.';
			}
		}
	};

	const toggleMode = (): void => {
		setLoginMode(loginMode ? false : true);
	};

	const handleLogin = () => {
		// check for empty fields
		if (!username || !password || (!confirm && !loginMode)) {
			setAlert('All fields required.');
			return;
		} else if (password != confirm && !loginMode) {
			setAlert("Passwords don't match!");
			return;
		}

		if (loginMode) {
			loginUser();
		} else {
			registerUser();
		}
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
					<Button variant='secondary' size='sm' onClick={handleLogin}>
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
