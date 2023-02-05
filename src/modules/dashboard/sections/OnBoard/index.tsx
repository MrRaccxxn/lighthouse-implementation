import { useState } from 'react';
import { IntroMessage } from './IntroMessage';
import { RegisterSoulForm } from './RegisterSoulForm';

export const OnBoard = () => {
    const [showMessage, setShowMessage] = useState<boolean>(true)

    return <div className="w-full h-full">
        <div className="m-auto">
            <div className="max-w-6xl w-full m-auto h-screen flex justify-center items-center">
                {
                    showMessage ?
                        <IntroMessage changePage={() => setShowMessage(false)} /> :
                        <RegisterSoulForm />
                }
            </div>
        </div>
    </div>
}