import foto from "../sris.png";

function Profile() {
    return <img src={foto.src} alt="sri septiani" className="fotoku" />;
  }

  export default function Hero() {
    return (
        <div  className="container mx-auto p-2 text-center">
          <h1 className="text-xl font-bold mb-4 text-center text-gray-600">CV ONLINE</h1>
          <h2 className="text-2xl font-bold mb-4 text-center text-black-400">Sri Septiani</h2>
          <Profile />
          <p>Saya adalah mahasiswi semester 5 prodi D3 Komputerisasi Akuntansi Universitas Ma'soem</p>
        </div>
    );
}