import React from 'react'

function PasswordChecker() {
    const [pass, SetPass] = React.useState("");
    const [msg, SetMsg] = React.useState("");
    React.useEffect(() => {
        if (pass.length < 5)
            SetMsg("Password is too short");
        else if (pass.length > 10)
            SetMsg("Strong Password");
    }
        , [pass])
    return (
        <div>
            <h2>Password</h2><input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => SetPass(e.target.value)}
            />
            <p>{msg}</p>
        </div>
    )
}

export default PasswordChecker
