
function Button() {
    const styles = {
        button: {
            padding: '10px 20px',
            fontSize: '1.2rem',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
        },
    };
    return(
        <button style={styles}>Click Me</button>
    );
}
export default Button;