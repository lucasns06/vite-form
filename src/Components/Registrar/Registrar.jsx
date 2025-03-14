import { useEffect, useState } from 'react';
import './Regsitrar.css'
import { FaAddressBook, FaBook, FaDog, FaFacebook, FaLock, FaPhone, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
const Registrar = () => {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [email, setEmail] = useState("");
    const [facebook, setFacebook] = useState("");
    const [senha, setSenha] = useState("");
    const [celular, setCelular] = useState("");
    const [pet, setPet] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        console.log("Dados de Login:", { nome, senha });
    }
    useEffect(() => {
        const entradas = document.querySelectorAll('.inputContainer');
        const entradasDois = document.querySelectorAll('input');

        // var tl = gsap.timeline();
        gsap.fromTo(entradas,
            {
                y: 20,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2
            }
        )
        gsap.fromTo(entradasDois,
            {
                outlineColor: 'white',
            },
            {
                outlineColor: 'rgba(255, 255, 255, 0.507)',
                stagger: 0.2,
                clearProps: 'all',
                delay: 2
            }
        )
    }, [])
    return (
        <div className='registroContainer'>
            <form onSubmit={handleSubmit}>
                <h1>Registro</h1>
                <br />
                <div className='inputContainer'>
                    <input
                        type='text'
                        placeholder='Nome completo'
                        value={nome}
                        required
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <br />
                <br />
                <div className='inputContainer'>
                    <input
                        type='number'
                        placeholder='Idade'
                        required
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                    />
                    <FaAddressBook className="icon" />
                </div>
                <br />
                <br />
                <div className='inputContainer'>
                    <input
                        type='text'
                        placeholder='Facebook'
                        required
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
                    />
                    <FaFacebook className="icon" />
                </div>
                <br />
                <br />
                <div className='inputContainer'>
                    <input
                        type='email'
                        placeholder='Email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FaBook className="icon" />
                </div>
                <br />
                <br />
                <div className='inputContainer'>
                    <input
                        type='password'
                        placeholder='Senha'
                        required
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>
                <br />
                <br />
                <div className='inputContainer'>
                    <input
                        type='number'
                        placeholder='Celular'
                        required
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                    />
                    <FaPhone className="icon" />
                </div>
                <br />
                <br />
                <div className='inputContainer'>
                    <input
                        type='text'
                        placeholder='Nome do pet'
                        required
                        value={pet}
                        onChange={(e) => setPet(e.target.value)}
                    />
                    <FaDog className="icon" />
                </div>
                <br />
                <br />
                <button type="submit">Registrar</button>
                <br />
                <div className="signup-link">
                    <p>
                        Já tem uma conta? <Link to="/">Logar</Link>{" "}
                    </p>
                </div>
            </form>
        </div>
    );
}
export default Registrar;