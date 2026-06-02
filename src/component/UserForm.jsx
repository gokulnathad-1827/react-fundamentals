import React from 'react'

function UserForm() {
    const [form, setForm] = React.useState({
        name: "", email: "", dob: "", phone: "", password: ""
    })
    const [submittedData, setSubmittedData] = React.useState(null);
    const[isSubmit, setIsSubmit] = React.useState(false);
    const handleSumit=(e) => {
        e.preventDefault();
        setSubmittedData(form);
        setIsSubmit(true);
        console.log("Form submit:", form);
    }
    return (
        <div style={{ width: "400px", margin: 'auto', marginTop: "50px" }}>
            <h2>Registration Form</h2>
            {!isSubmit && (
            <form onSubmit={handleSumit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        value={form.dob}
                        onChange={(e) => setForm({ ...form, dob: e.target.value })}
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                </div>
                <button type="submit">Register</button>

            </form>
            )}
            {isSubmit && (
                <>
                <h2>User Info</h2>
                <p><strong>Name:</strong> {submittedData.name}</p>
                <p><strong>Email:</strong> {submittedData.email}</p>
                <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
                <p><strong>Phone:</strong> {submittedData.phone}</p>
                <p><strong>Password:</strong> {submittedData.password}</p>
                </>
            )}
        </div>
    )
}

export default UserForm
