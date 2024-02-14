export default function Prestamos(){
    const lector = localStorage.getItem('lector');
    return (
        <>
        <h1>Bienvenido {lector}</h1>
        </>
    );
}