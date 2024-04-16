import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export default function IndexPage() {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleRegisterClick = () => {
        setShowLoginForm(false);
    };

    const handleLoginClick = () => {
        setShowLoginForm(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50">
            <div className="flex flex-col items-center justify-center w-full max-w-md px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to My Website</h1>
                {showLoginForm ? (
                    <>
                        <div className="mb-8">
                            <LoginForm />
                        </div>
                        <p className="text-gray-600 mb-4">
                            Don't have an account?{' '}
                            <a href="#" onClick={handleRegisterClick}>Register</a>
                        </p>
                    </>
                ) : (
                    <>
                        <div className="mb-8">
                            <RegisterForm />
                        </div>
                        <p className="text-gray-600 mb-4">
                            Already have an account?{' '}
                            <a href="#" onClick={handleLoginClick}>Login</a>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
