import React from 'react'
import Alert from 'react-bootstrap/Alert';

const AlertComp = ({ prop }) => {
    console.log(prop);

    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div>
                {prop.show && (
                    <Alert variant="danger" onClose={() => prop.setShow(false)} dismissible>
                        <p>{prop.message}</p>
                    </Alert>
                )}
            </div>
        </div>
    )
}

export default AlertComp