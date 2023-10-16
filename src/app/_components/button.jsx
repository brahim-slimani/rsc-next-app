'use client'
export const Button = ({ label, action }) => {
    return (
        <button onClick={action || function () { alert("Salam there!") }}>{label}</button>
    )
}